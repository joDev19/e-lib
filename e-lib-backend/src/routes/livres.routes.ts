import {Router} from "express";
import {getLivresController,createLivreController,deleteLivreController} from "../controllers/livres.controller";

const router = Router();

router.get("/",getLivresController);
router.post('/',createLivreController);
router.delete('/:id',deleteLivreController);
export default router;