import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image"

import React from "react"

function ImgSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 425,
        settings: {
          dots: false,
        }
      }
    ]
  };
  return (
    <section className="relative" style={{ left: "calc(100% - 100vw + (100vw - 100% + var(--scrollbar-width)) / 2)", width: 'calc(100vw - var(--scrollbar-width))', }}>
      <Slider {...settings}>
        <StaticImage src="../../assets/media/Post.png" alt="post img" quality={80}/>
        <StaticImage src="../../assets/media/Post2.png" alt="post img" quality={80}/>
        <StaticImage src="../../assets/media/Post3.png" alt="post img" quality={80}/>
      </Slider>
    </section>
  )
}

export default ImgSlider
