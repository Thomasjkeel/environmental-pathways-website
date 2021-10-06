import React from "react"
import { PageLayout, PageTitle } from "../components"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"



import SEO from "../utils/seo"

export default ({ title, excerpt, html, subTitle, image }) => (
  <PageLayout>
    <SEO title={title} description={excerpt} />
    <Container className="text-center" fluid>
      {/* <Img fluid={image} className="m-auto profile-pics" /> */}
      {/* <Col key={image.src}> */}
      <Img fluid={image} className="m-auto profile-pics" />
      {/* </Col> */}
      {/* <img src={image}></img> */}
      <PageTitle title={title} />
      {subTitle}
      <Container className="text-justify">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Container>
  </PageLayout>
)