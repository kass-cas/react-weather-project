import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6 d-flex">
            <img src={weatherData.iconUrl} alt="mostly cloudy"></img>
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">°F | °C </span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{Math.round(weatherData.humidity)}%</li>
              <li>Wind:{Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  } else {
    const apiKey = "cfa4o404a8fe3b93cc874tf8eb2b4f00";

    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
