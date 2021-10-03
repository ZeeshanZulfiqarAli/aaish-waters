import { Link } from "gatsby"
import logo from "../../assets/media/logo.png"

import React from "react"

function Menu() {

  return (
    <nav className="h-24 flex my-10 place-content-between">
        <img src={logo} className="h-full"/>
        <div className=" self-center">
          <Link to={"#cert"} className="mx-2 border-b-4 border-indigo-600 border-opacity-0 hover:border-opacity-100" activeClassName="border-b-4" activeStyle={{ color: "red" }}>Certifications</Link>
          <Link to={"#serv"} className="mx-2 border-b-4 border-indigo-600 border-opacity-0 hover:border-opacity-100" activeClassName="border-b-4">Services</Link>
        </div>
    </nav>
  )
}

export default Menu
