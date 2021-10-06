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

  const allCourses = data.allCoursesCsv.edges || []
  const regex = /\/[blog].*\/|$/

  const handleChange = e => {
    const query = e.target.value

    const filteredData = allCourses.filter(post => {
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
      <SEO title="Education" />
      <PageTitle title="Education Page" />
      <Container className="px-5 mb-5 text-center">
        <i>Here you can...</i>
        <i><b>NOTE TO NERC:</b> Ability to search using tag</i>
      
        <Form>
          <FormControl
            className="bg-none search"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </Form>
      </Container>
      <Container>
      <Table striped hover className="ml-auto mr-auto">
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
        {allCourses.map(( listValue, index ) => {
          return (
            <tr key={index}>
              <td><a href={listValue.node.url}>{listValue.node.course}</a></td>
              <td>{listValue.node.university}</td>
              <td>{listValue.node.summary}</td>
              <td>{listValue.node.strengths}</td>
              <td>{listValue.node.weakeness}</td>
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
    allCoursesCsv {
      edges {
        node {
          course
          url
          university
          summary
          strengths
          weakeness
          category
        }
      }
    }
  }
`
