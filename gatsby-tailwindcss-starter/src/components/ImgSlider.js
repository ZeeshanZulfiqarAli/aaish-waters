import Slider from "react-slick";
import { Link } from "gatsby"
import logo from "../../assets/media/logo.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react"

const images = [
  {
    src: "https://culligan.com.pk/wp-content/uploads/2021/06/8.jpg",
    alt: "sample image"
  },
  {
    src: "https://culligan.com.pk/wp-content/uploads/2021/06/4.jpg",
    alt: "sample image"
  },
  {
    src: "https://culligan.com.pk/wp-content/uploads/2021/06/1.jpg",
    alt: "sample image"
  },
  {
    src: "https://culligan.com.pk/wp-content/uploads/2021/06/2.jpg",
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
    autoplaySpeed: 5000,
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
