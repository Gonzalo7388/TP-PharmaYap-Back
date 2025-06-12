import express from 'express';
import {
  crearVenta,
  obtenerVentas,
  obtenerVentaPorId,
  eliminarVenta
} from '../controllers/venta.controller.js';

const router = express.Router();

router.post('/', crearVenta);            // Crear una nueva venta
router.get('/', obtenerVentas);         // Obtener todas las ventas
router.get('/:id', obtenerVentaPorId);  // Obtener una venta por ID
router.delete('/:id', eliminarVenta);   // Eliminar una venta por ID

export default router;
