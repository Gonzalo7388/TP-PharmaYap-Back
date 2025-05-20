import express from 'express';
import {
  crearProveedor,
  obtenerProveedores,
  obtenerProveedorPorId,
  actualizarProveedor,
  eliminarProveedor
} from '../controllers/proveedor.controller.js';

const router = express.Router();

router.post('/', crearProveedor);
router.get('/', obtenerProveedores);
router.get('/:id', obtenerProveedorPorId);
router.put('/:id', actualizarProveedor);
router.delete('/:id', eliminarProveedor);

export default router;
