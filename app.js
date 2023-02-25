const myplace = require('./place/place');
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Address of the city to get the weather",
    demand: true,
  },
}).argv;

let getInfo = async(direccion) => {

  try {
    
    let coords = await myplace.getPlaceLatLon(direccion);
    let temp = await clima.getClima(coords.lat, coords.lon);

    return `The weather in ${coords.place} is ${temp} degrees`;
  } 
  catch (err) {
      return `Could not determine the weather in ${direccion}`;
    }

}

getInfo(argv.direccion)
      .then(mensaje => {console.log(mensaje)})
      .catch(err => console.log(err));