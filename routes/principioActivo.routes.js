import { Router } from 'express';
import {
  getPrincipiosActivos,
  getPrincipioActivoById,
  createPrincipioActivo,
  updatePrincipioActivo,
  deletePrincipioActivo
} from '../controllers/principioActivo.controller.js';

const router = Router();

router.get('/', getPrincipiosActivos);
router.get('/:id', getPrincipioActivoById);
router.post('/', createPrincipioActivo);
router.put('/:id', updatePrincipioActivo);
router.delete('/:id', deletePrincipioActivo);

export default router;
