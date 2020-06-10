import sql = require("../infra/sql");

export = class Presenca {
	public idAulas: number[];
	public idAlunos: number[];
	public Aluno_Presente: number;


	public static async adicionar(p: Presenca): Promise<string> {
		let res: string;
		// if ((res = Presenca.validar(aulas)))
		// 	return res;

		await sql.conectar(async (sql: sql) => {
			p.idAulas.forEach( async(aula) => {
				await sql.query("INSERT INTO aluno_has_aula (idAluno, idAula, Aluno_Presente) VALUES(?, ? , ?);", [p[0].idAluno, aula, false])
			})
			res = sql.linhasAfetadas.toString();
		});

		return res
	}

	public static async listar(idAula: number): Promise<Presenca[]> {
		let lista: Presenca[] = null;

		await sql.conectar(async (sql: sql) => {
			lista = await sql.query(
				`
				select aluno.nomeAluno, aluno.idAluno, aluno_has_aula.Aluno_Presente from aluno
					left join aluno_has_aula on aluno_has_aula.idAluno = aluno.idAluno
					left join aula on aula.idAula = aluno_has_aula.idAula
					where aula.idAula = ?;
				`,[idAula]) as Presenca[];
		});

		return (lista || []);
	}

	public static async marcar(p: Presenca): Promise<string> {
		let res: string;
		// if ((res = Presenca.validar(aulas)))
		// 	return res;

		await sql.conectar(async (sql: sql) => {
			p.idAlunos.forEach( async(idAluno) => {
				await sql.query(
					`update aluno_has_aula
					set Aluno_Presente = 1
					where idAluno = ?;
				`, [idAluno])
			})
			res = sql.linhasAfetadas.toString();
		});

		return res
	}

}
