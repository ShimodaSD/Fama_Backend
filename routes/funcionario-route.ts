import express = require("express");
import wrap = require("express-async-error-wrapper");
import { isNullOrUndefined } from "util";
import Funcionario = require("../models/funcionario-model");

const router = express.Router();

// TO-DO cookies
// let u = await Usuario.cookie(req, res, true);
// if (!u)
// 	return;

router.post("/criar", wrap(async (req: express.Request, res: express.Response) => {
	let c = req.body as Funcionario;
	res.json(isNullOrUndefined(c) ? null : await Funcionario.criar(c));
}));


router.get("/obter", wrap(async (req: express.Request, res: express.Response) => {
	let id = parseInt(req.query["idFuncionario"]);
	res.json(isNaN(id) ? null : await Funcionario.obter(id));
	console.log(res.statusMessage + " - " + res.statusCode)
}));


router.post("/alterar", wrap(async (req: express.Request, res: express.Response) => {
	let c = req.body as Funcionario;
	if (c)
		c.idFuncionario = parseInt(req.body.idFuncionario);
	res.json(isNaN(c.idFuncionario) ? null : await Funcionario.alterar(c));
}));


router.get("/excluir", wrap(async (req: express.Request, res: express.Response) => {
	let id = parseInt(req.query["idFuncionario"]);
	res.json(isNaN(id) ? null : await Funcionario.excluir(id));
}));


router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
	res.json(await Funcionario.listar());
}));

export = router;
