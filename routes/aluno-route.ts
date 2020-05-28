import express = require("express");
import wrap = require("express-async-error-wrapper");
import { isNullOrUndefined } from "util";
import Presenca = require("../models/aluno-model");

const router = express.Router();

// TO-DO cookies
// let u = await Usuario.cookie(req, res, true);
	// if (!u)
	// 	return;

router.post("/criar", wrap(async (req: express.Request, res: express.Response) => {
	let a = req.body as Presenca;
	res.json(isNullOrUndefined(a) ? null : await Presenca.criar(a));
}));


router.get("/obter", wrap(async (req: express.Request, res: express.Response) => {
	let id = parseInt(req.query["id"]);
	// to-do: understand res.json
	res.json(isNaN(id) ? null : await Presenca.obter(id));
}));


router.post("/alterar", wrap(async (req: express.Request, res: express.Response) => {
	let a = req.body as Presenca;
	if (a)
		console.log(a)
		a.idAluno = parseInt(req.body.idPresenca);
	res.json(isNaN(a.idAluno) ? null : await Presenca.alterar(a));
}));


router.get("/excluir", wrap(async (req: express.Request, res: express.Response) => {
	let id = parseInt(req.query["idPresenca"]);
	res.json(isNaN(id) ? null : await Presenca.excluir(id));
}));


router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
	res.json(await Presenca.listar());
}));

export = router;
