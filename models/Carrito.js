import mongoose from 'mongoose';

const carritoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  fecha_creacion: { type: Date, default: Date.now }
});

export default mongoose.model('Carrito', carritoSchema);
