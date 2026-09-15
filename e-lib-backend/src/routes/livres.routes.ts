import {Router} from "express";
import {getLivresController,createLivreController} from "../controllers/livres.controller";

const router = Router();

router.get("/",getLivresController);
router.post('/',createLivreController);

export default router;