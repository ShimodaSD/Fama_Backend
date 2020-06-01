import express = require("express");
import wrap = require("express-async-error-wrapper");
import { isNullOrUndefined } from "util";
import Curso = require("../models/curso-model");

const router = express.Router();

// TO-DO cookies
// let u = await Usuario.cookie(req, res, true);
// if (!u)
// 	return;

router.post("/criar", wrap(async (req: express.Request, res: express.Response) => {
	let c = req.body as Curso;
	res.json(isNullOrUndefined(c) ? null : await Curso.criar(c));
}));

router.get("/obter", wrap(async (req: express.Request, res: express.Response) => {
	let id = parseInt(req.query["idCurso"]);
	res.json(isNaN(id) ? null : await Curso.obter(id));
}));


router.post("/alterar", wrap(async (req: express.Request, res: express.Response) => {
	let c = req.body as Curso;
	if (c)
		c.idCurso = parseInt(req.body.idCurso);
	res.json(isNaN(c.idCurso) ? null : await Curso.alterar(c));
}));


router.get("/excluir", wrap(async (req: express.Request, res: express.Response) => {
	let id = parseInt(req.query["idCurso"]);
	res.json(isNaN(id) ? null : await Curso.excluir(id));
}));


router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
	res.json(await Curso.listar());
}));

export = router;
