import React from "react";

import "./WeatherForecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Wed</div>
          <div className="WeatherForecast-icon">**iconUrl**</div>
          <div className="WeatherForecast-temperatures>">
            <span className="WeatherForecast-temp-max">111°</span>
            <span className="WeatherForecast-temp-min">56°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
