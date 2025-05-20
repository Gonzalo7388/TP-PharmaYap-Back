import Reclamo from '../models/Reclamo.js';

// Crear un reclamo
export const crearReclamo = async (req, res) => {
  try {
    const nuevoReclamo = new Reclamo(req.body);
    await nuevoReclamo.save();
    res.status(201).json(nuevoReclamo);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear reclamo', error });
  }
};

// Obtener todos los reclamos
export const obtenerReclamos = async (req, res) => {
  try {
    const reclamos = await Reclamo.find().populate('usuario', 'nombre correo');
    res.json(reclamos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener reclamos', error });
  }
};

// Obtener reclamo por ID
export const obtenerReclamoPorId = async (req, res) => {
  try {
    const reclamo = await Reclamo.findById(req.params.id).populate('usuario', 'nombre correo');
    if (!reclamo) return res.status(404).json({ mensaje: 'Reclamo no encontrado' });
    res.json(reclamo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener reclamo', error });
  }
};

// Actualizar reclamo
export const actualizarReclamo = async (req, res) => {
  try {
    const reclamoActualizado = await Reclamo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reclamoActualizado) return res.status(404).json({ mensaje: 'Reclamo no encontrado' });
    res.json(reclamoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar reclamo', error });
  }
};

// Eliminar reclamo
export const eliminarReclamo = async (req, res) => {
  try {
    const reclamoEliminado = await Reclamo.findByIdAndDelete(req.params.id);
    if (!reclamoEliminado) return res.status(404).json({ mensaje: 'Reclamo no encontrado' });
    res.json({ mensaje: 'Reclamo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar reclamo', error });
  }
};
