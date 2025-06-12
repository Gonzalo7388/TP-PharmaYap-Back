// models/Cliente.js
import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    apellido: {
        type: String,
        required: true,
        trim: true,
    },
    correo_electronico: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    telefono: {
        type: String,
        trim: true,
    },
    direccion: {
        type: String,
        trim: true,
    },
    sexo: {
        type: String,
        enum: ['Masculino', 'Femenino', 'Otro'],
        required: false,
    },
    dni: {
        type: String,
        trim: true,
        unique: true,
        sparse: true, // permite múltiples nulos si no se provee
    },
    fecha_registro: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true,
    collection: 'clientes'
});

export default mongoose.model('Cliente', clienteSchema);
