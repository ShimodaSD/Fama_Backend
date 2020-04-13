"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Sql = require("../infra/sql");
module.exports = class Curso {
    static validar(c) {
        return null;
    }
    static listar() {
        return __awaiter(this, void 0, void 0, function* () {
            let lista = null;
            yield Sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                lista = (yield sql.query("select idCurso, nomeCurso, responsavelCurso, horasSemanaisCurso, duracaoCurso, "
                    + " descricaoCurso from curso order by nomeCurso asc"));
            }));
            return (lista || []);
        });
    }
    // public static async obter(id: number): Promise<Contato> {
    // 	let lista: Contato[] = null;
    // 	await Sql.conectar(async (sql: Sql) => {
    // 		lista = await sql.query("select id, nome, endereco, email, peso from contato where id = ?",[id]) as Contato[];
    // 	});
    // 	if (lista && lista[0]) {
    // 		return lista[0];
    // 	}else {
    // 		return null;
    // 	}
    // 	//return ((lista && lista[0]) || null);
    // }
    static criar(c) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            if ((res = Curso.validar(c)))
                return res;
            yield Sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("insert into curso (nomeCurso,responsavelCurso,horasSemanaisCurso,duracaoCurso,descricaoCurso) values (?,?,?,?,?)", [c.nomeCurso, c.responsavelCurso, c.horasSemanaisCurso, c.duracaoCurso, c.descricaoCurso]);
            }));
        });
    }
    static alterar(c) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            if ((res = Curso.validar(c)))
                return res;
            yield Sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("update curso set nomeCurso = ?, responsavelCurso = ?, horasSemanaisCurso = ?, duracaoCurso = ?, descricaoCurso = ? where idCurso = ?", [c.nomeCurso, c.responsavelCurso, c.horasSemanaisCurso, c.duracaoCurso, c.descricaoCurso, c.idCurso]);
                res = sql.linhasAfetadas.toString();
            }));
        });
    }
    static excluir(idCurso) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = null;
            yield Sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("delete from curso where idCurso = " + idCurso);
                res = sql.linhasAfetadas.toString();
            }));
            return res;
        });
    }
};
//# sourceMappingURL=curso.js.map