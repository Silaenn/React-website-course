import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Semua Testimonial
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, illum!
              </p>
            </Col>
          </Row>
          <Row className="mt-5 row-cols-lg-3 row-cols-1">
            {testimonial.map((swiper) => {
              return (
                <Col key={swiper.id} className="mb-5">
                  <div className="testimonial-card shadow-sm p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img src={swiper.image} alt={swiper.name} className="me-3" />
                      <div>
                        <h5 className="mb-0 fw-bold">{swiper.name}</h5>
                        <p className="m-0 text-muted small">{swiper.skill}</p>
                      </div>
                    </div>
                    <p className="desc m-0">{swiper.desc}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default TestimonialPage;
