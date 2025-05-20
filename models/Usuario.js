// models/Usuario.js
import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  correo_electronico: { type: String, unique: true, required: true },
  contrasena: { type: String, required: true },
  dni: String,
  telefono: String,
  fecha_nacimiento: Date,
  genero: String,
  fecha_registro: { type: Date, default: Date.now },
  estado_cuenta: { type: String, enum: ['activo', 'inactivo'], default: 'activo' },
  rol: { type: String, enum: ['cliente', 'trabajador', 'admin'], required: true }
}, {
  collection: 'usuarios'
});

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;
