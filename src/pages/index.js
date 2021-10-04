import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image, Form, FormControl } from "react-bootstrap"
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
              fontSize: "5rem",
              color: "black",
            }}
          >
          <span className="rainbow-text">EDI</span>
          <span className="last-name">Committee</span>
        </h1>
        <Form className="blog-filter">
          <FormControl
            className="bg-none search"
            type="text"
            placeholder="Search"
            onChange={console.log('search bar used')}
          />
        </Form>
      </Container>
      <Container className="text-center pt-5 mt-5" fluid>
        <Container className="py-0 my-0">
          <p>
            <i>
                Proposal Website for the {groupName}
            </i>
            {/* <i>
              {occupation} by day,&nbsp;
              {dark ? `Imperial enforcer by night` : `Rebel scum by night`}
            </i> */}
          </p>
        </Container>
        <hr className="my-3 w-25" />
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
