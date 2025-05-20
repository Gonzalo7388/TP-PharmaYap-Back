import express from 'express';
import {
  crearReclamo,
  obtenerReclamos,
  obtenerReclamoPorId,
  actualizarReclamo,
  eliminarReclamo
} from '../controllers/reclamo.controller.js';

const router = express.Router();

router.post('/', crearReclamo);
router.get('/', obtenerReclamos);
router.get('/:id', obtenerReclamoPorId);
router.put('/:id', actualizarReclamo);
router.delete('/:id', eliminarReclamo);

export default router;
