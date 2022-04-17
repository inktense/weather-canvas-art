const api =  require('../services/apiHandler.js')
// import pkg from 'canvas';
// const { createCanvas } = pkg;

async function getWeather(req, res) {
    const {location} = req.query
    console.log(location)

    const response = await api.getData(location)
   // console.log(response)

//    const canvas = createCanvas(1200, 600)

//    const canvas = document.getElementById('canvas');
//    const ctx = canvas.getContext('2d')
//    ctx.fillStyle = '#fff'
//    ctx.fillRect(0, 0, 1200, 600)
//    console.log("here")
//    // Write "Awesome!"
//    ctx.font = '30px Impact'
//    ctx.rotate(0.1)
//    ctx.fillText('Awesome!', 50, 100)
//    console.log(ctx)
   
//    // Draw line under text
//    var text = ctx.measureText('Awesome!')
//    ctx.strokeStyle = 'rgba(0,0,0,0.5)'
//    ctx.beginPath()
//    ctx.lineTo(50, 102)
//    ctx.lineTo(50 + text.width, 102)
//    ctx.stroke()
     res.render('canvas')
}

module.exports = {
    getWeather,
}
