import express = require("express");
import wrap = require("express-async-error-wrapper");
import Aluno = require("../models/aluno-model");

const router = express.Router();

router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
	res.json(await Aluno.listar());
}));

// router.get("/obter", wrap(async (req: express.Request, res: express.Response) => {
// 	let id = parseInt(req.query["id"]);
// 	res.json(isNaN(id) ? null : await Aluno.obter(id));
// }));

// router.post("/criar", wrap(async (req: express.Request, res: express.Response) => {
// 	//let u = await Usuario.cookie(req, res, true);
// 	//if (!u)
// 	//	return;
// 	let c = req.body as Aluno;
// 	jsonRes(res, 400, c ? await Aluno.criar(c) : "Dados inválidos!");
// }));

// router.post("/alterar", wrap(async (req: express.Request, res: express.Response) => {
// 	let u = await Usuario.cookie(req, res, true);
// 	if (!u)
// 		return;
// 	let c = req.body as Aluno;
// 	if (c)
// 		c.id = parseInt(req.body.id);
// 	jsonRes(res, 400, (c && !isNaN(c.id)) ? await Aluno.alterar(c) : "Dados inválidos!");
// }));

// router.get("/excluir", wrap(async (req: express.Request, res: express.Response) => {
// 	let u = await Usuario.cookie(req, res, true);
// 	if (!u)
// 		return;
// 	let id = parseInt(req.query["id"]);
// 	jsonRes(res, 400, isNaN(id) ? "Dados inválidos!" : await Aluno.excluir(id));
// }));

export = router;
