import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold animate__animated animate__fadeInUp">
              Pertanyaan Yang Sering Ditanyakan
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-lg-2 g-4 pt-4">
          {faq.map((data, index) => {
            return (
              <Col key={data.id} className="animate__animated animate__fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                <Accordion>
                  <Accordion.Item eventKey={data.eventKey}>
                    <Accordion.Header>{data.title}</Accordion.Header>
                    <Accordion.Body>{data.desc}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default FaqComponent;
