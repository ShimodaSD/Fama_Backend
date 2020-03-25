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
const express = require("express");
const wrap = require("express-async-error-wrapper");
//import Usuario = require("../models/usuario");
const Curso = require("../models/curso");
const router = express.Router();
// router.all("/criar", wrap(async (req: express.Request, res: express.Response) => {
// 	let u = await Usuario.cookie(req);
// 	if (!u || !u.admin) {
// 		res.redirect("/acesso");
// 	} else {
// 		res.render("contato/alterar", { titulo: "Criar Contato", usuario: u, item: null });
// 	}
// }));
// router.all("/alterar", wrap(async (req: express.Request, res: express.Response) => {
// 	let u = await Usuario.cookie(req);
// 	if (!u || !u.admin) {
// 		res.redirect("/acesso");
// 	} else {
// 		let id = parseInt(req.query["id"]);
// 		let item: Contato = null;
// 		if (isNaN(id) || !(item = await Contato.obter(id)))
// 			res.render("shared/nao-encontrado", { usuario: u });
// 		else
// 			res.render("contato/alterar", { titulo: "Editar Contato", usuario: u, item: item });
// 	}
// }));
router.get("/listar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.render("contato/listar", { lista: JSON.stringify(yield Curso.listar()) });
})));
module.exports = router;
//# sourceMappingURL=curso.js.map