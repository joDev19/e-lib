import { getAllLivres, createLivre as createLivreModel} from "../models/livres.model";

export async function getLivres() {
    const livres = await getAllLivres();
    return livres;
}

export async function createLivre(titre: string, auteur: string) {
    const livreId = await createLivreModel(titre,auteur);
    return livreId;
}