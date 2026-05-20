import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru, dataSwiper } from "../data/index";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import FaqComponent from "../components/FaqComponent";

const Home = () => {
  let navigate = useNavigate();

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setFullscreenImage(imageSrc);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
        <Container>
          <Row className="header-box d-flex align-items-center justify-content-between pt-lg-5">
            <Col lg="6" className="animate__animated animate__fadeInUp">
              <h1 className="mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
                Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami!{" "}
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
                Selamat datang di{" "}
                <span style={{ fontWeight: "bold" }}>Ngoding.</span> salah satu
                tempat kursus IT yang canggih dan di akui sebagai saluran bakat
                anak indonesia
              </p>
              <div className="animate__animated animate__fadeInUp" style={{ animationDelay: "0.6s" }}>
                <button
                  className="btn btn-danger btn-lg rounded-1 me-2 mb-2"
                  onClick={() => navigate("/kelas")}
                >
                  Lihat Kelas
                </button>
                <button
                  className="btn btn-outline-danger btn-lg rounded-1 mb-2"
                  onClick={() => navigate("/promosi")}
                >
                  Lihat Promo
                </button>
              </div>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 text-center hero-badges animate__animated animate__fadeInUp">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: "0.5s" }}
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold" data-aos="fade-up" data-aos-once="true">Kelas Terbaru</h1>
              <p className="text-center" data-aos="fade-up" data-aos-once="true" data-aos-delay="200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4 gy-5 mb-5">
            {kelasTerbaru.map((kelas) => {
              return (
                <Col
                  key={kelas.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                  data-aos-once="true"
                  data-aos-offset="0"
                >
                  <div className="shadow rounded bg-white h-100">
                    <img
                      style={{ cursor: "pointer" }}
                      src={kelas.image}
                      alt="unsplash.com"
                      className="w-100 mb-5 rounded-top"
                      onClick={() => handleImageClick(kelas.image)}
                    />
                    <div className="star mb-2 px-3">
                      <i className={kelas.star1}></i>
                      <i className={kelas.star2}></i>
                      <i className={kelas.star3}></i>
                      <i className={kelas.star4}></i>
                      <i className={kelas.star5}></i>
                    </div>
                    <h5 className="mb-5 px-3">{kelas.title}</h5>
                    <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                      <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                      <button className="btn btn-danger rounded-1">
                        {kelas.buy}
                      </button>
                    </div>
                  </div>
                </Col>
              );
            })}
            {fullscreenImage && (
              <div
                className="fullscreen-overlay"
                onClick={handleCloseFullscreen}
              >
                <div className="fullscreen-image-container">
                  <img
                    src={fullscreenImage}
                    style={{ width: "100%", height: "100%" }}
                    alt="fullscreen"
                    className="fullscreen-image"
                  />
                </div>
              </div>
            )}
          </Row>
          <Row>
            <Col className="text-center mt-5">
              <button
              className="btn btn-success rounded-5 btn-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              onClick={() => navigate("/kelas")}
              >
              Lihat Semua Kelas
              <i className="fa-solid fa-chevron-right ms-3"></i>
              </button>
              </Col>
              </Row>
              </Container>
              </div>
              <div className="testimonial py-5">
              <Container>
              <Row>
              <Col>
              <h1 className="text-center fw-bold my-2" data-aos="fade-up" data-aos-once="true">Testimonial</h1>
              </Col>
              </Row>
          <Row data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                992: { slidesPerView: 3, spaceBetween: 50 },
                1200: { slidesPerView: 3, spaceBetween: 50 },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((swiper) => {
                return (
                  <SwiperSlide key={swiper.id}>
                    <p className="desc">{swiper.desc}</p>
                    <div className="people pb-3 ps-2">
                      <img src={swiper.image} alt="" />
                      <div>
                        <h5 className="mb-1">{swiper.name}</h5>
                        <p className="m-0 fw-bold">{swiper.skill}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      {/* Section FAQ */}
      <FaqComponent />
    </div>
  );
};

export default Home;
