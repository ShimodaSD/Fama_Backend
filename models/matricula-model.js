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
                    yield sql.query("INSERT INTO aluno_has_aula (idAluno, idAula, Aluno_Presente) VALUES(?, ? , ?);", [p.idAluno, aula, true]);
                }));
                res = sql.linhasAfetadas.toString();
            }));
            return res;
        });
    }
};
//# sourceMappingURL=matricula-model.js.map