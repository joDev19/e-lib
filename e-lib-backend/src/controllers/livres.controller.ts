import { Request, Response } from "express";
import { getLivres, createLivre, deleteLivre } from "../services/livres.services";
import { message } from "antd";

export async function getLivresController(req: Request, res: Response) {
    try {
        const livres = await getLivres();
        res.status(200).json(livres);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur de la recuperation des livres" });
    }
}

export async function createLivreController(
    req:Request,res: Response
){
    try{
        const {titre,auteur,date_publication} = req.body;
        const livre = await createLivre(titre,auteur,date_publication);
    }
    catch(error){
        console.error(error);

        res.status(500).json({
            message: "Erreur lors de l'ajout du livre"
        });
    }
}

export async function deleteLivreController(
    req:Request,res: Response
){
    try{
        const id = Number(req.params.id);
        const result = await deleteLivre(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Livre non trouvé"
            });
        }
    }
    catch(error){
        console.error(error);

        res.status(500).json({
            message: "Erreur lors de la suppression du livre"
        });
    }
}