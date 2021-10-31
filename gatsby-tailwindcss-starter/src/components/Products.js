import React from "react"
import ImgCard from "./ImgCard";
import bottle from "../../assets/media/bottlle1.jpeg"
import handles from "../../assets/media/handles.jpg"
import pump from "../../assets/media/pump.jpg"
import nozzleStand from "../../assets/media/nozzle&stand.jpg"
import manualdispenser from "../../assets/media/mnaualdispenser.jpg"
import gradientVideo from "../../assets/media/grad_compressed.mp4"

const productList = [
  {
    title: "20 ltr bottle",
    imgSrc: bottle,
    imgAlt: "sample img",
    price: 120,
    extraText: "+Rs.700 refundable desposit",
  },
  {
    title: "Handle Pair",
    imgSrc: handles,
    imgAlt: "sample img",
    price: 350,
  },
  {
    title: "Pump",
    imgSrc: pump,
    imgAlt: "sample img",
    // price: 120,
  },
  {
    title: "Nozzle & Stand",
    imgSrc: nozzleStand,
    imgAlt: "sample img",
    price: 450,
  },
  {
    title: "Manual Dispenser",
    imgSrc: manualdispenser,
    imgAlt: "sample img",
    price: 1500,
  }
];

function Products() {
  return (
    <section id="products">
      <h1>Our Products</h1>
      <div className="p-4 relative gap-5 leading-7 flex flex-row flex-wrap justify-between items-center">
        {
          productList.map((product, idx) => (
            <ImgCard {...product} key={idx}/>
          ))
        }
      <video src={gradientVideo} muted autoPlay loop className="filter blur-xl absolute mobile-grad sm:mid-grad" style={{zIndex: -1}}/>
      </div>
    </section>
  )
}

export default Products
