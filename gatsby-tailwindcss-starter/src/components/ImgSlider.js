import Slider from "react-slick";
// import { Link } from "gatsby"
// import logo from "../../assets/media/logo.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react"
import post1 from "../../assets/media/Post.png"
import post2 from "../../assets/media/Post2.png"
import post3 from "../../assets/media/Post3.png"

const images = [
  {
    src: post1,
    alt: "sample image"
  },
  {
    src: post2,
    alt: "sample image"
  },
  {
    src: post3,
    alt: "sample image"
  }
];

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
        {
          images.map((image) => (
            <img src={image.src} alt={image.alt} />
          ))
        }
      </Slider>
    </section>
  )
}

export default ImgSlider
