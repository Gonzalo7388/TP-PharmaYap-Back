import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  fecha_pedido: { type: Date, default: Date.now },
  estado: { type: String, default: 'pendiente' },
  metodo_pago: { type: String },
  total_pedido: { type: Number, required: true },
  direccion_entrega: { type: String, required: true }
});

export default mongoose.model('Pedido', pedidoSchema);
