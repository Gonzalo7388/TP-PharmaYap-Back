import ProveedorProducto from '../models/ProveedorProducto.js';

// Crear relación Proveedor-Producto
export const crearProveedorProducto = async (req, res) => {
  try {
    const nuevaRelacion = new ProveedorProducto(req.body);
    await nuevaRelacion.save();
    res.status(201).json(nuevaRelacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las relaciones
export const obtenerProveedorProductos = async (req, res) => {
  try {
    const relaciones = await ProveedorProducto.find()
      .populate('proveedor')
      .populate('producto');
    res.json(relaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una relación por ID
export const obtenerProveedorProductoPorId = async (req, res) => {
  try {
    const relacion = await ProveedorProducto.findById(req.params.id)
      .populate('proveedor')
      .populate('producto');
    if (!relacion) return res.status(404).json({ error: 'No encontrado' });
    res.json(relacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
export const actualizarProveedorProducto = async (req, res) => {
  try {
    const actualizada = await ProveedorProducto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar
export const eliminarProveedorProducto = async (req, res) => {
  try {
    await ProveedorProducto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Relación eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
