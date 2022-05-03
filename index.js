const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use( express.static( "public" ) );

app.get("/", (req, res) => {

    res.render("pages/index");

})

app.get("/sobre", (req, res) => {

    res.render("pages/sobre");

})

app.get("/menu", (req, res) => {

    res.render("pages/menu");

})

app.get("/contato", (req, res) => {

    res.render("pages/contato");

})

app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000")
})