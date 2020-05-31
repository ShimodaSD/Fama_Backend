import sql = require("../infra/sql");

export = class Curso {
	public idCurso: number;
	public nomeCurso: string;
	public responsavelCurso: string;
	public horasSemanaisCurso: number;
	public descricaoCurso: string;

	private static validar(c: Curso): string {
		return null;
	}

	public static async criar(c: Curso): Promise<string> {
		let res: string;
		if ((res = Curso.validar(c)))
			return res;

		await sql.conectar(async (sql: sql) => {
			await sql.query("insert into curso (nomeCurso,responsavelCurso,horasSemanaisCurso,descricaoCurso) values (?,?,?,?)", [c.nomeCurso,c.responsavelCurso,c.horasSemanaisCurso,c.descricaoCurso]);
		});		
	}


	public static async obter(idCurso: number): Promise<Curso> {
		let curso: Curso[] = null
		let res: string = null;

		await sql.conectar(async (sql: sql) => {
			curso = await sql.query("select * from curso where idCurso = " + idCurso) as Curso[];
			res = sql.linhasAfetadas.toString();
		});
	
		return curso[0];
	}


	public static async alterar(c: Curso): Promise<string> {
		let res: string;
		if ((res = Curso.validar(c)))
			return res;

		await sql.conectar(async (sql: sql) => {	
			await sql.query("update curso set nomeCurso = ?, responsavelCurso = ?, horasSemanaisCurso = ?, descricaoCurso = ? where idCurso = ?", [c.nomeCurso,c.responsavelCurso,c.horasSemanaisCurso,c.descricaoCurso,c.idCurso]);
			res = sql.linhasAfetadas.toString();
		});
	}


	public static async excluir(idCurso: number): Promise<string> {
		let res: string = null;

		await sql.conectar(async (sql: sql) => {
			await sql.query("delete from curso where idCurso = " + idCurso);
			res = sql.linhasAfetadas.toString();
		});

		return res;
	}


	public static async listar(): Promise<Curso[]> {
		let lista: Curso[] = null;

		await sql.conectar(async (sql: sql) => {
			lista = await sql.query("SELECT idCurso, nomeCurso, responsavelCurso, horasSemanaisCurso FROM curso ORDER BY nomeCurso asc") as Curso[];
		});

		return (lista || []);
	}
}