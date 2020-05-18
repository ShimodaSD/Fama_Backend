import Sql = require("../infra/sql");

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
    public numeroSisAluno:number;
    public idUsuario:number;


	public static async listar(id:number): Promise<Presenca[]> {
		let lista: Presenca[] = null;

		await Sql.conectar(async (sql: Sql) => {
			lista = await sql.query("select idAluno,dataNascAluno,cpfAluno,rgAluno,estadoCivilAluno,emailAluno,telefoneAluno,profissaoAluno,nomeAluno,idEndereco,numeroSisAluno,idUsuario from aluno where idUsuario = ?",[id]) as Presenca[];
		});

		return (lista || []);
	}

}