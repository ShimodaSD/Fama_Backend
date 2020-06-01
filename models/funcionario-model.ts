import sql = require("../infra/sql");

export = class Funcionario {
	public idFuncionario: number;
	public nomeFuncionario: string;
	public dataNascFuncionario: Date;
	public cpfFuncionario: string;
	public rgFuncionario: string;
	public estadoCivilFuncionario: string;
	public emailFuncionario: string;
	public telefoneFuncionario: string;
	public atuacaoFuncionario: string;
	public cargaHorariaFuncionario: string;
	public salarioFuncionario: string;
	public formacaoFuncionario: string;
	public idEndereco: number;
	public idUsuario: number;

	private static validar(f: Funcionario): string {


		return null;
	}

	public static async listar(): Promise<Funcionario[]> {
		let lista: Funcionario[] = null;

		await sql.conectar(async (sql: sql) => {
			lista = await sql.query("select idFuncionario, nomeFuncionario,cpfFuncionario,telefoneFuncionario,atuacaoFuncionario from funcionario order by nomeFuncionario asc") as Funcionario[];
		});

		return (lista || []);
	}

	public static async obter(idFuncionario: number): Promise<Funcionario> {
		let f: Funcionario[] = null
		let res: string = null;

		await sql.conectar(async (sql: sql) => {
			f = await sql.query("select idFuncionario, nomeFuncionario, DATE_FORMAT(dataNascFuncionario, '%d/%m/%Y') as dataNascFuncionario,cpfFuncionario,rgFuncionario,estadoCivilFuncionario,emailFuncionario,telefoneFuncionario,atuacaoFuncionario,cargaHorariaFuncionario,salarioFuncionario,formacaoFuncionario,idEndereco,idUsuario from funcionario where idFuncionario = " + idFuncionario) as Funcionario[];
			res = sql.linhasAfetadas.toString();
		});

		return f[0];
	}

	public static async criar(f: Funcionario): Promise<string> {
		let res: string;
		if ((res = Funcionario.validar(f)))
			return res;

		await sql.conectar(async (sql: sql) => {
			await sql.query("insert into funcionario (nomeFuncionario,dataNascFuncionario,cpfFuncionario,rgFuncionario,estadoCivilFuncionario,emailFuncionario,telefoneFuncionario,atuacaoFuncionario ,cargaHorariaFuncionario,salarioFuncionario,formacaoFuncionario,idEndereco,idUsuario)" 
			+ "values (?,STR_TO_DATE(?, '%d/%m/%Y'),?,?,?,?,?,?,?,?,?,2,2);",
				[f.nomeFuncionario, f.dataNascFuncionario, f.cpfFuncionario, f.rgFuncionario, f.estadoCivilFuncionario, f.emailFuncionario, f.telefoneFuncionario, f.atuacaoFuncionario, f.cargaHorariaFuncionario, f.salarioFuncionario, f.formacaoFuncionario]);
		});


	}

	public static async alterar(f: Funcionario): Promise<string> {
		let res: string;
		if ((res = Funcionario.validar(f)))
			return res;

		//TO-DO ADICIONAR ID ENDERECO
		await sql.conectar(async (sql: sql) => {
			await sql.query("update funcionario set nomeFuncionario = ?, dataNascFuncionario = STR_TO_DATE(?, '%d/%m/%Y'), cpfFuncionario = ?, rgFuncionario = ?, estadoCivilFuncionario = ?, emailFuncionario = ?, telefoneFuncionario = ?, atuacaoFuncionario = ?, cargaHorariaFuncionario = ?, salarioFuncionario = ?, formacaoFuncionario = ? where idFuncionario = ?", [f.nomeFuncionario, f.dataNascFuncionario, f.cpfFuncionario, f.rgFuncionario, f.estadoCivilFuncionario, f.emailFuncionario, f.telefoneFuncionario, f.atuacaoFuncionario, f.cargaHorariaFuncionario, f.salarioFuncionario, f.formacaoFuncionario, f.idFuncionario]);
			res = sql.linhasAfetadas.toString();
		});


	}

	public static async excluir(idFuncionario: number): Promise<string> {
		let res: string = null;

		await sql.conectar(async (sql: sql) => {
			await sql.query("delete from funcionario where idFuncionario = " + idFuncionario);
			res = sql.linhasAfetadas.toString();
		});

		return res;
	}

}