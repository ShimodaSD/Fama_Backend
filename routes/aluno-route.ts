import express = require("express");
import wrap = require("express-async-error-wrapper");
import Aluno = require("../models/aluno-model");

const router = express.Router();

router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
    let id = parseInt(req.query["id"]);
	res.json(isNaN(id) ? null : await Aluno.listar(id));
}));



export = router;
