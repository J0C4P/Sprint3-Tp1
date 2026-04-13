import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController,
    actualizarSuperheroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController); //Punto 1
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.get('/heroes/:id', obtenerSuperheroePorIdController);

//Rutas Nuevas

router.post('/heroes', crearSuperheroeController);

router.put('/heroes/:id', actualizarSuperheroeController);

router.delete('/heroes/:id', eliminarSuperheroePorIdController);

router.delete('/heroes/nombre/:nombre', eliminarSuperheroePorNombreController);

export default router;