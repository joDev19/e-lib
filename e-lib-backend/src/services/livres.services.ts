import { getAllLivres, createLivre as createLivreModel,deleleLivre as deleteLivreModel,getLivre as getLivreModel} from "../models/livres.model";

export async function getLivres() {
    const livres = await getAllLivres();
    return livres;
}

export async function createLivre(titre: string, auteur: string,date_publication: string) {
    const livre = await createLivreModel(titre,auteur,date_publication);
    return livre;
}

export async function deleteLivre(idlivre: number) {
    const livre = await deleteLivreModel(idlivre);
    return livre;
}

export async function getLivre(idlivre: number) {
    const livre = await getLivreModel(idlivre);
    return livre;
}