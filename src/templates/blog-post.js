import React from "react"
import { graphql } from "gatsby"
import PostTemplate from "./post-template"
import { Badge } from "react-bootstrap"

const SubTitle = ({ ttr, date, author, tags }) => (
  <div>{tags.map(tag => (
    <Badge key={tag} pill bg="primary" className="px-2 mr-1">
      {tag}
    </Badge>
  ))}
  <h5 className="text-muted mb-5">
    Time to read: {ttr} <small>min</small> | {date} | {author}
  </h5>
  </div>
)

const blogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <PostTemplate
      title={post.frontmatter.title}
      subTitle={
        <SubTitle
          ttr={post.timeToRead}
          date={post.frontmatter.date}
          author={post.frontmatter.author}
          tags={post.frontmatter.tags}
        />
      }
      excerpt={post.excerpt}
      html={post.html}
    />
  )
}

export default blogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        tags
        date(formatString: "DD MMMM, YYYY")
      }
      excerpt
      timeToRead
    }
  }
`
