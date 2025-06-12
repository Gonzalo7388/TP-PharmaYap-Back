import mongoose from 'mongoose';

const principioActivoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: { type: String }
}, {
  timestamps: true
});

export default mongoose.model('PrincipioActivo', principioActivoSchema);
