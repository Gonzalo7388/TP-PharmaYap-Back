// models/Venta.js
import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente', // 
    required: true,
  },
  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
        min: 1,
      },
      precio_unitario: {
        type: Number,
        required: true,
        min: 0,
      },
      subtotal: {
        type: Number,
        required: true,
        min: 0,
      }
    }
  ],
  total: {
    type: Number,
    required: true,
    min: 0,
  },
  metodo_pago: {
    type: String,
    enum: ['efectivo', 'tarjeta', 'transferencia', 'yape', 'plin'],
    required: true,
  },
  estado: {
    type: String,
    enum: ['pendiente', 'pagado', 'anulado'],
    default: 'pagado',
  },
  fecha_venta: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
  collection: 'ventas'
});

export default mongoose.model('Venta', ventaSchema);
