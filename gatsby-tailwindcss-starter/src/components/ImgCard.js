import React from "react"
import Spacer from "../components/Spacer"

function ImgCard({ imgSrc, imgAlt, title, price }) {
  console.log("imgSrc", imgSrc)
  return (
    <div className="border-8 rounded-lg blur-md w-64 border-white hover:border-gray-200 hover:bg-gray-100" >
        <img className="w-64 rounded-lg" src={imgSrc} alt={imgAlt}/>
        <h3 className="mt-4 text-center">{title}</h3>
        <h2 className="text-center font-semibold">Rs.{price}</h2>

    </div>
  )
}

export default ImgCard
