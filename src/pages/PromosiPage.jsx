import FaqComponent from "../components/FaqComponent";
import { promosi } from "../data/index";
import { Container, Row, Col } from "react-bootstrap";

const PromosiPage = () => {
  return (
    <div className="promosi-page">
      <div className="promosi min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Semua Promosi
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Berikut beberapa kelas yang sedang promosi
              </p>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4 g-md-5 mb-5">
            {promosi.map((promo) => {
              // Menghitung diskon
              const diskon = (promo.discount / 100) * promo.price;

              // Menghitung harga setelah diskon
              const hargaSetelahDiskon = promo.price - diskon;
              return (
                <Col
                  key={promo.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={promo.delay}
                >
                  <div className="shadow rounded h-100">
                    <img
                      src={promo.image}
                      alt="promosi.com"
                      className="w-100 mb-4 rounded-top"
                    />
                    <h5 className="mb-3 px-3">{promo.title}</h5>
                    <p className="diskon mb-4 text-danger fw-bold px-3 mt-0">
                      Diskon : {promo.discount}%
                    </p>

                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <div>
                        <p
                          className="harga m-0 text-primary fw-bold"
                          style={{ textDecoration: "line-through" }}
                        >
                          Rp. {promo.price.toLocaleString()}
                        </p>
                        <p className="m-0 text-success fw-bold">
                          Rp. {hargaSetelahDiskon.toLocaleString()}
                        </p>
                      </div>

                      <button className="btn btn-danger rounded-1">
                        {promo.buy}
                      </button>
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

export default PromosiPage;
