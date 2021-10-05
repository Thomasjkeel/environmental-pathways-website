import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Container, Badge, Col, Row, Card } from "react-bootstrap"

export default ({ excerpt, featuredImages, tags, title, to }) => {
  return (
    <Card>
    <Container className="text-center">
      <Link to={to} style={{ textDecoration: "none" }}>
        <Row>
          {featuredImages &&
            featuredImages.map(image => (
              <Col key={image.src}>
                <Img fluid={image} className="m-auto profile-pics" />
              </Col>
            ))}
        </Row>
        <h2 className="mt-5">{title}</h2>
      </Link>
      {tags.map(tag => (
        <Badge key={tag} pill variant="dark" className="px-2 mr-1">
          {tag}
        </Badge>
      ))}
      <p className="pt-3 text-justify">{excerpt}</p>
    </Container>
    <p>
      <a className="btn btn-secondary" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">+</a>
    </p>
    </Card>
  )
}
