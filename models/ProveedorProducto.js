// models/ProveedorProducto.js
import mongoose from 'mongoose';

const proveedorProductoSchema = new mongoose.Schema({
  proveedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Proveedor', required: true },
  producto: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  precio_ofrecido: Number,
  stock_disponible: Number,
  tiempo_entrega_dias: Number,
  observaciones: String
}, {
  collection: 'proveedorproductos' // opcional para definir el nombre de la colección
});

export default mongoose.model('ProveedorProducto', proveedorProductoSchema);
