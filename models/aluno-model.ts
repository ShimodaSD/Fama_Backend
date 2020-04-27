import Sql = require("../infra/sql");

export = class Aluno {
	public idAluno: number;
	public dataNascAluno: string;
	public cpfAluno: string;
    public rgAluno: string;
    public estadoCivilAluno: string
    public emailAluno :string
    public telefoneAluno :string
    public profissaoAluno :string
    public nomeAluno :string
    public Usuario_idUsuario :number
    public numeroSisAluno : number
    public idEndereco : number

    private static validar(a: Aluno): string {
		
		
		return null;
    }
    
    public static async listar(): Promise<Aluno[]> {
		let lista: Aluno[] = null;

		await Sql.conectar(async (sql: Sql) => {
            lista = await sql.query("select idAluno,dataNascAluno,cpfAluno ,rgAluno ,estadoCivilAluno ,emailAluno ,telefoneAluno ,profissaoAluno ,nomeAluno ,idEndereco ,numeroSisAluno ,Usuario_idUsuario"
            +" from aluno order by nomeAluno asc") as Aluno[];
		});

		return (lista || []);
    }
    
    public static async criar(a: Aluno): Promise<string> {
		let res: string;
		if ((res =Aluno.validar(a)))
			return res;

		await Sql.conectar(async (sql: Sql) => {
                await sql.query("insert into aluno (dataNascAluno,cpfAluno,rgAluno,estadoCivilAluno,emailAluno,telefoneAluno,profissaoAluno,nomeAluno ,numeroSisAluno,Usuario_idUsuario) values (?,?,?,?,?,?,?,?,?,?,?)", 
                [a.dataNascAluno,a.cpfAluno,a.rgAluno,a.estadoCivilAluno,a.emailAluno,a.telefoneAluno,a.profissaoAluno ,a.nomeAluno,a.numeroSisAluno,a.Usuario_idUsuario,a.numeroSisAluno]);
		});

		
	}

	public static async alterar(a: Aluno): Promise<string> {
		let res: string;
		if ((res = Aluno.validar(a)))
			return res;

			//TO-DO ADICIONAR ID ENDERECO
		await Sql.conectar(async (sql: Sql) => {	
				await sql.query("update aluno set dataNascAluno = ?, cpfAluno = ?, rgAluno = ?, estadoCivilAluno = ?, emailAluno = ?, telefoneAluno = ?, profissaoAluno = ?, nomeAluno = ?,  numeroSisAluno = ?,Usuario_idUsuario=? where idAluno = ?", [a.dataNascAluno,a.cpfAluno,a.rgAluno,a.estadoCivilAluno,a.emailAluno,a.telefoneAluno,a.profissaoAluno,a.nomeAluno ,a.idEndereco,a.numeroSisAluno,a.Usuario_idUsuario,a.idAluno]);
				res = sql.linhasAfetadas.toString();
		});

		
	}

	public static async excluir(idAluno: number): Promise<string> {
		let res: string = null;

		await Sql.conectar(async (sql: Sql) => {
			await sql.query("delete from aluno where idAluno = " + idAluno);
			res = sql.linhasAfetadas.toString();
		});

		return res;
	}



}


