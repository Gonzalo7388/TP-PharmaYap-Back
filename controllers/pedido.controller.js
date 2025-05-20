import Pedido from '../models/Pedido.js';

// Crear un nuevo pedido
export const crearPedido = async (req, res) => {
  try {
    const nuevoPedido = new Pedido(req.body);
    await nuevoPedido.save();
    res.status(201).json(nuevoPedido);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el pedido', error });
  }
};

// Obtener todos los pedidos
export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate('usuario', 'nombre apellido');
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los pedidos', error });
  }
};

// Obtener pedido por ID
export const obtenerPedidoPorId = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id).populate('usuario', 'nombre apellido');
    if (!pedido) return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el pedido', error });
  }
};

// Actualizar pedido
export const actualizarPedido = async (req, res) => {
  try {
    const pedidoActualizado = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pedidoActualizado) return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    res.json(pedidoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar el pedido', error });
  }
};

// Eliminar pedido
export const eliminarPedido = async (req, res) => {
  try {
    const pedidoEliminado = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedidoEliminado) return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    res.json({ mensaje: 'Pedido eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el pedido', error });
  }
};
