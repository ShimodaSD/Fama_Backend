import express = require("express");
import wrap = require("express-async-error-wrapper");
import Matricula = require("../models/matricula-model");

const router = express.Router();

router.post("/adicionar", wrap(async (req: express.Request, res: express.Response) => {
    let aluno = req.body as Matricula;
    res.json(await Matricula.adicionar(aluno));
}));

export = router;
