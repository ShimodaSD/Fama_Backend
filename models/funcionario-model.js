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
module.exports = class Funcionario {
    static validar(f) {
        return null;
    }
    static listar() {
        return __awaiter(this, void 0, void 0, function* () {
            let lista = null;
            yield Sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                lista = (yield sql.query("select idFuncionario,nomeFuncionario,dataNascFuncionario,cpfFuncionario,rgFuncionario,estadoCivilFuncionario,emailFuncionario,telefoneFuncionario,"
                    + "atuacaoFuncionario ,cargaHorariaFuncionario,salarioFuncionario,idEndereco,numeroSisFuncionario from funcionario order by nomeFuncionario asc"));
            }));
            return (lista || []);
        });
    }
    static criar(f) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            if ((res = Funcionario.validar(f)))
                return res;
            yield Sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("insert into funcionario (nomeFuncionario,dataNascFuncionario,cpfFuncionario,rgFuncionario,estadoCivilFuncionario,emailFuncionario,telefoneFuncionario,atuacaoFuncionario ,cargaHorariaFuncionario,salarioFuncionario,idEndereco,numeroSisFuncionario) values (?,?,?,?,?,?,?,?,?,?,?,?)", [f.nomeFuncionario, f.dataNascFuncionario, f.cpfFuncionario, f.rgFuncionario, f.estadoCivilFuncionario, f.emailFuncionario, f.telefoneFuncionario, f.atuacaoFuncionario, f.cargaHorariaFuncionario, f.salarioFuncionario, f.idEndereco, f.numeroSisFuncionario]);
            }));
        });
    }
    static alterar(f) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            if ((res = Funcionario.validar(f)))
                return res;
            //TO-DO ADICIONAR ID ENDERECO
            yield Sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("update funcionario set nomeFuncionario = ?, dataNascFuncionario = ?, cpfFuncionario = ?, rgFuncionario = ?, estadoCivilFuncionario = ?, emailFuncionario = ?, telefoneFuncionario = ?, atuacaoFuncionario = ?, cargaHorariaFuncionario = ?, salarioFuncionario = ? where idFuncionario = ?", [f.nomeFuncionario, f.dataNascFuncionario, f.cpfFuncionario, f.rgFuncionario, f.estadoCivilFuncionario, f.emailFuncionario, f.telefoneFuncionario, f.atuacaoFuncionario, f.cargaHorariaFuncionario, f.salarioFuncionario, f.idFuncionario]);
                res = sql.linhasAfetadas.toString();
            }));
        });
    }
    static excluir(idFuncionario) {
        return __awaiter(this, void 0, void 0, function* () {
            let res = null;
            yield Sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                yield sql.query("delete from funcionario where idFuncionario = " + idFuncionario);
                res = sql.linhasAfetadas.toString();
            }));
            return res;
        });
    }
};
//# sourceMappingURL=funcionario-model.js.map