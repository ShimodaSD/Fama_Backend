import express = require("express");
import wrap = require("express-async-error-wrapper");
import Academia = require("../models/aula-model");

const router = express.Router();

// router.get("/listar", wrap(async (req: express.Request, res: express.Response) => {
// 	res.json(await Academia.listar());
// }));

export = router;
