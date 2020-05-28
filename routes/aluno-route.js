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
const Aluno = require("../models/aluno-model");
const router = express.Router();
router.get("/listar", wrap((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = parseInt(req.query["id"]);
    res.json(isNaN(id) ? null : yield Aluno.listar(id));
})));
module.exports = router;
//# sourceMappingURL=aluno-route.js.map