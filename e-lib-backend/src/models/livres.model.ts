import { ResultSetHeader, RowDataPacket } from "mysql2";
import pool from "../database/database"

export interface Livre extends RowDataPacket {
    id: number;
    titre: string;
    auteur: string;
    date_publication: string;
    disponible: boolean;
} // dit a typescript que l'objet Livre a ces chanps, et recupere la propieté de rowdatapack

export async function getAllLivres(): Promise<Livre[]> {
    const [rows] = await pool.query<Livre[]>(
        "select * FROM livres"
    );
    // Cette fonction va me donner, plus tard, un tableau de Livre
    // Un Livre est une ligne provenant de MySQL, avec les propriétés suivantes.
    return rows;
}

export async function createLivre(titre: string, auteur: string,date_publication: string): Promise<Livre> {
    const [result] = await pool.query<ResultSetHeader>(
        "INSERT INTO livres (titre,auteur,date_publication) VALUE (?,?,?)",
        [titre, auteur,date_publication]
    );
    const LivreId=result.insertId;
    const [rows]= await pool.query<Livre[]>(
        "select * from livres where id=?",[LivreId]
    );
    return rows[0];
}

export async function deleleLivre(idlivre: number){
    const [result]=await pool.query<ResultSetHeader>(
        "DELETE FROM livres where id=?", [idlivre]
    );
    return result
}