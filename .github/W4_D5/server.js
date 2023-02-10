const { response } = require("express");
const express = require("express");
const app = express();
const hbs = require("hbs");
const Movie = require("./models/movie.model.js");
require("./db/connection.js");

app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");



app.get("/", (req, res, next)=>{
    res.render("home", { titulo: "home" });
})
app.get("/about", (req, res, next)=>{
    res.render("about", { titulo: "about" });
})
app.get("/getfilms", module.exports = (req, res, next)=>{
    Movie.find()
    .then(movies => {
        // let data = {
        //     titulo: "Lista de movies",
        //     movies: movies
        // }
        // console.log("peliculas: ", data);
        // res.send( {
        //     titulo: "Lista de movies",
        //     movies: movies
        // });
        // let movieCopy = JSON.parse(JSON.stringify(movies));
        res.render("films", {
            titulo: "Lista de movies",
            movies: movies
        });
        //MARIONA DEL FUTURO: QUé putas pasa???
    })
    .catch(err => {
        console.log("error en find ", err)
        res.send(`error en find ${err}`);
    })
    // res.send("fetFilms");
})
app.get("/crearmovie", (req, res, next)=>{
    Movie.create({
        director: "Mariona",
        title: "TA Adventures",
        genre: ["Drama"],
        year: "2023",
        rate: "10",
        actors: {
            nombre: "Adrián",
            edad: 76
        }
    })
    .then(result=>{
        console.log(result);
    })
    .catch(err => console.log(err))
    res.send("crearmovie");
})
app.get("/crearyeliminar", (req, res, next)=>{
    //crear un elemento
    let prom_create = Movie.create({
        director: "Xabi",
        title: "Xabi Adventures",
        genre: ["Family"],
        year: "2023",
        rate: "10",
        actors: {
            nombre: "Adrián",
            edad: 76
        }
    })
    //eliminar otro elemento
    let prom_remove = Movie.findByIdAndRemove("63e62fea2763786ea3845278")

    Promise.all([prom_create, prom_remove])
    .then(response => res.send("todo ok"))
    .catch(err => res.send(`todo mal ${err}`))
})
app.get("/updatemovie", (req, res, next)=>{
    Movie.updateOne({_id: "63e62fea2763786ea3845278"}, {director: "Andrea"})
    .then(result => {
        res.send(result)
    })
    .catch(err => res.send(err))
})

app.listen(3000, ()=>console.log("escuchando puerto 3000"));