import { useState, useEffect } from "react";

import { MainCard } from "../components/MainCard.js";
import { ContentBox } from "../components/ContentBox.js";
import { Header } from "../components/Header.js";
import { DateAndTime } from "../components/DateAndTime.js";
import { MetricsBox } from "../components/MetricsBox.js";
import { UnitSwitch } from "../components/UnitSwitch.js";
import { LoadingScreen } from "../components/LoadingScreen.js";

import styles from "../styles/Home.module.css";
import configJSON from '../config.json'

export const App = () => {

  const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState("metric");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify()
      });
      const data = await res.json();

      setWeatherData({ ...data });
    };
    getData()
  }, [triggerFetch]);

  console.log(weatherData);

  const changeSystem = () =>
    unitSystem == "metric"
      ? setUnitSystem("imperial")
      : setUnitSystem("metric");

  return weatherData && !weatherData.message ? (
    <div className={styles.wrapper}>
      <MainCard
        city={configJSON.city}
        country={configJSON.country}
        weatherCode={weatherData.current.weather_code}
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
    </div>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default App;
