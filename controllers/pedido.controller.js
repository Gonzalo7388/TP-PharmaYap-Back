import Pedido from '../models/Pedido.js';

// Crear nuevo pedido
export const crearPedido = async (req, res) => {
  try {
    const { cliente, total_pedido, direccion_entrega, metodo_pago } = req.body;

    const nuevoPedido = new Pedido({
      cliente,
      total_pedido,
      direccion_entrega,
      metodo_pago,
      estado: 'pendiente',
      historial_estado: [{
        estado: 'pendiente',
        cambiado_por: req.user?.id || null // opcional: si usas auth
      }]
    });

    const pedidoGuardado = await nuevoPedido.save();
    res.status(201).json(pedidoGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los pedidos
export const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find()
      .populate('cliente', 'nombre apellido correo_electronico telefono')
      .populate('repartidor', 'nombre apellido');
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener pedido por ID
export const obtenerPedidoPorId = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id)
      .populate('cliente', 'nombre apellido correo_electronico telefono')
      .populate('repartidor', 'nombre apellido');
    if (!pedido) return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar pedido (con historial de estado)
export const actualizarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findById(req.params.id);
    if (!pedido) return res.status(404).json({ mensaje: 'Pedido no encontrado' });

    const nuevoEstado = req.body.estado;
    const estadoCambio = nuevoEstado && nuevoEstado !== pedido.estado;

    Object.assign(pedido, req.body);

    if (estadoCambio) {
      pedido.historial_estado.push({
        estado: nuevoEstado,
        cambiado_por: req.user?.id || null // opcional: si usas auth
      });
    }

    const pedidoActualizado = await pedido.save();
    res.json(pedidoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar pedido
export const eliminarPedido = async (req, res) => {
  try {
    const pedidoEliminado = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedidoEliminado) return res.status(404).json({ mensaje: 'Pedido no encontrado' });
    res.json({ mensaje: 'Pedido eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
