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

  const allFeaturedImages = data.allFile.edges || []
  const allPosts = data.allMarkdownRemark.edges || []
  const allJobs = data.allJobListingsCsv.edges || []
  console.log(allJobs) //TODO
  const regex = /\/[blog].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex)

  const handleChange = e => {
    const query = e.target.value

    const filteredData = allPosts.filter(post => {
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
  const filteredPosts = query !== "" ? filteredData : allPosts
  
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
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Container
        fluid
        className="p-3 w-auto text-left d-flex flex-wrap justify-content-center"
      >
        {filteredPosts.map(({ node }) => (
          <div key={node.id} className="p-3">
            <BlogLink
              to={node.fields.slug}
              featuredImage={featuredImageMap[node.fields.slug]}
              title={node.frontmatter.title}
              subtitle={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          </div>
        ))}
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allJobListingsCsv {
      edges {
        node {
          url
          summary
          strengths
          weakeness
          rating
          category
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            tags
            author
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allFile(
      filter: {
        extension: { eq: "jpg" }
        relativePath: { regex: "/feature/" }
        relativeDirectory: { regex: "/content/blog/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
