import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("Servidor escutando");
});

//rotas
app.get("/api",(req, res) =>{
  res.status(200).send("Boas vindas ao servidor da aula sobre servidor em Node.js");
})