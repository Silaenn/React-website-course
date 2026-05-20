import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isHamburgerClicked, setHamburgerClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navbarRef = useRef(null);

  const changeBackgroundColor = () => {
    setChangeColor(window.scrollY > 10);
  };

  const handleToggle = useCallback(() => {
    if (isHamburgerClicked) {
      // Trigger closing animation dulu
      setIsClosing(true);
      setTimeout(() => {
        setHamburgerClicked(false);
        setIsClosing(false);
      }, 350); // Durasi harus sama dengan CSS transition
    } else {
      setHamburgerClicked(true);
    }
  }, [isHamburgerClicked]);

  const closeMenu = useCallback(() => {
    if (isHamburgerClicked) {
      setIsClosing(true);
      setTimeout(() => {
        setHamburgerClicked(false);
        setIsClosing(false);
      }, 350);
    }
  }, [isHamburgerClicked]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeMenu]);

  useEffect(() => {
    if (isHamburgerClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isHamburgerClicked]);

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    return () => window.removeEventListener("scroll", changeBackgroundColor);
  }, []);

  return (
    <div ref={navbarRef}>
      <div
        className={`navbar-overlay ${isHamburgerClicked ? "active" : ""} ${
          isClosing ? "is-closing" : ""
        }`}
        onClick={closeMenu}
      ></div>
      <Navbar
        expand="xl"
        expanded={isHamburgerClicked}
        className={`${changeColor && !isHamburgerClicked ? "color-active" : ""} ${
          isHamburgerClicked ? "color-click" : ""
        } navbar-custom animate__animated animate__fadeInDown`}
      >
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bolder">
            Ngoding.
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
          />
          {/* Pakai div custom, bukan Navbar.Collapse langsung */}
          <div
            className={`navbar-collapse-custom ${
              isHamburgerClicked ? "is-open" : ""
            } ${isClosing ? "is-closing" : ""}`}
            id="basic-navbar-nav"
          >
            <Nav className="ms-auto">
              {navLinks.map((link) => (
                <div className="nav-link text-center" key={link.id} onClick={closeMenu}>
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
            <div className="text-center mt-3 mt-xl-0 ms-xl-3">
              <button className="btn btn-outline-danger rounded-1">
                Join With Us
              </button>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;