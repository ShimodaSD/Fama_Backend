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
module.exports = class Aula {
    // private static validar(c: Contato): string {
    // 	c.nome = (c.nome || "").trim().toUpperCase();
    // 	if (c.nome.length < 3 || c.nome.length > 200)
    // 		return "Nome inválido";
    // 	c.endereco = (c.endereco || "").trim().toUpperCase();
    // 	if (c.endereco.length < 3 || c.endereco.length > 200)
    // 		return "Endereço inválido";	
    // 	c.email = (c.email || "").trim().toUpperCase();
    // 	if (c.email.length < 3 || c.email.length > 200)
    // 			return "Email inválido";
    // 	if (c.peso <= 0)
    // 		return "Peso inválido!";
    // 	return null;
    // }
    static listar() {
        return __awaiter(this, void 0, void 0, function* () {
            let lista = null;
            yield Sql.conectar((sql) => __awaiter(this, void 0, void 0, function* () {
                lista = (yield sql.query("select idAula, nomeAula, horarioAula, idCurso "
                    + " from aula order by nomeAula asc"));
            }));
            return (lista || []);
        });
    }
};
//# sourceMappingURL=aula.js.map