const express = require("express");
const app = express();

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("index", {
        nome: "Visitante",
        lang: "Nenhuma",
        empresa: "DIR",
        Sede: "Brasil",
        msg: false,
        produtos: []
    });
});


app.get("/:nome/:linguagem", (req, res) => {
    const nome = req.params.nome;
    const linguagem = req.params.linguagem;

    
    res.render("index", {
        nome: nome,
        lang: linguagem,
        empresa: "DIR",
        Sede: "Brasil",
        msg: false,
        produtos: [
            { nome: "Produto A", preco: "R$ 100,00" },
            { nome: "Produto B", preco: "R$ 200,00" }
        ]
    });
});

app.listen(8080, () => {
    console.log("App rodando na porta 8080!");
});