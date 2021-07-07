import { Router } from 'express';
import { createService, getServices } from '../controllers/getServices';

const router = Router();

router.post('/', createService);

router.get('/', getServices);

export default router;