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
const Funcionario = require("../models/funcionario-model");
const router = express.Router();
// TO-DO cookies
// let u = await Usuario.cookie(req, res, true);
// if (!u)
// 	return;
router.post("/criar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let c = req.body;
    res.json(util_1.isNullOrUndefined(c) ? null : yield Funcionario.criar(c));
})));
router.get("/obter", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = parseInt(req.query["idFuncionario"]);
    res.json(isNaN(id) ? null : yield Funcionario.obter(id));
    console.log(res.statusMessage + " - " + res.statusCode);
})));
router.post("/alterar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let c = req.body;
    if (c)
        c.idFuncionario = parseInt(req.body.idFuncionario);
    res.json(isNaN(c.idFuncionario) ? null : yield Funcionario.alterar(c));
})));
router.get("/excluir", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = parseInt(req.query["idFuncionario"]);
    res.json(isNaN(id) ? null : yield Funcionario.excluir(id));
})));
router.get("/listar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield Funcionario.listar());
})));
module.exports = router;
//# sourceMappingURL=funcionario-route.js.map