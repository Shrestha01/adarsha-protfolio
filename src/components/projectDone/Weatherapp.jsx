import React from "react";
import { useState } from "react";
import axios from "axios";

const Weatherapp = () => {
  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState();

  const API_KEY = import.meta.env.VITE_API_KEY_WEATHER_API;

  const handleSearch = async (e) => {
    if (!city) {
      alert("Please Enter a Valid City name");
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setWeatherData(response.data);
        console.log(response);
      }
    } catch (err) {
      console.log("error");
      alert("Please Enter a Valid City name");
      setWeatherData(null);
    }
  };
  return (
    <div className="h-screen bg-gradient-to-r from-blue-600 to-purple-800">
      <div className="container  flex flex-col items-center">
        <div className="border-2 rounded-lg p-8">
          <h1 className="text-3xl text-center font-bold mb-4">Weather App</h1>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="Enter city"
            className=" p-2 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleSearch}
            className="border-2 rounded-xl p-2 ml-4 text-white"
          >
            Search
          </button>

          {weatherData && (
            <div className="bg-blue-100 p-5 rounded-lg shadow-md max-w-xs mx-auto text-center">
              <h2 className="text-xl font-bold mb-2">{weatherData.name}</h2>
              <p className="text-2xl">{weatherData.main.temp}°C</p>
              <p className="text-sm text-gray-600">
                {weatherData.weather[0].description}
              </p>
              <p className="mt-2">Humidity: {weatherData.main.humidity}%</p>
              <p>Wind Speed: {weatherData.wind.speed} m/s</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weatherapp;
