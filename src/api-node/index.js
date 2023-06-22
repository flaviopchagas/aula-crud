const express = require('express');
const server = express();
const usuarios = require('./usuarios.json');



server.get('/usuarios',(req,res) => {
  return res.json(usuarios)
});s


server.listen(3000, () =>{
console.log('Servidor funcionando')
})

