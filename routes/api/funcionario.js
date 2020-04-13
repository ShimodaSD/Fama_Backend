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
const jsonRes = require("../../utils/jsonRes");
const Funcionario = require("../../models/funcionario");
const router = express.Router();
router.get("/listar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield Funcionario.listar());
})));
// router.get("/obter", wrap(async (req: express.Request, res: express.Response) => {
// 	let id = parseInt(req.query["id"]);
// 	res.json(isNaN(id) ? null : await Contato.obter(id));
// }));
router.post("/criar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //let u = await Usuario.cookie(req, res, true);
    //if (!u)
    //	return;
    let f = req.body;
    jsonRes(res, 400, f ? yield Funcionario.criar(f) : "Dados inválidos!");
})));
router.post("/alterar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // let u = await Usuario.cookie(req, res, true);
    // if (!u)
    // 	return;
    let f = req.body;
    if (f)
        console.log(f);
    f.idFuncionario = parseInt(req.body.idFuncionario);
    jsonRes(res, 400, (f && !isNaN(f.idFuncionario)) ? yield Funcionario.alterar(f) : "Dados inválidos!" + (f.idFuncionario));
})));
router.get("/excluir", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // let u = await Usuario.cookie(req, res, true);
    // if (!u)
    // 	return;
    let idFuncionario = parseInt(req.query["idFuncionario"]);
    jsonRes(res, 400, isNaN(idFuncionario) ? "Dados inválidos!" : yield Funcionario.excluir(idFuncionario));
})));
module.exports = router;
//# sourceMappingURL=funcionario.js.map