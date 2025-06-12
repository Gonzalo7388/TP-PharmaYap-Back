import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio_unitario: { type: Number, required: true },
  stock: { type: Number, required: true },
  stock_minimo: { type: Number },
  unidad_medida: { type: String },
  imagen: { type: String },
  registro_sanitario: { type: String },
  fecha_vencimiento: { type: String }, // Considera usar tipo Date si deseas validaciones
  es_recetado: { type: Boolean, default: false },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
  principio_activo: { type: mongoose.Schema.Types.ObjectId, ref: 'PrincipioActivo', required: true },
}, {
  timestamps: true
});

export default mongoose.model('Producto', productoSchema);


