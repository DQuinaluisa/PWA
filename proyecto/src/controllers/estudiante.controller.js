const Estudiante = require('../models/estudiante');
const  fs  = require('fs');
const  { unlink } = require('fs');
const { path } = require('path');


async function getOne (req, res) {
    try {
       await Estudiante.findByPk(req.params.id).then(
            post => {
                res.json(post);
            }
        )
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo crear',
            error
        })
    }
}


// async function crearOne (req, res) {
//     const estudiante = req.body.estudiante
//     console.log(estudiante) 
//     try {
//         const estu = await Estudiante.create(estudiante)
//         res.status(200).json(estu);
        
//     } catch (error) {
//         return res.status(400).json({
//             msg: 'No se pudo crear',
//             error
//         })
//     }
//  }


async function crearOne(req, res) {
    const { nombre, apellido, identificacion, direccion } = req.body;
    
    const imagen = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        identificacion: req.body.identificacion,
        direccion: req.body.direccion,
        imagePath:   req.file.path
    };
    
    await Estudiante.create(imagen);
    console.log(imagen)

    return res.json({
        msg: 'creada',
        imagen
    })
}
  
async function actualizar(req, res)  {
    try {
        await Estudiante.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            identificacion: req.body.identificacion,
            direccion: req.body.direccion
        }, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            req.json(result);
        })
    } catch (error) {
        return res.status(400).json({
            msg: 'No se encuantra',
            error
        })
    }
}

async function eliminar (req, res) {
 
    try {
      const est =  await Estudiante.destroy({
             where : {
                 id: req.params.id
             }
         }).then(result => {
             res.json(result);
             
         })
         
      
    } catch (error) {
        return res.status(400).json({
            msg: 'No se pudo eliminar',
            error
        })
    }
}



 module.exports = {
     crearOne,
     getOne,
     actualizar,
     eliminar
 }