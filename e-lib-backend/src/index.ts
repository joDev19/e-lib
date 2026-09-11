import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Serveur Express TypeScript opérationnel" });
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
