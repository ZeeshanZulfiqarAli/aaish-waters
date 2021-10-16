import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/Menu"
import Loader from "../components/Loader"
import ImgSlider from "../components/ImgSlider"
import classnames from "classnames"

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

      <div className={classnames("font-sans filter transition delay-500 duration-1000", {"blur-lg": !showContent, "blur-none": showContent})}>
        <Menu />
        <ImgSlider />
        <div className="h-10 md:h-20"/>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <section id="offers" >
          <h2>Our offers</h2>
        </section>
        <section id="offers" >
          <h2>Our offers</h2>
        </section>
      </div>
    </Layout>
  )
  }
export default IndexPage
