import { getData } from '../services/apiHandler.js'

async function getWeather(req, res) {
    const {location} = req.query
    console.log(location)

    const response = await getData(location)
    console.log(response)

    res.render('canvas')
}

export {
    getWeather,
}
