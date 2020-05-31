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
const Presenca = require("../models/aluno-model");
const router = express.Router();
// TO-DO cookies
// let u = await Usuario.cookie(req, res, true);
// if (!u)
// 	return;
router.post("/criar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let a = req.body;
    res.json(util_1.isNullOrUndefined(a) ? null : yield Presenca.criar(a));
})));
router.get("/obter", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = parseInt(req.query["id"]);
    // to-do: understand res.json
    res.json(isNaN(id) ? null : yield Presenca.obter(id));
})));
router.post("/alterar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let a = req.body;
    if (a)
        a.idAluno = parseInt(req.body.idPresenca);
    res.json(isNaN(a.idAluno) ? null : yield Presenca.alterar(a));
})));
router.get("/excluir", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = parseInt(req.query["idAluno"]);
    res.json(isNaN(id) ? null : yield Presenca.excluir(id));
})));
router.get("/listar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield Presenca.listar());
})));
module.exports = router;
//# sourceMappingURL=aluno-route.js.map