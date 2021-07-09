import { Router } from 'express';
import { createEvent } from '../controllers/getEvents';

const router = Router();

router.post('/', createEvent);

export default router;