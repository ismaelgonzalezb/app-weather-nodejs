const axios = require("axios");

const getPlaceLatLon = async (direction) => {
  let friendlyUrl = encodeURI(direction);

  let resp = await axios.get(
    `https://us1.locationiq.com/v1/search?key=pk.9b57d6393024d388042ac1c299328f6a&q=${friendlyUrl}&format=json`
  );

    // if (response === 'Unable to geocode') {
    //   throw new Error("No hay resultados para la ciudad", direction);
    // }

        let location = resp.data[0];
        let displayName = location.display_name;
        let lat = location.lat;
        let lon = location.lon;

    return {
      place: displayName,
      lat: lat,
      lon: lon,
    };
}

  module.exports = {
    getPlaceLatLon,
  }