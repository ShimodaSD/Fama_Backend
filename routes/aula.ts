﻿import express = require("express");
import wrap = require("express-async-error-wrapper");
//import Usuario = require("../models/usuario");
import Aula = require("../models/aula");

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

router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {

		res.render("contato/listar", { lista: JSON.stringify(await Aula.listar()) });

}));

export = router;
