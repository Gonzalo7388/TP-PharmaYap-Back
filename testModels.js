import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('Error: MONGO_URI no está definido en las variables de entorno');
  process.exit(1);
}

await mongoose.connect(MONGO_URI);


import Usuario from './models/Usuario.js';
import Proveedor from './models/Proveedor.js';
import ProveedorProducto from './models/ProveedorProducto.js';

async function test() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB');

    // Crear un nuevo usuario de prueba
    const usuario = new Usuario({
      nombre: 'Test',
      apellido: 'Usuario',
      correo_electronico: 'testuser@example.com',
      contrasena: '123456',
      rol: 'cliente'
    });
    await usuario.save();
    console.log('Usuario guardado:', usuario);

    // Crear un proveedor de prueba
    const proveedor = new Proveedor({
      nombre: 'Proveedor Test',
      ruc: '12345678901',
      telefono: '987654321'
    });
    await proveedor.save();
    console.log('Proveedor guardado:', proveedor);

    // Crear un producto ficticio (suponiendo que tienes modelo Producto)
    // Aquí solo para referenciar
    const productoId = new mongoose.Types.ObjectId();

    // Crear proveedorProducto
    const proveedorProducto = new ProveedorProducto({
      proveedor: proveedor._id,
      producto: productoId,
      precio_ofrecido: 100,
      stock_disponible: 50,
      tiempo_entrega_dias: 7,
      observaciones: 'Producto test'
    });
    await proveedorProducto.save();
    console.log('ProveedorProducto guardado:', proveedorProducto);

    // Leer datos guardados
    const usuarios = await Usuario.find();
    console.log('Usuarios en DB:', usuarios);

    await mongoose.connection.close();
    console.log('Conexión cerrada');

  } catch (err) {
    console.error('Error en test:', err);
  }
}

test();
