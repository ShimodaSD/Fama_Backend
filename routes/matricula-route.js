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
const Matricula = require("../models/matricula-model");
const router = express.Router();
router.post("/adicionar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let aluno = req.body;
    res.json(yield Matricula.adicionar(aluno));
})));
router.get("/listar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = parseInt(req.query["idAula"]);
    res.json(yield Matricula.listar(id));
})));
router.post("/presenca", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let presenca = req.body;
    console.log(presenca);
    res.json(yield Matricula.marcar(presenca));
})));
module.exports = router;
//# sourceMappingURL=matricula-route.js.map