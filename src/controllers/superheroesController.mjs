import {
  obtenerSuperheroePorId, obtenerTodosLosSuperheroes,
  buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30
}
  from '../services/superheroesService.mjs';
import { renderizarSuperheroe, renderizarListaSuperheroes }
  from '../views/responseView.mjs';

export async function obtenerSuperheroePorIdController(req, res) {
  try {
    const { id } = req.params;
    const superheroe = await obtenerSuperheroePorId(id);
    if (!superheroe) {
      return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
    }

    const superheroeFormateado = renderizarSuperheroe(superheroe);
    res.status(200).json(superheroeFormateado);
  } catch (error) {
    res.status(500).send({
      mensaje: 'Error al obtener el superhéroe (FUNCION 1)',
      error: error.message
    });
  }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
  try {
    const superheroes = await obtenerTodosLosSuperheroes();

    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);
  } catch (error) {
    res.status(500).send({
      mensaje: 'Error al obtener los superhéroes',
      error: error.message
    });
  }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
  try {
    const { atributo, valor } = req.params;
    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
    if (superheroes.length === 0) {
      return res.status(404).send(
        { mensaje: 'No se encontraron superhéroes con ese atributo' });
    }

    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);
  } catch (error) {
    res.status(500).send({
      mensaje: 'Error al buscar los superhéroes',
      error: error.message
    });
  }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
  try {
    const superheroes = await obtenerSuperheroesMayoresDe30();
    if (superheroes.length === 0) {
      return res.status(404).send(
        { mensaje: 'No se encontraron superhéroes mayores de 30 años' });
    }
    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroesFormateados);
  } catch (error) {
    res.status(500).send(
      { mensaje: 'Error al obtener superhéroes mayores de 30', error: error.message });
  }
}

//Controllers Nuevos

export async function crearSuperheroeController(req, res) {
  try {
    const nuevoSuperheroe = req.body;
    // Aquí iría la lógica para guardar el nuevo superhéroe en la base de datos
    res.status(201).json({ message: 'Crear un nuevo superhéroe', data: nuevoSuperheroe });
  } catch (error) {
    res.status(500).send({
      mensaje: 'Error al crear el superhéroe',
      error: error.message
    });
  }
}

export async function actualizarSuperheroeController(req, res) {
  try {
    const { id } = req.params;
    const datosActualizados = req.body;
    // Aquí iría la lógica para actualizar el superhéroe en la base de datos
    res.send(`Superhéroe con ID ${id} actualizado con los datos: ${JSON.stringify(datosActualizados)}`);
  } catch (error) {
    res.status(500).send({
      mensaje: 'Error al actualizar el superhéroe',
      error: error.message
    });
  }
}

export async function eliminarSuperheroePorIdController(req, res) {
  try {
    const { id } = req.params;
    // Aquí iría la lógica para eliminar el superhéroe de la base de datos
    res.json({ message: `Superhéroe de ID ${id} eliminado` });
  } catch (error) {
    res.status(500).send({
      mensaje: 'Error al eliminar el superhéroe',
      error: error.message
    });
  }
} 

export async function eliminarSuperheroePorNombreController(req, res) {
  try {
    const { nombre } = req.params;
    // Aquí iría la lógica para eliminar el superhéroe de la base de datos
    res.json({ message: `Superhéroe de nombre ${nombre} eliminado` });
  } catch (error) {
    res.status(500).send({
      mensaje: 'Error al eliminar el superhéroe',
      error: error.message
    });
  }
}