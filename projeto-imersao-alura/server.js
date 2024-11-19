import express from "express";

const posts = [
  {
    id: 1,
    descricao: "primeira foto",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "segunda foto",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "terceira foto",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 4,
    descricao: "quarta foto",
    imagem: "https://placecats.com/millie/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando");
});

//rota para testar se o servidor está funcionando e retornar uma mensagem na tela
function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});

app.get("/api", (req, res) => {
  res
    .status(200)
    .send("Boas vindas ao servidor da aula sobre servidor em Node.js");
});
