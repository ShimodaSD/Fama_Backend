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
const util_1 = require("util");
const Curso = require("../models/curso-model");
const router = express.Router();
// TODO: cookies
// let u = await Usuario.cookie(req, res, true);
// if (!u)
// 	return;
router.post("/criar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let c = req.body;
    console.log("req = ", c);
    res.json(util_1.isNullOrUndefined(c) ? null : yield Curso.criar(c));
})));
// router.get("/obter", wrap(async (req: express.Request, res: express.Response) => {
// 	let id = parseInt(req.query["id"]);
// 	res.json(isNaN(id) ? null : await Curso.obter(id));
// }));
router.post("/alterar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let c = req.body;
    c.idCurso = parseInt(req.body.idCurso);
    res.json(isNaN(c.idCurso) ? null : yield Curso.alterar(c));
})));
router.get("/excluir", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = parseInt(req.query["idCurso"]);
    res.json(isNaN(id) ? null : yield Curso.excluir(id));
})));
router.get("/listar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield Curso.listar());
})));
module.exports = router;
//# sourceMappingURL=curso-route.js.map