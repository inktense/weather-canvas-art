import { Router } from 'express';
import { getWeather } from '../controllers/weather.js'

const router = Router();

router.get('/', getWeather);

export default router;
