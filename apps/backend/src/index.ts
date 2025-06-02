import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "hello" });
});

app.listen(PORT, () => {
  console.log(`⚙️Server is listening on http://localhost:${PORT}`);
});
