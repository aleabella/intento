/*const express = require("express");
const app= express();
const mongoose =require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://aleabella:K1mhyunj@alecluster.eegcclh.mongodb.net/medipig?retryWrites=true&w=majority", { useNewUrlParser: true},{useUnifiedTopology: true})
//creamons schema

const uroanalisisSchema = {
    nombre: String,
    edad: Number,
    sexo: String,
    color: String,
    aspecto: String,
    ph: Number,
    leucoesterasa: Number,
    sangre: String,
    leucocito: Number,
    densidad: Number,
    germenes: Number,
    creatinina: Number

}

const Uroanalisis = mongoose.model("Uroanalisis", uroanalisisSchema);


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req,res){
  let newUroanalisis = new Uroanalisis({
    nombre: req.body.nombre,
    edad: req.body.edad,
    sexo: req.body.sexo,
    color: req.body.color,
    aspecto: req.body.aspecto,
    ph: req.body.aspecto,
    leucoesterasa: req.body.aspecto,
    sangre: req.body.sangre,
    leucocito: req.body.leucocito,
    densidad: req.body.densidad,
    germenes: req.body.germenes,
    creatinina: req.body.creatinina
  })
  newUroanalisis.save();
  res.redirect("/");
}) 

app.listen(3000, function()  {
  console.log("running on 3000");
})
*/

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://aleabella:K1mhyunj@alecluster.eegcclh.mongodb.net/medipig?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });

// Creamos el schema
const uroanalisisSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  sexo: String,
  color: String,
  aspecto: String,
  ph: Number,
  leucoesterasa: Number,
  sangre: String,
  leucocito: Number,
  densidad: Number,
  germenes: Number,
  creatinina: Number
});

const Uroanalisis = mongoose.model("Uroanalisis", uroanalisisSchema);

app.get("/", function (r, reqes) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let newUroanalisis = new Uroanalisis({
    nombre: req.body.nombre,
    edad: req.body.edad,
    sexo: req.body.sexo,
    color: req.body.color,
    aspecto: req.body.aspecto,
    ph: req.body.ph,
    leucoesterasa: req.body.leucoesterasa,
    sangre: req.body.sangre,
    leucocito: req.body.leucocito,
    densidad: req.body.densidad,
    germenes: req.body.germenes,
    creatinina: req.body.creatinina
  });

  newUroanalisis.save(function (err) {
    if (err) {
      console.error("Error al guardar el uroanálisis:", err);
    } else {
      console.log("Uroanálisis guardado correctamente");
      res.redirect("/");
    }
  });
});

app.listen(3000, function () {
  console.log("Servidor ejecutándose en el puerto 3000");
});