import React from "react"
import Spacer from "../components/Spacer"

function ImgCard({ imgSrc, imgAlt, title, price }) {

  return (
    <div className="rounded-lg bg-white bg-opacity-20 hover:bg-opacity-70 blur-xl w-64 p-8 hover:bg-gray-100" >
        <img className="w-64 rounded-lg" src={imgSrc} alt={imgAlt}/>
        <h3 className="mt-4 text-center">{title}</h3>
        <h2 className="text-center font-semibold">Rs.{price}</h2>
    </div>
  )
}

export default ImgCard
