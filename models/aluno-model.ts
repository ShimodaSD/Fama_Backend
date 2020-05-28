import sql = require("../infra/sql");

export = class Presenca {
    public idAluno:number;
    public dataNascAluno:string;
    public cpfAluno:string;
    public rgAluno:string;
    public estadoCivilAluno:string;
    public emailAluno:string;
    public telefoneAluno:string;
    public profissaoAluno:string;
    public nomeAluno:string;
    public idEndereco:number;
    public idUsuario:number;

	private static validar(p: Presenca): string {
		return null;
	}

    // placeholder idEndereco e idUsuario
	public static async criar(p: Presenca): Promise<string> {
		let res: string;
		if ((res = Presenca.validar(p)))
			return res;

		await sql.conectar(async (sql: sql) => {
            await sql.query("insert into aluno(dataNascAluno, cpfAluno, rgAluno, estadoCivilAluno, emailAluno, telefoneAluno, profissaoAluno, nomeAluno, idEndereco, idUsuario)" + 
            "values (?,?,?,?,?,?,?,?,?,?)", [p.dataNascAluno, p.cpfAluno, p.rgAluno, p.estadoCivilAluno, p.emailAluno, p.telefoneAluno, p.profissaoAluno, p.nomeAluno, 2, 2]);
		});		
	}


	public static async obter(id: number): Promise<Presenca> {
		let lista: Presenca[] = null;

		await sql.conectar(async (sql: sql) => {
			lista = await sql.query("select * from aluno where id = ?",[id]) as Presenca[];
		});

		if (lista && lista[0]) {
			return lista[0];
		}else {
			return null;
		}

		//return ((lista && lista[0]) || null);
	}


	public static async alterar(p: Presenca): Promise<string> {
		let res: string;
		if ((res = Presenca.validar(p)))
			return res;

		await sql.conectar(async (sql: sql) => {	
            await sql.query("update aluno set dataNascAluno=?, cpfAluno=?, rgAluno=?, estadoCivilAluno=?, emailAluno=?, telefoneAluno=?, profissaoAluno=?, nomeAluno=?, idEndereco=? where idAluno = ?", 
            [p.dataNascAluno, p.cpfAluno, p.rgAluno, p.estadoCivilAluno, p.emailAluno, p.telefoneAluno, p.profissaoAluno, p.nomeAluno, p.idEndereco, p.idUsuario]);
			res = sql.linhasAfetadas.toString();
		});
	}


	public static async excluir(idAluno: number): Promise<string> {
		let res: string = null;
        console.log('idAluno ->', idAluno)
		await sql.conectar(async (sql: sql) => {
			await sql.query("delete from aluno where idAluno = " + idAluno);
			res = sql.linhasAfetadas.toString();
		});

		return res;
	}


	public static async listar(): Promise<Presenca[]> {
		let lista: Presenca[] = null;

		await sql.conectar(async (sql: sql) => {
			lista = await sql.query("select idAluno, dataNascAluno, cpfAluno, rgAluno, estadoCivilAluno, emailAluno, telefoneAluno, profissaoAluno, nomeAluno from aluno order by nomeAluno desc") as Presenca[];
		});

		return (lista || []);
	}

}