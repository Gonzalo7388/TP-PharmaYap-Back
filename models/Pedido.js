// models/Pedido.js
import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
  cliente: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Cliente', 
    required: true 
  },
  fecha_pedido: { 
    type: Date, 
    default: Date.now 
  },
  estado: { 
    type: String, 
    enum: ['pendiente', 'En camino', 'entregado', 'cancelado'],
    default: 'pendiente' 
  },
  metodo_pago: { 
    type: String 
  },
  total_pedido: { 
    type: Number, 
    required: true 
  },
  direccion_entrega: { 
    type: String, 
    required: true 
  },
  repartidor: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario' // suponiendo que los repartidores son usuarios internos
  },
  historial_estado: [{
    estado: {
      type: String,
      enum: ['pendiente', 'en_camino', 'entregado', 'cancelado']
    },
    fecha: {
      type: Date,
      default: Date.now
    },
    cambiado_por: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Usuario' // quién cambió el estado (admin o repartidor)
    }
  }]
}, {
  timestamps: true,
  collection: 'pedidos'
});

export default mongoose.model('Pedido', pedidoSchema);
