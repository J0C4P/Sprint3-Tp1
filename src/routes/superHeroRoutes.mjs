import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController); //Punto 1
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);

//Rutas Nuevas

router.post('/heroes', (req, res) => {
    heroenuevo = req.body;
    res.send(`Superhéroe creado con los datos: ${JSON.stringify(heroenuevo)}`);
});

router.put('/heroes/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    res.send(`Superhéroe con ID ${id} actualizado con los datos: ${JSON.stringify(datosActualizados)}`);
});

router.delete('/heroes/eliminar/:id', (req, res) => {
    const { id } = req.params;
    const datosHeroe = { id };
    res.json({ message: `Superhéroe de ID ${id} con los datos: ${JSON.stringify(datosHeroe)} eliminado` });
});

router.delete('/heroes/eliminar/:nombre', (req, res) => {
    const { nombre } = req.params;
    const datosHeroe = { nombre };
    res.json({ message: `Superhéroe de nombre ${nombre} con los datos: ${JSON.stringify(datosHeroe)} eliminado` });
});

export default router;