import express from 'express';
import {
  crearProveedorProducto,
  obtenerProveedorProductos,
  obtenerProveedorProductoPorId,
  actualizarProveedorProducto,
  eliminarProveedorProducto
} from '../controllers/proveedorProducto.controller.js';

const router = express.Router();

router.post('/', crearProveedorProducto);
router.get('/', obtenerProveedorProductos);
router.get('/:id', obtenerProveedorProductoPorId);
router.put('/:id', actualizarProveedorProducto);
router.delete('/:id', eliminarProveedorProducto);

export default router;
