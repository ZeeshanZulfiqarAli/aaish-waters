/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import SocialButton from "../components/SocialButton";
import { Helmet } from "react-helmet";

// import Header from "./Header"
import Footer from "./Footer"

import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap" rel="stylesheet"></link>
      </Helmet>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <SocialButton />
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
