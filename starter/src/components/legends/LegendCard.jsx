import Container from "react-bootstrap/Container";
import { data } from "../../helpers/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";

const LegendCard = ({ legends }) => {
  const [show, setShow] = useState(true);
  return (
    
      <Col xs={10} sm={8} md={6} lg={4} xl={3}>
        <Card onClick={()=>setShow(!show)} role="button">
          {show ? (
            <Card.Img
            //   onClick={() => setShow(false)}
              variant="top"
              src={legends.img}
            />
          ) : (
            <>
              <Card.Body>
                <Card.Title>{legends.name}</Card.Title>
                <ul className="m-auto">
                  {legends.statistics.map((item) => (
                    <li className="list-unstyled h5 text-start">{item}</li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer>
                Career Years : {legends.official_career}
              </Card.Footer>
            </>
          )}
        </Card>
      </Col>
    
  );
};

export default LegendCard;
