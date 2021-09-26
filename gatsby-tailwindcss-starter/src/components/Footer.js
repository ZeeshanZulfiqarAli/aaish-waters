import { Link } from "gatsby"
import React, { useState } from "react"
import water from "../../assets/media/water.mp4"

function Footer() {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <footer className="absolute inset-x-0 bottom-0 w-full">
      <video src={water} autoPlay muted loop/>
    </footer>
  )
}

export default Footer
