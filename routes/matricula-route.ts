import express = require("express");
import wrap = require("express-async-error-wrapper");
import Matricula = require("../models/matricula-model");

const router = express.Router();

router.post("/adicionar", wrap(async (req: express.Request, res: express.Response) => {
    let aluno = req.body as Matricula;
    res.json(await Matricula.adicionar(aluno));
}));

router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
    let id = parseInt(req.query["idAula"]);
    res.json(await Matricula.listar(id));
}));

router.post("/presenca", wrap(async (req: express.Request, res: express.Response) => {
    let presenca = req.body as Matricula;
    console.log(presenca)
    res.json(await Matricula.marcar(presenca));
}));

export = router;
