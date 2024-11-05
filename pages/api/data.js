import getCoordinates from './coordinates';

export default async function handler(req, res) {
  const coordinates = await getCoordinates();

  const getWeatherData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m&hourly=visibility&daily=sunrise,sunset&wind_speed_unit=ms&timeformat=unixtime&timezone=Europe%2FBerlin&forecast_days=1&current=is_day`
  );

  const data = await getWeatherData.json();
  res.status(200).json(data)
}
