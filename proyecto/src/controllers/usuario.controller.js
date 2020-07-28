const Usuario = require('../models/usuario');
const  fs  = require('fs');
const  { unlink } = require('fs');
const { path } = require('path');


async function crearOne (req, res) {
    const usuario = req.body.usuario
    console.log(usuario) 
    try {
        const user = await Usuario.create(usuario)
        res.status(200).json(user);
        
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo crear',
            error
        })
    }
 }

 async function getAll (req, res) {
     try {
        const user = await Usuario.findAll(
            { attributes: ['id', 'nombre', 'apellido', 'identificacion', 'direccion'] },
           
        )
        console.log(user);
        res.json(user);
     } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo crear',
            error
        })
     }
 }



 module.exports = {
    crearOne,
    getAll
}