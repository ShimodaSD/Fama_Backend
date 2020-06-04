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
const Aula = require("../models/aula-model");
const router = express.Router();
router.get("/dias", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let a = req.body;
    res.json(util_1.isNullOrUndefined(a) ? null : yield Aula.diasSemana());
})));
router.post("/criar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let a = req.body;
    res.json(util_1.isNullOrUndefined(a) ? null : yield Aula.criar(a));
})));
router.post("/alterar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let a = req.body;
    if (a)
        a.idAula = parseInt(req.body.idCurso);
    res.json(isNaN(a.idAula) ? null : yield Aula.alterar(a));
})));
router.get("/excluir", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = parseInt(req.query["idAula"]);
    res.json(isNaN(id) ? null : yield Aula.excluir(id));
})));
router.get("/listar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = parseInt(req.query["idCurso"]);
    res.json(yield Aula.listar(id));
})));
module.exports = router;
//# sourceMappingURL=aula-route.js.map