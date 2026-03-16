const express = require ('express');
const app = express ();

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.get('/json', (req, res) =>{
    res.json({ mensaje: '¡Hola, mundo en formato JSON!'});
});

app.get('/datos', (req, res) =>{
    res.json({
        nombre: "Camilo",
        apellido: "Jose",
        edad: "16",
        institucion: "La salle de Campoamor"
    })


})


    

app.listen(3000, () => {
    console.log("Servidor ejecutándose en el puerto 3000");
});

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola Mundo PCJIC');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});




