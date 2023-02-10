const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let movieSchema = new Schema({
    director: {
        // type: Schema.Types.ObjectId,
        // ref: "directors",   //lo confirmo cuando demos "populate"
        type: String,
        required: true
    },
    title: String,
    genre: [{
        type: String,
        enum: ["Drama", "Family", "Fantasy"]
    }],
    year: {
        type: "String",
        validate: {
            validator: (year)=>{ return year.length == 4 },
            message: "no pasa la validación de length = 4"
        }
    },
    rate: String,
    actors: {
        nombre: String,
        edad: Number
    }
}, {
    timestamps : true
});   //schema para montar el modelo (estructura de un documento de la coleccion)
const Movie = mongoose.model("Movie", movieSchema); //Modelo: clase para manipular documentos en una colección

//especificas qué va a devolver el require
module.exports = Movie;