import React from "react"
import { PageLayout, PageTitle } from "../components"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"



import SEO from "../utils/seo"

const postTemplate = ({ title, excerpt, html, subTitle, image }) => (
  <PageLayout>
    <SEO title={title} description={excerpt} />
    <Container className="text-center" fluid>
      <Img fluid={image} className="m-auto profile-main-pics" />
      <PageTitle title={title} />
      {subTitle}
      <Container className="text-justify">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Container>
  </PageLayout>
)

export default postTemplate;