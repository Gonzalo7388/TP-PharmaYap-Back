// models/Proveedor.js
import mongoose from 'mongoose';

const proveedorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  ruc: { type: String, required: true, unique: true },
  direccion: String,
  telefono: String,
  correo: String,
  fecha_registro: { type: Date, default: Date.now },
  estado: { type: String, enum: ['activo', 'inactivo'], default: 'activo' }
});


export default mongoose.model('Proveedor', proveedorSchema);
