import React, { useState } from "react";
import '../css/weatherApp.css'; // Assuming you've renamed WeatherApp.css to Weather.css

const api = {
  key: "7fc56e0860f4685c26a226803c1511b3", // Move the API key to environment variables
  base: "https://api.openweathermap.org/data/2.5/",
};


function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emptySearch, setEmptySearch] = useState(false);

  const searchWeather = () => {
    if (search.trim() === "") {
      setEmptySearch(true);
      return;
    }

    setErrorMessage("");
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        if (result.cod === "404") {
          setNotFound(true);
          setWeather(null);
        } else {
          setWeather(result);
          setNotFound(false);
        }
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        setErrorMessage("Failed to load weather data");
      });
  };

  const closeModal = () => {
    setNotFound(false);
    setEmptySearch(false);
  };

  return (
    <div className="weatherApp-container">
      <header className="weatherApp-header">
        <h1>Weather Checker</h1>
        <div className="weatherApp-search">
          <input
            type="text"
            placeholder="Enter city"
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Enter city name"
            className="weatherApp-input"
          />
          <button className="weatherApp-searchButton" onClick={searchWeather}>Search</button>
          {errorMessage && <p className="weatherApp-errorMessage">{errorMessage}</p>}
        </div>
        
        {notFound && (
          <div className="weatherApp-modal">
            <div className="weatherApp-modalContent">
              <span className="weatherApp-closeButton" onClick={closeModal}>&times;</span>
              <p>City not found. Please try another city.</p>
            </div>
          </div>
        )}

        {emptySearch && (
          <div className="weatherApp-modal">
            <div className="weatherApp-modalContent">
              <span className="weatherApp-closeButton" onClick={closeModal}>&times;</span>
              <p>Please enter a city name.</p>
            </div>
          </div>
        )}

        {weather && (
          <div className="weatherApp-info">
            <p className="weatherApp-cityName">{weather.name}</p>
            <p className="weatherApp-temperature">{weather.main.temp}°C</p>
            <p className="weatherApp-weatherMain">{weather.weather[0].main}</p>
            <p className="weatherApp-weatherDescription">{weather.weather[0].description}</p>
            <p className="weatherApp-humidity">Humidity: {weather.main.humidity}%</p>
            <p className="weatherApp-pressure">Pressure: {weather.main.pressure} hPa</p>
            <p className="weatherApp-windSpeed">Wind Speed: {weather.wind.speed} m/s</p>
            <p className="weatherApp-sunrise">Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p className="weatherApp-sunset">Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default Weather;