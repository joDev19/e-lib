import express, { Request, Response } from "express";
import pool from "./database/database";
import router from "./routes/livres.routes"

const app = express();
const port = 3000;

app.use(express.json());

app.use("/e-lib/livres", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Serveur Express TypeScript opérationnel");
});

async function testDatabase() {
  try {
    const connection = await pool.getConnection();
    console.log("connexion à mySQL reussi !");

    connection.release();
  } catch (error) {
    console.error("Erreur de connexion à MySQL :", error);
  }
}
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

testDatabase()