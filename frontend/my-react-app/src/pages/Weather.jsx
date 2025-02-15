import { useState } from "react";
import { CloudRain, Sun, Cloud, Wind, MapPin, Droplets, Thermometer, Wind as WindIcon } from "lucide-react";
import "../styles/weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=91072731db9a387f80223a00c2aa8ae4`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }

    setLoading(false);
  };

  const getWeatherIcon = (description) => {
    if (description.includes("rain")) return <CloudRain size={50} className="icon" />;
    if (description.includes("clear")) return <Sun size={50} className="icon" />;
    if (description.includes("cloud")) return <Cloud size={50} className="icon" />;
    return <Wind size={50} className="icon" />;
  };

  return (
    <div className="weather-container">
      <h1 className="weather-title">🌎 Weather Forecast</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather} disabled={loading}>
          {loading ? "Loading..." : "🔍 Search"}
        </button>
      </div>

      {weather ? (
        <div className="weather-info glass-card">
          <h2>
            <MapPin size={20} /> {weather.name}, {weather.sys.country}
          </h2>
          <div className="weather-icon">
            {getWeatherIcon(weather.weather[0].description)}
            <p>{weather.weather[0].description}</p>
          </div>
          <div className="weather-details">
            <p><Thermometer size={20} /> Temperature: {weather.main.temp}°C</p>
            <p><Droplets size={20} /> Humidity: {weather.main.humidity}%</p>
            <p><WindIcon size={20} /> Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        </div>
      ) : (
        <p className="no-data">❄️ Enter a city name to get weather data.</p>
      )}
    </div>
  );
};

export default Weather;
