import express = require("express");
import wrap = require("express-async-error-wrapper");
import jsonRes = require("../../utils/jsonRes");
import Curso = require("../../models/curso");

const router = express.Router();

router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
	res.json(await Curso.listar());
}));

// router.get("/obter", wrap(async (req: express.Request, res: express.Response) => {
// 	let id = parseInt(req.query["id"]);
// 	res.json(isNaN(id) ? null : await Contato.obter(id));
// }));

router.post("/criar", wrap(async (req: express.Request, res: express.Response) => {
	//let u = await Usuario.cookie(req, res, true);
	//if (!u)
	//	return;
	let c = req.body as Curso;
	jsonRes(res, 400, c ? await Curso.criar(c) : "Dados inválidos!");
}));

router.post("/alterar", wrap(async (req: express.Request, res: express.Response) => {
	// let u = await Usuario.cookie(req, res, true);
	// if (!u)
	// 	return;
	let c = req.body as Curso;
	if (c)
		console.log(c)
		c.idCurso = parseInt(req.body.idCurso);
	jsonRes(res, 400, (c && !isNaN(c.idCurso)) ? await Curso.alterar(c) : "Dados inválidos!"+(c.idCurso));
}));

router.get("/excluir", wrap(async (req: express.Request, res: express.Response) => {
	// let u = await Usuario.cookie(req, res, true);
	// if (!u)
	// 	return;
	let idCurso = parseInt(req.query["idCurso"]);
	jsonRes(res, 400, isNaN(idCurso) ? "Dados inválidos!" : await Curso.excluir(idCurso));
}));

export = router;
