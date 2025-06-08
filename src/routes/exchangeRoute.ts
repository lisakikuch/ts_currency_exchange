import express from 'express';
import { convertCurrencyController } from '../controllers/exchangeController.js';

const router = express.Router();
router.get('/exchange', convertCurrencyController);
export default router;
