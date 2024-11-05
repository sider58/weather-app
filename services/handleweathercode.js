export const handleWeatherCode = (weatherData, weatherCode) => {
    const isDay = weatherData.current.is_day;
    
    if (weatherCode === 0) {
        const description = "Clear sky";
        const icon = isDay ? "01d" : "01n";
        return [description, icon];
    }

    if ([1, 2, 3].includes(weatherCode)) {
        const description = "Mainly clear, partly cloudy, and overcast";
        const icon = isDay ? "02d" : "02n";
        return [description, icon];
    }

    if ([45, 48].includes(weatherCode)) {
        const description = "Fog and depositing rime fog";
        const icon = isDay ? "50d" : "50n";
        return [description, icon];
    }

    if ([51, 53, 55].includes(weatherCode)) {
        const description = "Drizzle: Light, moderate, and dense intensity";
        const icon = isDay ? "09d" : "09n";
        return [description, icon];
    }

    if ([56, 57].includes(weatherCode)) {
        const description = "Freezing Drizzle: Light and dense intensity";
        const icon = isDay ? "09d" : "09n";
        return [description, icon];
    }

    if ([61, 63, 65].includes(weatherCode)) {
        const description = "Rain: Slight, moderate and heavy intensity";
        const icon = isDay ? "10d" : "10n";
        return [description, icon];
    }

    if ([66, 67].includes(weatherCode)) {
        const description = "Freezing Rain: Light and heavy intensity";
        const icon = isDay ? "10d" : "10n";
        return [description, icon];
    }

    if ([71, 73, 75].includes(weatherCode)) {
        const description = "Snow fall: Slight, moderate, and heavy intensity";
        const icon = isDay ? "13d" : "13n";
        return [description, icon];
    }

    if (weatherCode === 77) {
        const description = "Snow grains";
        const icon = isDay ? "13d" : "13n";
        return [description, icon];
    }

    if ([80, 81, 82].includes(weatherCode)) {
        const description = "Rain showers: Slight, moderate, and violent";
        const icon = isDay ? "09d" : "09n";
        return [description, icon];
    }

    if ([85, 86].includes(weatherCode)) {
        const description = "Snow showers slight and heavy";
        const icon = isDay ? "13d" : "13n";
        return [description, icon];
    }

    if (weatherCode === 95) {
        const description = "Thunderstorm: Slight or moderate";
        const icon = isDay ? "11d" : "11n";
        return [description, icon];
    }

    if ([96, 99].includes(weatherCode)) {
        const description = "Thunderstorm with slight and heavy hail";
        const icon = isDay ? "11d" : "11n";
        return [description, icon];
    }

    // Optionnel : Valeur par défaut si le code météo ne correspond à aucun cas
    return ["Condition météorologique inconnue", "unknown"];
};