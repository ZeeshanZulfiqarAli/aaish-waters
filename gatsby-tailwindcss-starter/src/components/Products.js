import React from "react"
import ImgCard from "./ImgCard";
import bottle from "../../assets/media/bottlle1.jpeg"

const productList = [
  {
    title: "19 ltr bottle",
    imgSrc: bottle,
    imgAlt: "sample img",
  },
  {
    title: "19 ltr bottle",
    imgSrc: bottle,
    imgAlt: "sample img",
  },
  {
    title: "19 ltr bottle",
    imgSrc: bottle,
    imgAlt: "sample img",
  }
]
function Products() {

  return (
    <section id="products">
      <h1>Our Products</h1>
      <div className="p-4 leading-7 flex flex-row flex-wrap justify-between items-center">
        {
          productList.map(product => (
            <ImgCard imgSrc={product.imgSrc} imgAlt={product.imgAlt} title={product.title}/>
          ))
        }
      </div>
    </section>
  )
}

export default Products
