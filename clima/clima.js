const axios = require('axios');

const getClima = async (lat, lon) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9d7933f303a9d555c0f9bc8f4c8aafee&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima,
}