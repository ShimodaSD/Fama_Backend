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


	public static async obter(idAluno: number): Promise<Presenca> {
		let a: Presenca[] = null
		let res: string = null;

		await sql.conectar(async (sql: sql) => {
			a = await sql.query("select idAluno, nomeAluno, DATE_FORMAT(dataNascAluno, '%d/%m/%Y') as dataNascAluno,cpfAluno,rgAluno,estadoCivilAluno,emailAluno,telefoneAluno,profissaoAluno,idEndereco,idUsuario from aluno where idAluno = " + idAluno) as Presenca[];
			res = sql.linhasAfetadas.toString();
		});

		return a[0];
	}


	public static async alterar(p: Presenca): Promise<string> {
		let res: string;
		if ((res = Presenca.validar(p)))
			return res;

		await sql.conectar(async (sql: sql) => {
			await sql.query("update aluno set nomeAluno = ?, dataNascAluno = STR_TO_DATE(?, '%d/%m/%Y'), cpfAluno = ?, rgAluno = ?, estadoCivilAluno = ?, emailAluno = ?, telefoneAluno = ?, profissaoAluno = ? where idAluno = ?", 
			[p.nomeAluno, p.dataNascAluno, p.cpfAluno, p.rgAluno, p.estadoCivilAluno, p.emailAluno, p.telefoneAluno, p.profissaoAluno, p.idAluno]);
			res = sql.linhasAfetadas.toString();
		});
	}


	public static async excluir(idAluno: number): Promise<string> {
		let res: string = null;
		await sql.conectar(async (sql: sql) => {
			await sql.query("delete from aluno where idAluno = " + idAluno);
			res = sql.linhasAfetadas.toString();
		});

		return res;
	}


	public static async listar(): Promise<Presenca[]> {
		let lista: Presenca[] = null;

		await sql.conectar(async (sql: sql) => {
			lista = await sql.query("select idAluno, nomeAluno, cpfAluno, telefoneAluno from aluno order by nomeAluno asc") as Presenca[];
		});

		return (lista || []);
	}

}