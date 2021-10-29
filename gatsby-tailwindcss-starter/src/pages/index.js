import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import Loader from "../components/Loader"
import ImgSlider from "../components/ImgSlider"
import Spacer from "../components/Spacer"
import classnames from "classnames"
import AboutUs from "../components/AboutUs";
import Products from "../components/Products";
import Services from "../components/Services";
import Certifications from "../components/Certifications";

const LoaderTime = 5000

const IndexPage = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const t = setTimeout(()=> setShowContent(true), LoaderTime)

    return () => clearTimeout(t)
  },[])

  return (
    <Layout>
      <SEO title="Home" />
      <Loader delay={LoaderTime}/>

      <div className={classnames("font-sans transition delay-500 duration-1000", {"filter blur-lg": !showContent, "blur-none": showContent})}>
        <Menu />
        <ImgSlider />
        <Spacer />
        <AboutUs />
        <Spacer />
        {/* <Services /> */}
        {/* <Spacer /> */}
        <Products />
        <Spacer />
        <Certifications />
        <Spacer />
      </div>
    </Layout>
  )
  }
export default IndexPage
