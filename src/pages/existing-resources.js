import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
// import Container from "react-bootstrap/Container"
import { Container, Table, Row, Col } from "react-bootstrap"


export default ({ data }) => {
  const existingResources = data.allExistingResourcesCsv.edges || []
  return (
    <PageLayout>
      <SEO title="Existing Resouces" />
      <PageTitle title="Existing Resouces">
        &nbsp;
      </PageTitle> 
      <Container>
      </Container>
      <Container className="mt-5 pt-3" fluid>
        Hello
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allExistingResourcesCsv {
      edges {
        node {
          course
          url
          location
          category
        }
      }
    }
  }
`
