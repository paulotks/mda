import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { ElectionContext } from "../../context/election";

import "./Welcome.css";

const Welcome = () => {
  const [electionState, setElectionState] = React.useContext(ElectionContext);

  return (
    <Container id="welcome">
      <Row className="Welcome-row">
        <div className="Welcome-background-wrapper">
          <img
            className="Welcome-background-mda"
            src="https://res.cloudinary.com/djllvgbqo/image/upload/v1699824627/MDA/Reels_-_Capa_shavbz.png"
            alt="Melhores do Ano UFG"
          />
          <Button
            size="lg"
            variant="outline-warning"
            onClick={() => setElectionState({ type: "CHANGE_STATE" })}
          >
            Votar
          </Button>
        </div>
      </Row>
    </Container>
  );
};

export default Welcome;
