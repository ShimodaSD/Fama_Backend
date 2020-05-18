﻿import sql = require("../infra/sql");

export = class Curso {
	public idCurso: number;
	public nomeCurso: string;
	public responsavelCurso: string;
	public horasSemanaisCurso: string;
	public descricaoCurso: string;
	public duracaoCurso: string;

	private static validar(c: Curso): string {
		return null;
	}

	public static async criar(c: Curso): Promise<string> {
		let res: string;
		if ((res = Curso.validar(c)))
			return res;

		await sql.conectar(async (sql: sql) => {
			await sql.query("insert into curso (nomeCurso,responsavelCurso,horasSemanaisCurso,duracaoCurso,descricaoCurso) values (?,?,?,?,?)", [c.nomeCurso,c.responsavelCurso,c.horasSemanaisCurso,c.duracaoCurso,c.descricaoCurso]);
		});		
	}


	public static async obter(id: number): Promise<Curso> {
		let lista: Curso[] = null;

		await sql.conectar(async (sql: sql) => {
			lista = await sql.query("select idCurso, nomeCurso, responsavelCurso, horasSemanaisCurso, descricaoCurso, duracaoCursocurso where id = ?",[id]) as Curso[];
		});

		if (lista && lista[0]) {
			return lista[0];
		}else {
			return null;
		}

		//return ((lista && lista[0]) || null);
	}


	public static async alterar(c: Curso): Promise<string> {
		let res: string;
		if ((res = Curso.validar(c)))
			return res;

		await sql.conectar(async (sql: sql) => {	
			await sql.query("update curso set nomeCurso = ?, responsavelCurso = ?, horasSemanaisCurso = ?, duracaoCurso = ?, descricaoCurso = ? where idCurso = ?", [c.nomeCurso,c.responsavelCurso,c.horasSemanaisCurso,c.duracaoCurso,c.descricaoCurso,c.idCurso]);
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
			lista = await sql.query("select idCurso, nomeCurso, responsavelCurso, horasSemanaisCurso, duracaoCurso, "
			+ " descricaoCurso from curso order by idCurso desc") as Curso[];
		});

		return (lista || []);
	}

	

	

	

	
}

