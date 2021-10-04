import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
        <FontAwesomeIcon
          icon={["fab", `${dark ? "empire" : "rebel"}`]}
          className={`brand-icon ${dark ? "empire" : "rebel"}`}
          title="Home"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          <Nav.Link className="ml-4" as={Link} to="/employment" title="Employment">
            Employment
          </Nav.Link>
          <Nav.Link className="ml-4" as={Link} to="/education" title="Education">
            Education
          </Nav.Link>
          <Nav.Link className="ml-4" as={Link} to="/profiles" title="Profiles">
            Profiles
          </Nav.Link>
          <Nav.Link className="ml-4" as={Link} to="/about" title="About">
            About
          </Nav.Link>
          <Form className="ml-4 my-auto">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              title="Toggle Theme"
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
