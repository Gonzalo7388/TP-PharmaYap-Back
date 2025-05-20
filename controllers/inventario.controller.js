import Inventario from '../models/Inventario.js';

// Crear nuevo inventario
export const crearInventario = async (req, res) => {
  try {
    const nuevoInventario = new Inventario(req.body);
    await nuevoInventario.save();
    res.status(201).json(nuevoInventario);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear inventario', error });
  }
};

// Obtener todos los inventarios
export const obtenerInventarios = async (req, res) => {
  try {
    const inventarios = await Inventario.find()
      .populate('almacen', 'nombre ubicacion')
      .populate('producto', 'nombre descripcion');
    res.json(inventarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener inventarios', error });
  }
};

// Obtener inventario por ID
export const obtenerInventarioPorId = async (req, res) => {
  try {
    const inventario = await Inventario.findById(req.params.id)
      .populate('almacen', 'nombre ubicacion')
      .populate('producto', 'nombre descripcion');
    if (!inventario) return res.status(404).json({ mensaje: 'Inventario no encontrado' });
    res.json(inventario);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener inventario', error });
  }
};

// Actualizar inventario
export const actualizarInventario = async (req, res) => {
  try {
    const inventarioActualizado = await Inventario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!inventarioActualizado) return res.status(404).json({ mensaje: 'Inventario no encontrado' });
    res.json(inventarioActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar inventario', error });
  }
};

// Eliminar inventario
export const eliminarInventario = async (req, res) => {
  try {
    const inventarioEliminado = await Inventario.findByIdAndDelete(req.params.id);
    if (!inventarioEliminado) return res.status(404).json({ mensaje: 'Inventario no encontrado' });
    res.json({ mensaje: 'Inventario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar inventario', error });
  }
};
