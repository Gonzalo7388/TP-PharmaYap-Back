import mongoose from 'mongoose';

const almacenSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ubicacion: { type: String, required: true },
  responsable: { type: String },
  telefono: { type: String },
  activo: { type: Boolean, default: true },
  fecha_creacion: { type: Date, default: Date.now }
});

export default mongoose.model('Almacen', almacenSchema);
