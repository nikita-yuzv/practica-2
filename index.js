const express = require('express');
const app = express();

app.get('/buscar', (req, res) => {
  let busqueda = req.query.q;
  // Fallo de seguridad intencional (XSS)
  res.send("<h1>Resultados para: " + busqueda + "</h1>"); 
});
