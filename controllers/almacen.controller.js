// controllers/almacen.controller.js
import Almacen from '../models/Almacen.js';

// Crear nuevo almacén
export const crearAlmacen = async (req, res) => {
  try {
    const nuevoAlmacen = new Almacen(req.body);
    const almacenGuardado = await nuevoAlmacen.save();
    res.status(201).json(almacenGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los almacenes
export const obtenerAlmacenes = async (req, res) => {
  try {
    const almacenes = await Almacen.find();
    res.json(almacenes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener almacén por ID
export const obtenerAlmacenPorId = async (req, res) => {
  try {
    const almacen = await Almacen.findById(req.params.id);
    if (!almacen) return res.status(404).json({ mensaje: 'Almacén no encontrado' });
    res.json(almacen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar almacén
export const actualizarAlmacen = async (req, res) => {
  try {
    const almacenActualizado = await Almacen.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!almacenActualizado) return res.status(404).json({ mensaje: 'Almacén no encontrado' });
    res.json(almacenActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar almacén
export const eliminarAlmacen = async (req, res) => {
  try {
    const almacenEliminado = await Almacen.findByIdAndDelete(req.params.id);
    if (!almacenEliminado) return res.status(404).json({ mensaje: 'Almacén no encontrado' });
    res.json({ mensaje: 'Almacén eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
