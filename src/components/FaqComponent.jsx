import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";

const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold" data-aos="fade-up" data-aos-once="true">
              Pertanyaan Yang Sering Ditanyakan
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-lg-2 g-4 pt-5">
          {faq.map((data, index) => {
            return (
              <Col key={data.id} data-aos="fade-up" data-aos-delay={(index % 2) * 100} data-aos-once="true" data-aos-offset="0">
                <Accordion className="shadow-sm border-0">
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
