import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isHamburgerClicked, setHamburgerClicked] = useState(false);
  const navbarRef = useRef(null);

  const changeBackgroundColor = () => {
    setChangeColor(window.scrollY > 10);
  };

  const handleToggle = () => {
    setHamburgerClicked(!isHamburgerClicked);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setHamburgerClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  return (
    <div ref={navbarRef}>
      <Navbar
        expand="lg"
        expanded={isHamburgerClicked}
        className={`${
          changeColor && !isHamburgerClicked ? "color-active" : ""
        } ${isHamburgerClicked ? "color-click" : ""} navbar-custom animate__animated animate__fadeInDown`}
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-2 fw-bolder">
            Ngoding.
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id} onClick={() => setHamburgerClicked(false)}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    end
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>

            <div className="text-center mt-3 mt-lg-0">
              <button className="btn btn-outline-danger rounded-1">
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
