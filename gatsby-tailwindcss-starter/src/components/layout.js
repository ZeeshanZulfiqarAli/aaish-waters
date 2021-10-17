/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo, useEffect } from "react"
import PropTypes from "prop-types"
import SocialButton from "../components/SocialButton";
import { Helmet } from "react-helmet";

// import Header from "./Header"
import Footer from "./Footer"

import "./layout.css"

function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}

const Layout = ({ children }) => {
  const scrollbarWidth = useMemo(() => getScrollbarWidth());

  useEffect(() => {
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  });

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Helmet>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1024,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main className="h-full">{children}</main>
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
