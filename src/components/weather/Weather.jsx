// Weather.js
import  { useState, useEffect } from "react";
import Search from "../search/Search";

const Weather = () => {
  const [search, setSearch] = useState("London");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchWeatherData();
  }, [search]);

  async function fetchWeatherData() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8e784eedb6de5f7b5c13c0b1adc4fb23`
      );
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    });
  }

  return (
    <div className="weather-container">
      <Search search={search} setSearch={setSearch} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="weather-details">
          <div className="city-name">
            <h3>
              {weather?.name}, <span>{weather?.sys?.country}</span>
            </h3>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temperature">
            {Math.round(weather?.main?.temp - 273.15)}°C
          </div>
          <p className="description">{weather?.weather[0]?.description}</p>
          <div className="extra-info">
            <div className="info">
              <p className="label">Wind Speed</p>
              <p className="value">{weather?.wind?.speed} m/s</p>
            </div>
            <div className="info">
              <p className="label">Humidity</p>
              <p className="value">{weather?.main?.humidity}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
