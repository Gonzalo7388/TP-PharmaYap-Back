import express from 'express';
import {
  crearPedido,
  obtenerPedidos,
  obtenerPedidoPorId,
  actualizarPedido,
  eliminarPedido
} from '../controllers/pedido.controller.js';

const router = express.Router();

router.post('/', crearPedido);
router.get('/', obtenerPedidos);
router.get('/:id', obtenerPedidoPorId);
router.put('/:id', actualizarPedido);
router.delete('/:id', eliminarPedido);

export default router;
