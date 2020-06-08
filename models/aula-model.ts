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
			lista = await sql.query("select idAula, idCurso, aula.cdDia, dsDia, TIME_FORMAT(hrInicio, '%H:%i') as hrInicio, TIME_FORMAT(hrFim, '%H:%i') as hrFim, TIMEDIFF(hrFim, hrInicio) as duracao from aula left join dias on dias.cdDia = aula.cdDia where idCurso = " + idCurso) as Aula[];
		});

		return (lista || []);
	}

	public static async criar(a: Aula): Promise<string> {
		let res: string;
		if ((res = Aula.validar(a)))
			return res;

		await sql.conectar(async (sql: sql) => {
			await sql.query("insert into aula (idCurso, cdDia, hrInicio, hrFim) values (?, ?, TIME_FORMAT(?, '%H:%i'), TIME_FORMAT(?, '%H:%i'))", 
				[a.idCurso, a.cdDia, a.hrInicio, a.hrFim]);
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