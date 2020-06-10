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
    static adicionar(p) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            // if ((res = Presenca.validar(aulas)))
            // 	return res;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                p.idAulas.forEach((aula) => __awaiter(this, void 0, void 0, function* () {
                    yield sql.query("INSERT INTO aluno_has_aula (idAluno, idAula, Aluno_Presente) VALUES(?, ? , ?);", [p[0].idAluno, aula, false]);
                }));
                res = sql.linhasAfetadas.toString();
            }));
            return res;
        });
    }
    static listar(idAula) {
        return __awaiter(this, void 0, void 0, function* () {
            let lista = null;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                lista = (yield sql.query(`
				select aluno.nomeAluno, aluno.idAluno, aluno_has_aula.Aluno_Presente from aluno
					left join aluno_has_aula on aluno_has_aula.idAluno = aluno.idAluno
					left join aula on aula.idAula = aluno_has_aula.idAula
					where aula.idAula = ?;
				`, [idAula]));
            }));
            return (lista || []);
        });
    }
    static marcar(p) {
        return __awaiter(this, void 0, void 0, function* () {
            let res;
            // if ((res = Presenca.validar(aulas)))
            // 	return res;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                p.idAlunos.forEach((idAluno) => __awaiter(this, void 0, void 0, function* () {
                    yield sql.query(`update aluno_has_aula
					set Aluno_Presente = 1
					where idAluno = ?;
				`, [idAluno]);
                }));
                res = sql.linhasAfetadas.toString();
            }));
            return res;
        });
    }
};
//# sourceMappingURL=matricula-model.js.map