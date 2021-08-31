const express= require('express');
const router = express.Router();

const PRODUCTOS = require('./../resources/files/productos');

let personas = []

router.get('/',(req,res)=>{
    res.render("index",{personas:personas,title:"Página de Inicio"});
});

router.get('/insert',(req, res)=>{
    res.render('insert',{title:"Insertar Estudiante",
        productos:PRODUCTOS.productos,
        towns:PRODUCTOS.towns});
});

router.post('/insert',(req,res)=>{
    const{code, name, lastName, gender, prod, town, email, phone } = req.body;
    const dptoAux = PRODUCTOS.productos.find( record => record.code == prod ).name;
    const townAux = PRODUCTOS.towns.find( record => record.code == town ).name;
    const city = townAux.concat( '-', dptoAux );
    const genAux = gender == 'F' ? "Femenino" : "Masculino";
    let newReg = {code, lastName, name, genAux, city, email, phone  };
    personas.push(newReg);
    res.redirect('/');
});

router.get('/about',(req,res)=>{
   res.render('about',{title:"Sobre Nosotros"});
});

module.exports = router;
