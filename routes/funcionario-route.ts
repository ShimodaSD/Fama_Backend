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
}));


router.post("/alterar", wrap(async (req: express.Request, res: express.Response) => {
	let f = req.body as Funcionario;
	res.json(isNaN(f.idFuncionario) ? null : await Funcionario.alterar(f));
}));


router.get("/excluir", wrap(async (req: express.Request, res: express.Response) => {
	let id = parseInt(req.query["idFuncionario"]);
	res.json(isNaN(id) ? null : await Funcionario.excluir(id));
}));


router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
	res.json(await Funcionario.listar());
}));

export = router;
