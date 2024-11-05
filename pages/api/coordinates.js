import configJSON from '../../config.json';
const localCity = `${configJSON.city}, ${configJSON.country}`; 

export default async function getCoordinates() {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${localCity}`);
  const data = await response.json();
  
  const { lat, lon } = data[0];
  return { latitude: lat, longitude: lon };
}