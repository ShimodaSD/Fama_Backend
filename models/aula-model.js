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
const sql = require("../infra/sql");
module.exports = class Aula {
    static validar(a) {
        return null;
    }
    static listar(idCurso) {
        return __awaiter(this, void 0, void 0, function* () {
            let lista = null;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                lista = (yield sql.query("select idAula, idCurso, aula.cdDia, dsDia, TIME_FORMAT(hrInicio, '%H:%i') as hrInicio, TIME_FORMAT(hrFim, '%H:%i') as hrFim, TIMEDIFF(hrFim, hrInicio) as duracao from aula left join dias on dias.cdDia = aula.cdDia where idCurso = " + idCurso));
            }));
            return (lista || []);
        });
    }
    static criar(a) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            if ((res = Aula.validar(a)))
                return res;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("insert into aula (idCurso, cdDia, hrInicio, hrFim) values (?, ?, TIME_FORMAT(?, '%H:%i'), TIME_FORMAT(?, '%H:%i'))", [a.idCurso, a.cdDia, a.hrInicio, a.hrFim]);
            }));
        });
    }
    static alterar(a) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            if ((res = Aula.validar(a)))
                return res;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("update aula set cdDia = ?, hrInicio = ?, hrFim = ? where idAula = ?", [a.cdDia, a.hrInicio, a.hrFim, a.idCurso]);
                res = sql.linhasAfetadas.toString();
            }));
        });
    }
    static excluir(idAula) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = null;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("delete from aula where idAula = " + idAula);
                res = sql.linhasAfetadas.toString();
            }));
            return res;
        });
    }
    static diasSemana() {
        return __awaiter(this, void 0, void 0, function* () {
            let lista;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                lista = (yield sql.query("select cdDia, dsDia from dias"));
            }));
            return (lista || []);
        });
    }
};
//# sourceMappingURL=aula-model.js.map