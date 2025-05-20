import Producto from '../models/Producto.js';

// Crear producto
export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los productos
export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find().populate('categoria');
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener producto por ID
export const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id).populate('categoria');
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar producto
export const actualizarProducto = async (req, res) => {
  try {
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(productoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar producto
export const eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
