import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Servidor inicializado!");
});

app.get("/", (req, res) => {
  res.status(200).send("Mensagem do Node.js");
});