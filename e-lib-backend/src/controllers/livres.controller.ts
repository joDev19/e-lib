import { Request, Response } from "express";
import { getLivres, createLivre } from "../services/livres.services";
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
        const {titre,auteur} = req.body;
        const livreId = await createLivre(titre,auteur);
        res.status(201).json({message: "Livre ajouté avec succes", id: livreId});
    }
    catch(error){
        console.error(error);

        res.status(500).json({
            message: "Erreur lors de l'ajout du livre"
        });
    }
}