import express = require("express");
import wrap = require("express-async-error-wrapper");
import { isNullOrUndefined } from "util";
import Aula = require("../models/aula-model");

const router = express.Router();

router.post("/dias", wrap(async (req: express.Request, res: express.Response) => {
	let a = req.body as Aula;
	res.json(isNullOrUndefined(a) ? null : await Aula.diasSemana());
}));

router.post("/criar", wrap(async (req: express.Request, res: express.Response) => {
	let a = req.body as Aula;
	res.json(isNullOrUndefined(a) ? null : await Aula.criar(a));
}));

router.post("/alterar", wrap(async (req: express.Request, res: express.Response) => {
	let a = req.body as Aula;
	if (a)
		a.idAula = parseInt(req.body.idCurso);
	res.json(isNaN(a.idAula) ? null : await Aula.alterar(a));
}));

router.get("/excluir", wrap(async (req: express.Request, res: express.Response) => {
	let id = parseInt(req.query["idAula"]);
	res.json(isNaN(id) ? null : await Aula.excluir(id));
}));

router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
	let id = parseInt(req.query["idCurso"]);
	res.json(await Aula.listar(id));
}));

export = router;
