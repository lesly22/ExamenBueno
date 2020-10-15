// Importar express
const express = require("express");
const exphbs = require("express-handlebars");


// Crear un servidor express
const app = express();
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));


// Inicializar el servidor en un puerto en específico
app.listen(5000, () => {
    console.log("Servidor ejecutándose en el puerto 5000");
  });

