import mongoose from 'mongoose';

const inventarioSchema = new mongoose.Schema({
  almacen: { type: mongoose.Schema.Types.ObjectId, ref: 'Almacen', required: true },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad_disponible: { type: Number, required: true },
  fecha_actualizacion: { type: Date, default: Date.now }
});

export default mongoose.model('Inventario', inventarioSchema);
