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
module.exports = class Presenca {
    static validar(p) {
        return null;
    }
    // placeholder idEndereco e idUsuario
    static criar(p) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            if ((res = Presenca.validar(p)))
                return res;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("insert into aluno(dataNascAluno, cpfAluno, rgAluno, estadoCivilAluno, emailAluno, telefoneAluno, profissaoAluno, nomeAluno, idEndereco, idUsuario)" +
                    "values (?,?,?,?,?,?,?,?,?,?)", [p.dataNascAluno, p.cpfAluno, p.rgAluno, p.estadoCivilAluno, p.emailAluno, p.telefoneAluno, p.profissaoAluno, p.nomeAluno, 2, 2]);
            }));
        });
    }
    static obter(idAluno) {
        return __awaiter(this, void 0, void 0, function* () {
            let a = null;
            let res = null;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                a = (yield sql.query("select idAluno, nomeAluno, DATE_FORMAT(dataNascAluno, '%d/%m/%Y') as dataNascAluno,cpfAluno,rgAluno,estadoCivilAluno,emailAluno,telefoneAluno,profissaoAluno,idEndereco,idUsuario from aluno where idAluno = " + idAluno));
                res = sql.linhasAfetadas.toString();
            }));
            return a[0];
        });
    }
    static alterar(p) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            if ((res = Presenca.validar(p)))
                return res;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("update aluno set nomeAluno = ?, dataNascAluno = STR_TO_DATE(?, '%d/%m/%Y'), cpfAluno = ?, rgAluno = ?, estadoCivilAluno = ?, emailAluno = ?, telefoneAluno = ?, profissaoAluno = ? where idAluno = ?", [p.nomeAluno, p.dataNascAluno, p.cpfAluno, p.rgAluno, p.estadoCivilAluno, p.emailAluno, p.telefoneAluno, p.profissaoAluno, p.idAluno]);
                res = sql.linhasAfetadas.toString();
            }));
        });
    }
    static excluir(idAluno) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = null;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("delete from aluno where idAluno = " + idAluno);
                res = sql.linhasAfetadas.toString();
            }));
            return res;
        });
    }
    static listar() {
        return __awaiter(this, void 0, void 0, function* () {
            let lista = null;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                lista = (yield sql.query("select idAluno, nomeAluno, cpfAluno, telefoneAluno from aluno order by nomeAluno asc"));
            }));
            return (lista || []);
        });
    }
};
//# sourceMappingURL=aluno-model.js.map