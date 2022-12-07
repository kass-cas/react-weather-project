import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 d-flex">
          <img src={props.data.iconUrl} alt={props.data.description}></img>
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="units">°F | °C </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{Math.round(props.data.humidity)}%</li>
            <li>Wind:{Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
