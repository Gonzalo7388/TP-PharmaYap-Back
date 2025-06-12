import express from 'express';
import {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente
} from '../controllers/cliente.controller.js';

const router = express.Router();

router.post('/', crearCliente);            // Crear un nuevo cliente
router.get('/', obtenerClientes);          // Obtener todos los clientes
router.get('/:id', obtenerClientePorId);  // Obtener cliente por ID
router.put('/:id', actualizarCliente);    // Actualizar cliente por ID
router.delete('/:id', eliminarCliente);   // Eliminar cliente por ID

export default router;
