import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Los Angeles</h1>
      <ul>
        <li>Today's Date</li>
        <li>Description of current weather</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6 d-flex">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          ></img>
          <span className="temperature">101</span>
          <span className="units">°F | °C </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
