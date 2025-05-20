import Carrito from '../models/Carrito.js';

// Crear un nuevo ítem en el carrito
export const crearCarrito = async (req, res) => {
  try {
    const nuevoCarrito = new Carrito(req.body);
    await nuevoCarrito.save();
    res.status(201).json(nuevoCarrito);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear ítem del carrito', error });
  }
};

// Obtener todos los ítems del carrito
export const obtenerCarritos = async (req, res) => {
  try {
    const carritos = await Carrito.find()
      .populate('usuario', 'nombre apellido')
      .populate('producto', 'nombre precio_unitario');
    res.json(carritos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener carritos', error });
  }
};

// Obtener un ítem del carrito por ID
export const obtenerCarritoPorId = async (req, res) => {
  try {
    const carrito = await Carrito.findById(req.params.id)
      .populate('usuario', 'nombre apellido')
      .populate('producto', 'nombre precio_unitario');
    if (!carrito) return res.status(404).json({ mensaje: 'Carrito no encontrado' });
    res.json(carrito);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el carrito', error });
  }
};

// Actualizar un ítem del carrito
export const actualizarCarrito = async (req, res) => {
  try {
    const carritoActualizado = await Carrito.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!carritoActualizado) return res.status(404).json({ mensaje: 'Carrito no encontrado' });
    res.json(carritoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el carrito', error });
  }
};

// Eliminar un ítem del carrito
export const eliminarCarrito = async (req, res) => {
  try {
    const carritoEliminado = await Carrito.findByIdAndDelete(req.params.id);
    if (!carritoEliminado) return res.status(404).json({ mensaje: 'Carrito no encontrado' });
    res.json({ mensaje: 'Ítem del carrito eliminado' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el carrito', error });
  }
};
