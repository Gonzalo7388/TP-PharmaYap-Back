import Proveedor from '../models/Proveedor.js';

// Crear un proveedor
export const crearProveedor = async (req, res) => {
  try {
    const nuevoProveedor = new Proveedor(req.body);
    await nuevoProveedor.save();
    res.status(201).json(nuevoProveedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los proveedores
export const obtenerProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener proveedor por ID
export const obtenerProveedorPorId = async (req, res) => {
  try {
    const proveedor = await Proveedor.findById(req.params.id);
    if (!proveedor) {
      return res.status(404).json({ error: 'Proveedor no encontrado' });
    }
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar proveedor
export const actualizarProveedor = async (req, res) => {
  try {
    const proveedorActualizado = await Proveedor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(proveedorActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar proveedor
export const eliminarProveedor = async (req, res) => {
  try {
    await Proveedor.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Proveedor eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
