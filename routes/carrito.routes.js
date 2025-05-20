import express from 'express';
import {
  crearCarrito,
  obtenerCarritos,
  obtenerCarritoPorId,
  actualizarCarrito,
  eliminarCarrito
} from '../controllers/carrito.controller.js';

const router = express.Router();

router.post('/', crearCarrito);
router.get('/', obtenerCarritos);
router.get('/:id', obtenerCarritoPorId);
router.put('/:id', actualizarCarrito);
router.delete('/:id', eliminarCarrito);

export default router;
