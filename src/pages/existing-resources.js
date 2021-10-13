import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle } from "../components"
import { SEO } from "../utils"
// import Container from "react-bootstrap/Container"
import { Container, Table } from "react-bootstrap"


export default ({ data }) => {
  const existingResources = data.allExistingResourcesCsv.edges || []
  return (
    <PageLayout>
      <SEO title="Existing Resources" />
      <PageTitle title="Existing Resources">
        &nbsp;
      </PageTitle> 
      <Container>
      <Table striped hover className="ml-auto mr-auto sm text-left">
        <thead>
          <tr>
            <th>Link:</th>
            <th>Summary:</th>
            <th>Strength(s):</th>
            <th>Weakness(es):</th>
            <th>Rating Content (/5) Access (/5) Total (/10):</th>
          </tr>
        </thead>
        {existingResources.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td><a className="first-name" href={listValue.node.url}>{listValue.node.name}</a></td>
              <td>{listValue.node.summary}</td>
              <td>{listValue.node.strengths}</td>
              <td>{listValue.node.weaknesses}</td>
              <td>{listValue.node.rating}</td>
            </tr>
          );
        })}
      </Table>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allExistingResourcesCsv {
      edges {
        node {
          name
          url
          summary
          strengths
          weaknesses
          rating
        }
      }
    }
  }
`
