import express from 'express';
import {
  crearInventario,
  obtenerInventarios,
  obtenerInventarioPorId,
  actualizarInventario,
  eliminarInventario
} from '../controllers/inventario.controller.js';

const router = express.Router();

router.post('/', crearInventario);
router.get('/', obtenerInventarios);
router.get('/:id', obtenerInventarioPorId);
router.put('/:id', actualizarInventario);
router.delete('/:id', eliminarInventario);

export default router;
