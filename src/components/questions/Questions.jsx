import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

import "./Questions.css";

const Questions = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <Container>
      <Row>
        <div id="Questions">
          {loading ? (
            <Spinner
              className="Questions-spinner"
              animation="border"
              variant="warning"
            />
          ) : (
            <iframe
              width="95%"
              height="100%"
              src="https://troucks.survey.fm/mda-teste?iframe=1"
            >
              <a href="https://troucks.survey.fm/mda-teste">View Survey</a>
            </iframe>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default Questions;
