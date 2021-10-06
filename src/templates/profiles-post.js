import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"
import Badge from "react-bootstrap/Badge"


const SubTitle = ({ tags }) => (
  <div className="mb-5">
    {tags.map(tag => (
      <Badge key={tag} pill bg="dark" className="px-3 mr-1">
        <h5 className="text-white my-0">{tag}</h5>
      </Badge>
    ))}
  </div>
)

const profilePost = ({ data }) => {
  const post = data.markdownRemark
  const allImages = data.allFile.edges
  var imageToUse
  for (var image in allImages) {
    if (allImages[image].node.relativePath === post.frontmatter.profilepic) {
      imageToUse = allImages[image].node.childImageSharp.fluid
      break
    }
  };
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={<SubTitle tags={post.frontmatter.tags} />}
      excerpt={post.excerpt}
      html={post.html}
      image={imageToUse}
    />
  )
}

export default profilePost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        profilepic
      }
      excerpt
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
