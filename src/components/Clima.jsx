import React, { useEffect, useState } from "react";
import "./Styles/clima.css";
import hotBg from '../media/hot.jpg';
import coldBg from '../media/cold.jpg';
import Navbar from "./Navbar";
import Descriptions from "./Descriptions";
import { getFormattedWeatherData } from "../assets/weatherService";

const Clima = () => {
  const [city, setCity] = useState("Buenos Aires");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [bg, setBg] = useState(hotBg);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      // Dynamic background
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = () => {
    setUnits((prevUnits) => (prevUnits === 'metric' ? 'imperial' : 'metric'));
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar-wrapper">
       <Navbar/>
      </div>

      <div className="clima" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          {weather && (
            <div className="container">
              <div className="section section-inputs">
                <input
                  onKeyDown={enterKeyPressed}
                  type="text"
                  name="city"
                  placeholder="Enter City..."
                />
                <button onClick={handleUnitsClick}>
                  {units === "metric" ? "°F" : "°C"}
                </button>
              </div>

              <div className="section section-temperature">
                <div className="icon">
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="weatherIcon" />
                  <h3>{weather.description}</h3>
                </div>
                <div className="temperature">
                  <h2>
                    {`${weather.temp.toFixed()}°${units === 'metric' ? "C" : "F"}`}
                  </h2>
                </div>
              </div>

              {/* bottom description */}
              <Descriptions weather={weather} units={units} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clima;
