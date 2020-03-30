import express = require("express");
import wrap = require("express-async-error-wrapper");
import jsonRes = require("../../utils/jsonRes");
import Funcionario = require("../../models/funcionario");

const router = express.Router();

router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
	res.json(await Funcionario.listar());
}));

// router.get("/obter", wrap(async (req: express.Request, res: express.Response) => {
// 	let id = parseInt(req.query["id"]);
// 	res.json(isNaN(id) ? null : await Contato.obter(id));
// }));

router.post("/criar", wrap(async (req: express.Request, res: express.Response) => {
	//let u = await Usuario.cookie(req, res, true);
	//if (!u)
	//	return;
	let f = req.body as Funcionario;
	jsonRes(res, 400, f ? await Funcionario.criar(f) : "Dados inválidos!");
}));

router.post("/alterar", wrap(async (req: express.Request, res: express.Response) => {
	// let u = await Usuario.cookie(req, res, true);
	// if (!u)
	// 	return;
	let f = req.body as Funcionario;
	if (f)
		console.log(f)
		f.idFuncionario = parseInt(req.body.idFuncionario);
	jsonRes(res, 400, (f && !isNaN(f.idFuncionario)) ? await Funcionario.alterar(f) : "Dados inválidos!"+(f.idFuncionario));
}));

router.get("/excluir", wrap(async (req: express.Request, res: express.Response) => {
	// let u = await Usuario.cookie(req, res, true);
	// if (!u)
	// 	return;
	let idFuncionario = parseInt(req.query["idFuncionario"]);
	jsonRes(res, 400, isNaN(idFuncionario) ? "Dados inválidos!" : await Funcionario.excluir(idFuncionario));
}));

export = router;
