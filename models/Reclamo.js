import mongoose from 'mongoose';

const reclamoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  fecha_reclamo: { type: Date, default: Date.now },
  asunto: { type: String, required: true },
  detalle: { type: String, required: true },
  estado: { type: String, default: 'pendiente' }
});

export default mongoose.model('Reclamo', reclamoSchema);
