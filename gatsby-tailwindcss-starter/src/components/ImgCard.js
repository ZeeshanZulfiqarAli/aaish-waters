import React from "react"
import Spacer from "../components/Spacer"

function ImgCard({ imgSrc, imgAlt, title }) {
  console.log("imgSrc", imgSrc)
  return (
    <div className="border-8 w-64 border-white hover:border-gray-200 hover:bg-gray-100" >
        <img className="w-64" src={imgSrc} alt={imgAlt}/>
        <h3 className="mt-4 text-center">{title}</h3>
    </div>
  )
}

export default ImgCard
