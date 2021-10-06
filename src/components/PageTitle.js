import React from "react"
// import Jumbotron  from "react-bootstrap/Jumbotron"

const pageTitle = ({ title, children }) => (
  <div className="bg-none pt-4 mb-5 pb-0">
    <h1>
      {title}&nbsp;<span>{children}</span>&nbsp;
    </h1>
  </div>
)

export default pageTitle;
