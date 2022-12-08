import { Axios } from "axios";
import React from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "cfa4o404a8fe3b93cc874tf8eb2b4f00";
  let longitude = props.coordinates.longitude;
  let latitude = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wed</div>
          <div className="WeatherForecast-icon">
            <img src={props.data.iconUrl} alt={props.data.description}></img>
          </div>
          <div className="WeatherForecast-temperatures>">
            <span className="WeatherForecast-temp-max">111°</span>
            <span className="WeatherForecast-temp-min">56°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
