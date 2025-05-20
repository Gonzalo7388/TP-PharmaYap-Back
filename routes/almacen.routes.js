// routes/almacen.routes.js
import express from 'express';
import {
  crearAlmacen,
  obtenerAlmacenes,
  obtenerAlmacenPorId,
  actualizarAlmacen,
  eliminarAlmacen
} from '../controllers/almacen.controller.js';

const router = express.Router();

router.post('/', crearAlmacen);
router.get('/', obtenerAlmacenes);
router.get('/:id', obtenerAlmacenPorId);
router.put('/:id', actualizarAlmacen);
router.delete('/:id', eliminarAlmacen);

export default router;
