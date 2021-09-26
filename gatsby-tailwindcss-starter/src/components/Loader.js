import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import water from "../../assets/media/water.mp4"
import logo from "../../assets/media/logo.png"
import classnames from "classnames"

function Loader({ delay }) {
  const [remove, setRemove] = useState(false)

  useEffect(() => {
    const t = setTimeout(()=> setRemove(true), delay)

    return () => clearTimeout(t)
  },[])

  return (
    <div className={classnames("fixed left-0 top-0 h-full w-full z-30 transition-transform duration-1000",{"transform -translate-y-full": remove})}>
      {/* <div className="object-cover"> */}
        <video className="absolute object-cover h-full w-full  " src={water} autoPlay muted loop/>
        <div className={classnames("absolute -bottom-20 w-full h-40 backdrop-filter backdrop-blur-lg transition-transform delay-1000", {"transform -translate-y-full": remove})}/>
      {/* </div> */}

      <img src={logo} alt="site logo" className="absolute w-full -top-14 h-full p-20 sm:p-40 object-scale-down"/>

    </div>
  )
}

export default Loader
