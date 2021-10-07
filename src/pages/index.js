import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image, FormControl, InputGroup, Button, ToggleButton, ToggleButtonGroup, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { groupName } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="px-5 mb-5 text-center">
      <Image
          width="150"
          height="150"
          fluid
          src={dark ? `../../icons/darth-vader.png` : `../../icons/leaky-pipeline-cropped.png`}
          alt={dark ? "Darth Vader" : "R2-D2"}
        />
        <h1
            style={{
              fontSize: "4rem",
              color: "black",
            }}
          >
          {/* <span className="last-name">NERC </span> */}
          <span className="first-name">Environmental </span>
          <span className="last-name">Pathways</span>
        </h1>
        <i>Find your pathway into the Environmental Sciences</i>
          <InputGroup className="mb-3 blog-filter">
            <FormControl
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
            />
            <Button variant="outline-secondary" id="button-addon1">
              Find
            </Button>
          </InputGroup>
      </Container>
      {/* <Container> */}
      {/* <Container className="p-1 text-center"> */}
      <div className="text-center">
        {/* Move to  a component */}
        <Row className="pl-4 pr-4">
          <Col>
            <p  style={{fontSize: "1.7rem"}} className="text-secondary">What are you looking for?</p>
          </Col>
          <Col>
            <p  style={{fontSize: "1.7rem"}} className="text-secondary">What is your education level?</p>
          </Col>
        </Row>
        <Row  className="pl-4 pr-4">
          <Col>
            <ToggleButtonGroup type="checkbox" name="options">
                <ToggleButton variant="outline-primary" id="tbg-check-1" value={1}>
                  Find job opportunities
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="tbg-check-2" value={2}>
                  Find volunteering opportunites
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="tbg-check-3" value={3}>
                  Find courses
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="tbg-check-4" value={4}>
                  Other
                </ToggleButton>
              </ToggleButtonGroup>
          </Col>
          <Col>
            <ToggleButtonGroup type="checkbox" name="options">
                <ToggleButton variant="outline-primary" id="rbg-check-1" value={1}>
                  Post-16
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="rbg-check-2" value={2}>
                  A-levels
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="rbg-check-3" value={3}>
                  Undergraduate
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="rbg-check-4" value={4}>
                  Postgraduate
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="rbg-check-5" value={5}>
                  Other
                </ToggleButton>
              </ToggleButtonGroup>
          </Col>
          </Row>
        <Row className="pl-4 pr-4">
          <Col>
            <p  style={{fontSize: "1.7rem"}} className="text-secondary">Example Question</p>
          </Col>
          <Col>
            <p  style={{fontSize: "1.7rem"}} className="text-secondary">Why are you here?</p>
          </Col>
        </Row>
        <Row  className="pl-4 pr-4">
          <Col>
            <ToggleButtonGroup type="radio" name="options">
                <ToggleButton variant="outline-secondary" id="sbg-radio-1" value={1}>
                  Yes
                </ToggleButton>
                <ToggleButton variant="outline-secondary" id="sbg-radio-2" value={2}>
                  No
                </ToggleButton>
              </ToggleButtonGroup>
          </Col>
          <Col>
            <ToggleButtonGroup type="checkbox" name="options">
                <ToggleButton variant="outline-primary" id="zbg-check-1" value={1}>
                  Find a mentor
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="zbg-check-2" value={2}>
                  Find a role model
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="zbg-check-3" value={3}>
                  Get advice
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="zbg-check-4" value={4}>
                  Other
                </ToggleButton>
              </ToggleButtonGroup>
          </Col>
          </Row>
        </div>
      <Container className="text-center pt-5 mt-5" fluid>
        <Container className="py-0 my-0">
        <hr className="my-3 w-100" />
          <p>
            <i>
                Proposal website from the {groupName}
            </i>
            {/* <i>
              {occupation} by day,&nbsp;
              {dark ? `Imperial enforcer by night` : `Rebel scum by night`}
            </i> */}
          </p>
         
        </Container>
        
        <div className="d-md-inline-flex icons-container">
          <a
              href="https://twitter.com/PhDs_For_EDI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "twitter"]}
                className="icons twitter"
                title="Twitter"
              />
            </a>
          <a
            href="mailto:phdsforedi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="https://eepurl.us7.list-manage.com/subscribe?u=0d3934cc264d823faa488de17&id=4f343219da" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Sign up to the Leaky Pipeline Newsletter"
            />
          </a>
        </div>
      </Container>
    </PageLayout>
  )
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        groupName
      }
    }
  }
`
