import express from 'express';
import { contactController } from './contact.controller';

const router = express.Router();

router.post('/', contactController.sendMailFromClient);

export const contactRoute = router;
