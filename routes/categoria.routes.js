// routes/categoria.routes.js
import express from 'express';
import {
  crearCategoria,
  obtenerCategorias,
  obtenerCategoriaPorId,
  actualizarCategoria,
  eliminarCategoria
} from '../controllers/categoria.controller.js';

const router = express.Router();

router.post('/', crearCategoria);
router.get('/', obtenerCategorias);
router.get('/:id', obtenerCategoriaPorId);
router.put('/:id', actualizarCategoria);
router.delete('/:id', eliminarCategoria);

export default router;
