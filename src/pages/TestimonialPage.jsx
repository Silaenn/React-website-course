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
          <Row className="row-cols-lg-3 row-cols-1">
            {testimonial.map((swiper) => {
              return (
                <Col key={swiper.id} className="mb-5">
                  <p className="ps-1">{swiper.desc}</p>
                  <div className="people desc shadow-sm pb-3 ps-2">
                    <img src={swiper.image} alt="" />
                    <div>
                      <h5 className="mb-1">{swiper.name}</h5>
                      <p className="m-0 fw-bold ">{swiper.skill}</p>
                    </div>
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
