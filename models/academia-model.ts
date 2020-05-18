import Sql = require("../infra/sql");

export = class Presenca {
	public idAula: number;
	public idAluno: number;
	public Aluno_Presente: number;


	public static async listar(id:number): Promise<Presenca[]> {
		let lista: Presenca[] = null;

		await Sql.conectar(async (sql: Sql) => {
			lista = await sql.query("select * from usuario inner join funcionario on (funcionario.idUsuario = usuario.idUsuario) inner join curso_has_funcionario on (curso_has_funcionario.idFuncionario = funcionario.idFuncionario) inner join curso on (curso.idCurso = curso_has_funcionario.idCurso) inner join aula on (aula.idCurso = curso.idCurso) inner join aluno_has_aula on (aluno_has_aula.idAula = aula.idAula) where idUsuario = ?",[id]) as Presenca[];
		});

		return (lista || []);
	}

}
