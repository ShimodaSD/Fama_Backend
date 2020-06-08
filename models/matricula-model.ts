import sql = require("../infra/sql");

export = class Presenca {
	public idAulas: number[];
	public idAluno: number;
	public Aluno_Presente: number;


	public static async adicionar(p: Presenca): Promise<string> {
		let res: string;
		// if ((res = Presenca.validar(aulas)))
		// 	return res;

		await sql.conectar(async (sql: sql) => {
			p.idAulas.forEach( async(aula) => {
				await sql.query("INSERT INTO aluno_has_aula (idAluno, idAula, Aluno_Presente) VALUES(?, ? , ?);", [p.idAluno, aula, true])
			})
			res = sql.linhasAfetadas.toString();
		});

		return res
	}

}
