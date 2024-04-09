import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  let navigate = useNavigate();
  const [changeColor, setChangeColor] = useState(false);

  const [isHamburgerClicked, setHamburgerClicked] = useState(false);
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const handleToggle = () => {
    setHamburgerClicked(!isHamburgerClicked);
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);

    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);
  return (
    <div>
      <Navbar
        expand="lg"
        className={`${
          changeColor && !isHamburgerClicked ? "color-active" : ""
        } ${isHamburgerClicked ? "color-click" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            Ngoding.
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                return (
                  <div className="nav-link" key={link.id}>
                    <NavLink
                      to={link.path}
                      className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                      }
                      end
                    >
                      {link.text}
                    </NavLink>
                  </div>
                );
              })}
            </Nav>

            <div className="text-center">
              <button
                className="btn btn-outline-danger rounded-1"
                onClick={() => navigate("/login")}
              >
                Join With Us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
