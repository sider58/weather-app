import { ctoF } from "../services/converters";
import styles from "./MainCard.module.css";
import { handleWeatherCode } from "../services/handleweathercode";

export const MainCard = ({
  city,
  country,
  weatherCode,
  unitSystem,
  weatherData,
}) => {

  const [description, icon] = handleWeatherCode(weatherData, weatherCode)

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{description}</p>
      <img
        width="300px"
        height="300px"
        src={`/icons/${icon}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem == "metric"
          ? Math.round(weatherData.current.temperature_2m)
          : Math.round(ctoF(weatherData.current.temperature_2m))}
        °{unitSystem == "metric" ? "C" : "F"}
      </h1>
      <p>
        Feels like{" "}
        {unitSystem == "metric"
          ? Math.round(weatherData.current.apparent_temperature)
          : Math.round(ctoF(weatherData.current.apparent_temperature))}
        °{unitSystem == "metric" ? "C" : "F"}
      </p>
    </div>
  );
};
