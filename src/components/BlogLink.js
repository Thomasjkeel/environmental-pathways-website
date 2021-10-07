import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Card, Badge } from "react-bootstrap"

export default props => {
  return (
    <Card className="card-container" as={Link} to={props.to}>
      <Card.Img as={Img} fluid={props.featuredImage} className="h-50" />
      <Card.Body className="pt-3">
        <Card.Title>
          <h4>{props.title}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-1">
          {props.tags.map(tag => (
              <Badge key={tag} pill bg="success" className="px-2 mr-1">
                {tag}
              </Badge>
          ))}
        </Card.Subtitle>
        <Card.Text>{props.excerpt}</Card.Text>
      </Card.Body>
    </Card>
  )
}
