const Router = require('express');
const weatherController = require('../controllers/weather.js')

const router = Router();

router.get('/', weatherController.getWeather);

module.exports = router;
