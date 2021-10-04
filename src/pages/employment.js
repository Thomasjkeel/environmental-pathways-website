import React, { useState } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, BlogLink } from "../components"
import { SEO, Utils } from "../utils"
import { Container, Form, FormControl, Table } from "react-bootstrap"

export default ({ data }) => {
  const [state, setState] = useState({
    filteredData: [],
    query: "",
  })

  const allJobs = data.allJobListingsCsv.edges || []
  const regex = /\/[blog].*\/|$/

  const handleChange = e => {
    const query = e.target.value

    const filteredData = allJobs.filter(post => {
      // query will run on the following fields
      const { description, title, tags, author } = post.node.frontmatter
      // standardize query
      const stdQuery = query.toLowerCase()
      return (
        post.node.excerpt.toLowerCase().includes(stdQuery) ||
        (description && description.toLowerCase().includes(stdQuery)) ||
        title.toLowerCase().includes(stdQuery) ||
        author.toLowerCase().includes(stdQuery) ||
        (tags && tags.join("").toLowerCase().includes(stdQuery))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  // const filteredPosts = query !== "" ? filteredData : allPosts

  return (
    <PageLayout>
      <SEO title="Employment" />
      <PageTitle title="Employment Page" />
      <Container className="px-5 mb-5 text-center">
        <Form>
          <FormControl
            className="bg-none search"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </Form>
      </Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Job listing (URL)</th>
            <th>Summary</th>
            <th>Strength(s)</th>
            <th>Weakness(es)</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        {allJobs.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td><a href={listValue.node.url}>{listValue.node.name}</a></td>
              <td>{listValue.node.summary}</td>
              <td>{listValue.node.strengths}</td>
              <td>{listValue.node.weakeness}</td>
              <td>{listValue.node.rating}</td>
              <td>{listValue.node.category}</td>
            </tr>
          );
        })}
        {/* <tbody> */}
          {/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
        {/* </tbody> */}
      </Table>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allJobListingsCsv {
      edges {
        node {
          name
          url
          summary
          strengths
          weakeness
          rating
          category
        }
      }
    }
  }
`
