import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    readingList,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Us" />
      <PageTitle title="About Us" />
      <Container>
        <Image
          rounded
          width="140"
          height="140"
          src={`../../icons/leaky-pipeline-cropped.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! We are the <b>{`${author}`}</b>.
            &nbsp;
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget augue commodo,
            rutrum enim vel, varius lorem. Ut nec sem metus. Cras laoreet, metus consectetur mollis consectetur,
            dui ante tempus ante, eget luctus felis odio sed leo. Sed tempus, ex ultrices porttitor fringilla,
            enim tellus dictum elit, quis viverra odio orci eu erat. Maecenas auctor ultrices ornare. Mauris consequat a urna in cursus.
            Mauris hendrerit, sem sit amet dapibus ultrices, lacus quam malesuada lorem, interdum lacinia tortor
            augue maximus mauris. Aliquam ultrices, lectus ac semper dictum, nisi eros sollicitudin purus.
          </p>
          <p className="i-5">
            Check out our <Link to="/profiles">profiles</Link> to see ...! Or check out our <Link to="/employment">bulletin board</Link> to see
            what opportunities are out there! Finally, check out our review of <Link to="/existing-resources/">existing resources</Link>.
          </p>
          <p className="i-5">
            Check out how to use this website <Link to="/">here</Link>
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  We are <b>currently looking for new profiles</b>! If you
                  want to have your profile listed on this, please get
                  in&nbsp;
                  <a
                    href="mailto:phdsforedi@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here are a couple of books from my reading list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of shows from my watch list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
          <hr />
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
