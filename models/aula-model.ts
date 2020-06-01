import sql = require("../infra/sql");

export = class Aula {
	public idAula: number;
	public idCurso: string;
	public cdDia: string;
	public dsDia: string;
	public hrInicio: string;
	public hrFim: string;
	public duracao: string;

	private static validar(a: Aula): string {
		return null;
	}

	public static async listar(idCurso: number): Promise<Aula[]> {
		let lista: Aula[] = null;

		await sql.conectar(async (sql: sql) => {
			lista = await sql.query("select idAula, idCurso, cdDia, hrInicio, hrFim, TIMEDIFF(hrFim, hrInicio) as duracao from aula where idCurso = " + idCurso) as Aula[];
		});

		return (lista || []);
	}

	public static async criar(a: Aula): Promise<string> {
		let res: string;
		if ((res = Aula.validar(a)))
			return res;

		await sql.conectar(async (sql: sql) => {
			await sql.query("insert into aula (cdDia, hrInicio, hrFim) values (?, TIME_FORMAT(?, '%H/%i/%S'), TIME_FORMAT(?, '%H/%i/%S'))", 
				[a.cdDia, a.hrInicio, a.hrFim]);
		});
	}

	public static async alterar(a: Aula): Promise<string> {
		let res: string;
		if ((res = Aula.validar(a)))
			return res;

		await sql.conectar(async (sql: sql) => {
			await sql.query("update aula set cdDia = ?, hrInicio = ?, hrFim = ? where idAula = ?", [a.cdDia, a.hrInicio, a.hrFim, a.idCurso]);
			res = sql.linhasAfetadas.toString();
		});
	}


	public static async excluir(idAula: number): Promise<string> {
		let res: string = null;

		await sql.conectar(async (sql: sql) => {
			await sql.query("delete from aula where idAula = " + idAula);
			res = sql.linhasAfetadas.toString();
		});

		return res;
	}

	public static async diasSemana(): Promise<Aula[]> {
		let lista: Aula[]
		await sql.conectar(async (sql: sql) => {
			lista = await sql.query("select cdDia, dsDia from dias") as Aula[];
		});

		return (lista || []);
	}
}