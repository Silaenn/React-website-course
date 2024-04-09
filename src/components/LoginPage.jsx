import { Container, Row, Col } from "react-bootstrap";
import user from "../assets/img/icon/person.png";
import email from "../assets/img/icon/email.png";
import password from "../assets/img/icon/password.png";
import { useState } from "react";

const LoginPage = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="page">
      <Container className="py-5">
        <Row className="pt-lg-0 pt-0">
          <Col className="d-flex justify-content-center align-items-center animate__animated animate__fadeInUp animate__delay-1s">
            <div className="container-login ">
              <div className="header">
                <h2 className="sign">{action}</h2>
                <div className="underline"></div>
              </div>
              <div className="inputs">
                {action === "Login" ? (
                  <div></div>
                ) : (
                  <div className="input">
                    <img src={user} alt="" />
                    <input type="text" placeholder="Name" />
                  </div>
                )}
                <div className="input">
                  <img src={email} alt="" />
                  <input type="email" placeholder="Email" />
                </div>{" "}
                <div className="input">
                  <img src={password} alt="" />
                  <input type="password" placeholder="Password" />
                </div>
              </div>
              {action === "Sign Up" ? (
                <div></div>
              ) : (
                <div className="forgot-password">
                  Lost Password? <span>Click Here!</span>
                </div>
              )}
              <div className="submit-container">
                <div
                  className={action === "Login" ? "submit gray" : "submit"}
                  onClick={() => {
                    setAction("Sign Up");
                  }}
                >
                  Sign Up
                </div>
                <div
                  className={action === "Sign Up" ? "submit gray" : "submit"}
                  onClick={() => {
                    setAction("Login");
                  }}
                >
                  Login
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
