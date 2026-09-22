import {Router} from "express";
import {getLivresController,createLivreController,deleteLivreController,getLivreController} from "../controllers/livres.controller";

const router = Router();

router.get("/",getLivresController);
router.post('/',createLivreController);
router.delete('/:id',deleteLivreController);
router.delete('/:id',deleteLivreController);
router.get("/:id",getLivreController);
export default router;