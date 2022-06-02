import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ForeCastBox from "./../foreCastBox/ForeCastBox";
import CurrentBox from "./../currentBox/CurrentBox";

const SearchResult = (props) => {
  const [location, setLocation] = useState();
  const [current, setCurrent] = useState();
  const [forecast, setForecast] = useState();

  useEffect(() => {
    setCurrent(props.data.current);
    setLocation(props.data.location);
    setForecast(props.data.forecast);
  });

  return (
    <>
      {location && (
        <Container fluid className="my-4">
          <Row>
            <Col xs={12} md={6}>
              {current && <CurrentBox location={location} current={current} />}
            </Col>
            <Col xs={12} md={6}>
              {forecast && <ForeCastBox forecast={forecast.forecastday} />}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default SearchResult;
