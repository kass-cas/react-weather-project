import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
