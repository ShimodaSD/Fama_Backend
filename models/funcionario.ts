import Sql = require("../infra/sql");

export = class Funcionario {
	public idFuncionario: number;
	public nomeFuncionario: string;
	public dataNascFuncionario: Date;
	public cpfFuncionario: string;
	public rgFuncionario: string;
    public estadoCivilFuncionario: string;
    public emailFuncionario: string;
    public telefoneFuncionario: string;
    public atuacaoFuncionario : string;
    public cargaHorariaFuncionario: string;
    public salarioFuncionario: string;
    public formacaoFuncionario: string;
    public idEndereco: number;
    public numeroSisFuncionario: number;

    private static validar(f: Funcionario): string {
		
		
		return null;
    }
    
    public static async listar(): Promise<Funcionario[]> {
		let lista: Funcionario[] = null;

		await Sql.conectar(async (sql: Sql) => {
            lista = await sql.query("select idFuncionario,nomeFuncionario,dataNascFuncionario,cpfFuncionario,rgFuncionario,estadoCivilFuncionario,emailFuncionario,telefoneFuncionario,"
            +"atuacaoFuncionario ,cargaHorariaFuncionario,salarioFuncionario,idEndereco,numeroSisFuncionario from funcionario order by nomeFuncionario asc") as Funcionario[];
		});

		return (lista || []);
    }
    
    public static async criar(f: Funcionario): Promise<string> {
		let res: string;
		if ((res = Funcionario.validar(f)))
			return res;

		await Sql.conectar(async (sql: Sql) => {
                await sql.query("insert into funcionario (nomeFuncionario,dataNascFuncionario,cpfFuncionario,rgFuncionario,estadoCivilFuncionario,emailFuncionario,telefoneFuncionario,atuacaoFuncionario ,cargaHorariaFuncionario,salarioFuncionario,idEndereco,numeroSisFuncionario) values (?,?,?,?,?,?,?,?,?,?,?,?)", 
                [f.nomeFuncionario,f.dataNascFuncionario,f.cpfFuncionario,f.rgFuncionario,f.estadoCivilFuncionario,f.emailFuncionario,f.telefoneFuncionario,f.atuacaoFuncionario ,f.cargaHorariaFuncionario,f.salarioFuncionario,f.idEndereco,f.numeroSisFuncionario]);
		});

		
	}

	public static async alterar(f: Funcionario): Promise<string> {
		let res: string;
		if ((res = Funcionario.validar(f)))
			return res;

			//TO-DO ADICIONAR ID ENDERECO
		await Sql.conectar(async (sql: Sql) => {	
				await sql.query("update funcionario set nomeFuncionario = ?, dataNascFuncionario = ?, cpfFuncionario = ?, rgFuncionario = ?, estadoCivilFuncionario = ?, emailFuncionario = ?, telefoneFuncionario = ?, atuacaoFuncionario = ?, cargaHorariaFuncionario = ?, salarioFuncionario = ? where idFuncionario = ?", [f.nomeFuncionario,f.dataNascFuncionario,f.cpfFuncionario,f.rgFuncionario,f.estadoCivilFuncionario,f.emailFuncionario,f.telefoneFuncionario,f.atuacaoFuncionario ,f.cargaHorariaFuncionario,f.salarioFuncionario,f.idFuncionario]);
				res = sql.linhasAfetadas.toString();
		});

		
	}

	public static async excluir(idFuncionario: number): Promise<string> {
		let res: string = null;

		await Sql.conectar(async (sql: Sql) => {
			await sql.query("delete from funcionario where idFuncionario = " + idFuncionario);
			res = sql.linhasAfetadas.toString();
		});

		return res;
	}

}