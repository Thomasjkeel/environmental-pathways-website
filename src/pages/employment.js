import React, { useState } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, BlogLink } from "../components"
import { SEO, Utils } from "../utils"
import { Container, Form, FormControl, Table, Row, Dropdown } from "react-bootstrap"

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
      const { name, url, summary, strengths, weakeness, rating, category } = post.node
      // standardize query
      const stdQuery = query.toLowerCase()
      return (
        // post.node.excerpt.toLowerCase().includes(stdQuery) ||
        (name && name.toLowerCase().includes(stdQuery)) ||
        (category.toLowerCase().includes(stdQuery))
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
        <i>Here you can...</i>
        <i><b>NOTE TO NERC:</b> Ability to search using tag</i>
        {/* <Row> */}
        <Form>
          <FormControl
            className="bg-none search"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </Form>
        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        {/* </Row> */}
      </Container>
      <Container>
      <Table striped hover>
        <thead>
          <tr>
            <th>Job</th>
            <th>Summary</th>
            <th>Type</th>
            <th>Location</th>
            <th>Category</th>
          </tr>
        </thead>
        {allJobs.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td><a href={listValue.node.url}>{listValue.node.name}</a></td>
              <td>{listValue.node.summary}</td>
              <td>{listValue.node.type}</td>
              <td>{listValue.node.location}</td>
              <td>{listValue.node.category}</td>
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
    allJobListingsCsv {
      edges {
        node {
          name
          url
          summary
          type
          location
          category
        }
      }
    }
  }
`
