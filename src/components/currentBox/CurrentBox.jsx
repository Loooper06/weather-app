import { useState, useEffect } from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import "./CurrentBox.css";

const CurrentBox = (props) => {
  let { current, location } = props;


  return (
    <div
      className={`currentBox ${current.is_day === 1 ? "dayMode" : "nightMode"}`}
    >
      <div className="cuurentBoxLocation">
        <div className="currentBoxCountry">
        <Typography>
          <FmdGoodOutlinedIcon />
        </Typography>
        <Breadcrumbs aria-label="breadcrumb" separator=",">
          <h6>{location.region} </h6>
          <h6>{location.country}</h6>
        </Breadcrumbs>
        </div>
        <div className="currentBoxCity">
            <h2>{location.name}</h2>
        </div>
      </div>
      <div className="currentBoxMainContent">
        <div
          className={`currentBoxWearherCondition ${
            current.is_day === 1
              ? "weatherConditionDayMode"
              : "weatherConditionNightMode"
          }`}
        >
          <img src={current.condition.icon} alt="" />
          <h6
            className={current.is_day === 1 ? "dayModeText" : "nightModeText"}
          >
            It's {current.condition.text}
          </h6>
        </div>
        <div className="currentBoxWearherTemp">
          <h1>{current.temp_c}°C</h1>
        </div>
      </div>
      <div className="wrapper"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="rgba(255,255,255,.7)"
            full-opacity="1"
            d="M0,32L48,69.3C96,107,192,181,288,176C384,171,480,85,576,80C672,75,768,149,864,154.7C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      <div className="currentBoxMoreDetails">
          <div className="moreDetailBox Humidity">
              <img src="/images/drop.png" alt="Humidity" />
              <p>Humidity</p>
              <p>{current.humidity}%</p>
          </div>
          <div className="moreDetailBox WindSpeed">
              <img src="/images/wind.png" alt="Wind Speed" />
              <p>Wind Speed</p>
              <p>{current.wind_kph}km/h</p>
          </div>
          <div className="moreDetailBox WindDirection">
              <img src="/images/wind-socket.png" alt="Wind Direction" />
              <p>Wind Direction</p>
              <p>{current.wind_dir}</p>
          </div>
          <div className="moreDetailBox FeelsLike">
              <img src="/images/thermometer.png" alt="Feels Like" />
              <p>Feels Like</p>
              <p>{current.feelslike_c}°C</p>
          </div>
      </div>
    </div>
  );
};

export default CurrentBox;
