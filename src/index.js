import 'dotenv/config'; // Make sure this is the absolute first line!

console.log('--- Dotenv Debugging ---');
console.log('Is MONGO_URI in process.env?', !!process.env.MONGO_URI);
console.log('Value of MONGO_URI:', process.env.MONGO_URI);
console.log('Value of PORT:', process.env.PORT);
console.log('--- End Dotenv Debugging ---');


import express from 'express';
import cors from 'cors';
import connectDB from '../config/db.js';


const app = express();

// Middleware
app.use(express.json()); // For parsing JSON request bodies
app.use(cors()); // To allow cross-origin requests from your frontend

// Environment variables
const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const MONGO_URI = process.env.MONGO_URI;

// Basic route to check if server is running
app.get('/', (req, res) => {
    res.send('PharmaYap Backend is running!');
});

// TODO: Add your API routes here (e.g., for category, product, clients, etc.)
import usuarioRoutes from '../routes/usuario.routes.js';
app.use('/api/usuarios', usuarioRoutes);

import proveedorRoutes from '../routes/proveedor.routes.js';
app.use('/api/proveedores', proveedorRoutes);

import productRoutes from '../routes/producto.routes.js';
app.use('/api/productos', productRoutes);

import proveedorProductoRoutes from '../routes/proveedorProducto.routes.js';
app.use('/api/proveedor-productos', proveedorProductoRoutes);

import categoriaRoutes from '../routes/categoria.routes.js';
app.use('/api/categorias', categoriaRoutes);

import almacenRoutes from '../routes/almacen.routes.js';
app.use('/api/almacenes', almacenRoutes);

import carritoRoutes from '../routes/carrito.routes.js';
app.use('/api/carritos', carritoRoutes);

import pedidoRoutes from '../routes/pedido.routes.js';
app.use('/api/pedidos', pedidoRoutes);

import inventarioRoutes from '../routes/inventario.routes.js';
app.use('/api/inventarios', inventarioRoutes);

import reclamoRoutes from '../routes/reclamo.routes.js';
app.use('/api/reclamos', reclamoRoutes);



// MongoDB Connection
if (!MONGO_URI) {
    console.error('ERROR: MONGO_URI environment variable is not set. Please check your .env file.');
    // If URI is missing, still start the server so you can see the frontend, but indicate DB issue
    app.listen(PORT, () => console.log(`Server running on port ${PORT} (no DB connection)`));
} else {
    connectDB(MONGO_URI).then(() => {
        app.listen(PORT, () => console.log(`Server on ${PORT}`));
    });

}