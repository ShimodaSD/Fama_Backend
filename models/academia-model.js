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
    static listar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let lista = null;
            yield sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                lista = (yield sql.query("select * from usuario inner join funcionario on (funcionario.idUsuario = usuario.idUsuario) inner join curso_has_funcionario on (curso_has_funcionario.idFuncionario = funcionario.idFuncionario) inner join curso on (curso.idCurso = curso_has_funcionario.idCurso) inner join aula on (aula.idCurso = curso.idCurso) inner join aluno_has_aula on (aluno_has_aula.idAula = aula.idAula) where idUsuario = ?", [id]));
            }));
            return (lista || []);
        });
    }
};
//# sourceMappingURL=academia-model.js.map