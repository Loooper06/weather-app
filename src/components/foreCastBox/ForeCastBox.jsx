import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ForeCastBox.css";

const ForeCastBox = (props) => {
  const [forecastday, setForecastday] = useState();

  useEffect(() => {
    setForecastday(props.forecast);
  }, []);

  return (
    <>
      <Container fluid className="foreCast mt-md-0 mt-4 px-0">
        <Row>
          {forecastday && (
            <>
              <Col xs={12} md={12} className="ps-md-0 pe-md-1">
                <div className="forecastdayContainer">
                  <div className="forecastdayBox">
                    <div className="forecastDate">
                      <h5>{forecastday[1].date}</h5>
                    </div>
                    <div className="forecastAvgsDetails">
                      <div className="forecastdayBoxIcon">
                        <img
                          src={forecastday[1].day.condition.icon}
                          alt="weather Icon"
                        />
                        <p>{forecastday[1].day.condition.text}</p>
                      </div>
                      <div className="forecastAvgs">
                        <p className="forecastAvgText">
                          AvgTemp : {forecastday[1].day.avgtemp_c}°C
                        </p>
                        <p className="forecastAvgText">
                          AvgHumidity : {forecastday[1].day.avghumidity}%
                        </p>
                        <p className="forecastAvgText">
                          AvgWindSpeed : {forecastday[1].day.avgvis_km}km/h
                        </p>
                      </div>
                    </div>
                    <div className="forecastSunMoonSet">
                      <div className="forecastSun">
                        <p>SunSet : {forecastday[1].astro.sunset}</p>
                        <p>SunRise : {forecastday[1].astro.sunrise}</p>
                      </div>
                      <div className="forecastMoon">
                        <p>MoonSet : {forecastday[1].astro.moonset}</p>
                        <p>MoonRise : {forecastday[1].astro.moonrise}</p>
                      </div>
                    </div>
                    <div className="forecastHours">
                      <div className="hours">
                        <img
                          src={forecastday[1].hour[2].condition.icon}
                          alt="condition"
                        />
                        <p>{forecastday[1].hour[2].condition.text}</p>
                      </div>
                      <div className="hours">
                        <img
                          src={forecastday[1].hour[8].condition.icon}
                          alt="condition"
                        />
                        <p>{forecastday[1].hour[8].condition.text}</p>
                      </div>
                      <div className="hours">
                        <img
                          src={forecastday[1].hour[15].condition.icon}
                          alt="condition"
                        />
                        <p>{forecastday[1].hour[15].condition.text}</p>
                      </div>
                      <div className="hours">
                        <img
                          src={forecastday[1].hour[22].condition.icon}
                          alt="condition"
                        />
                        <p>{forecastday[1].hour[22].condition.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={12} className="pe-md-1 ps-md-0 mt-2">
                <div className="forecastdayContainer">
                  <div className="forecastdayBox">
                    <div className="forecastDate">
                      <h5>{forecastday[2].date}</h5>
                    </div>
                    <div className="forecastAvgsDetails">
                      <div className="forecastdayBoxIcon">
                        <img
                          src={forecastday[2].day.condition.icon}
                          alt="weather Icon"
                        />
                        <p>{forecastday[2].day.condition.text}</p>
                      </div>
                      <div className="forecastAvgs">
                        <p className="forecastAvgText">
                          AvgTemp : {forecastday[2].day.avgtemp_c}°C
                        </p>
                        <p className="forecastAvgText">
                          AvgHumidity : {forecastday[2].day.avghumidity}%
                        </p>
                        <p className="forecastAvgText">
                          AvgWindSpeed : {forecastday[2].day.avgvis_km}km/h
                        </p>
                      </div>
                    </div>
                    <div className="forecastSunMoonSet">
                      <div className="forecastSun">
                        <p>SunSet : {forecastday[2].astro.sunset}</p>
                        <p>SunRise : {forecastday[2].astro.sunrise}</p>
                      </div>
                      <div className="forecastMoon">
                        <p>MoonSet : {forecastday[2].astro.moonset}</p>
                        <p>MoonRise : {forecastday[2].astro.moonrise}</p>
                      </div>
                    </div>
                    <div className="forecastHours">
                      <div className="hours">
                        <img
                          src={forecastday[2].hour[2].condition.icon}
                          alt="condition"
                        />
                        <p>{forecastday[2].hour[2].condition.text}</p>
                      </div>
                      <div className="hours">
                        <img
                          src={forecastday[2].hour[8].condition.icon}
                          alt="condition"
                        />
                        <p>{forecastday[2].hour[8].condition.text}</p>
                      </div>
                      <div className="hours">
                        <img
                          src={forecastday[2].hour[15].condition.icon}
                          alt="condition"
                        />
                        <p>{forecastday[2].hour[15].condition.text}</p>
                      </div>
                      <div className="hours">
                        <img
                          src={forecastday[2].hour[22].condition.icon}
                          alt="condition"
                        />
                        <p>{forecastday[2].hour[22].condition.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ForeCastBox;
