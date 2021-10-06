import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, ProfileLink } from "../components"
import { SEO, Utils } from "../utils"
// import Container from "react-bootstrap/Container"
import { Container, Form, FormControl } from "react-bootstrap"


export default ({ data }) => {
  const allProjects = data.allMarkdownRemark.edges || []
  const allFeaturedImages = data.allFile.edges || []
  const regex = /\/[profiles].*\/|$/
  const featuredImageMap = Utils.getImageMap(allFeaturedImages, regex, true, 3)
  return (
    <PageLayout>
      <SEO title="Profiles" />
      <PageTitle title="Profiles" />
      <Container className="px-5 mb-5 text-center">
        <i><b>NOTE TO NERC:</b> ...</i>
        <Form>
          <FormControl
            className="bg-none search"
            type="text"
            placeholder="Search"
            // onChange={handleChange} // maybe implement a handleChange method
          />
        </Form>
      </Container>
      <Container className="text-left">
        <section>
          {allProjects.map(({ node }) => (
            <div key={node.id} className="p-3">
              <ProfileLink
                to={node.fields.slug}
                featuredImages={featuredImageMap[node.fields.slug]}
                title={node.frontmatter.title}
                tags={node.frontmatter.tags}
                excerpt={node.excerpt}
              />
              {/* <hr /> */}
            </div>
          ))}
        </section>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/profiles/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            description
            tags
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
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativePath: { regex: "/profile/" }
        relativeDirectory: { regex: "/content/profiles/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
