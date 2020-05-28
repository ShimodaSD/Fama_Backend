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
    static obter(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let lista = null;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                lista = (yield sql.query("select * from aluno where id = ?", [id]));
            }));
            if (lista && lista[0]) {
                return lista[0];
            }
            else {
                return null;
            }
            //return ((lista && lista[0]) || null);
        });
    }
    static alterar(p) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            if ((res = Presenca.validar(p)))
                return res;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("update aluno set dataNascAluno=?, cpfAluno=?, rgAluno=?, estadoCivilAluno=?, emailAluno=?, telefoneAluno=?, profissaoAluno=?, nomeAluno=?, idEndereco=? where idAluno = ?", [p.dataNascAluno, p.cpfAluno, p.rgAluno, p.estadoCivilAluno, p.emailAluno, p.telefoneAluno, p.profissaoAluno, p.nomeAluno, p.idEndereco, p.idUsuario]);
                res = sql.linhasAfetadas.toString();
            }));
        });
    }
    static excluir(idAluno) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = null;
            console.log('idAluno ->', idAluno);
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
                lista = (yield sql.query("select idAluno, dataNascAluno, cpfAluno, rgAluno, estadoCivilAluno, emailAluno, telefoneAluno, profissaoAluno, nomeAluno from aluno order by nomeAluno desc"));
            }));
            return (lista || []);
        });
    }
};
//# sourceMappingURL=aluno-model.js.map