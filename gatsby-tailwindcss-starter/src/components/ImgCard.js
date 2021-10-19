import React from "react"
import Spacer from "../components/Spacer"

function ImgCard({ imgSrc, imgAlt, title, price }) {

  return (
    <div className="rounded-lg m-auto bg-white bg-opacity-20 hover:bg-opacity-70 blur-xl w-28 p-1 hover:bg-gray-100 sm:w-64 sm:p-8" >
        <img className="w-64 rounded-lg" src={imgSrc} alt={imgAlt}/>
        <h3 className="mt-4 text-center text-base sm:text-2xl">{title}</h3>
        <h2 className="text-center font-semibold text-xl sm:text-3xl">Rs.{price}</h2>
    </div>
  )
}

export default ImgCard
