import React, { useState, useEffect } from "react"
import water from "../../assets/media/water.mp4"
import logo from "../../assets/media/logo.png"
import classnames from "classnames"

function Loader({ delay }) {
  const [remove, setRemove] = useState(false)

  useEffect(() => {
    const bodyEl = document.querySelector("body");
    bodyEl.classList.add("overflow-hidden");

    const t = setTimeout(()=> {
      setRemove(true);
      bodyEl.classList.remove("overflow-hidden");
    }, delay);

    return () => clearTimeout(t)
  },[])

  return (
    <div className={classnames("fixed left-0 top-0 h-full w-screen z-50 overflow-hidden transition-transform duration-1000",{"transform -translate-y-full": remove})}>
      {/* <div className="object-cover"> */}
        <video className="absolute object-cover h-full w-screen  " src={water} autoPlay muted loop/>
        <div className={classnames("absolute -bottom-1/4 w-screen h-1/2 backdrop-filter backdrop-blur-3xl transition-transform delay-1000", {"transform -translate-y-full": remove})}/>
      {/* </div> */}

      <img src={logo} alt="site logo" className="absolute w-screen -top-14 h-full p-20 sm:p-40 object-scale-down"/>

    </div>
  )
}

export default Loader
