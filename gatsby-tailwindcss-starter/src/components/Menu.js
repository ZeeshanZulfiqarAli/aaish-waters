import { Link } from "gatsby"
import logo from "../../assets/media/logo.png"

import React from "react"

function Menu() {

  return (
    <nav className="h-24 flex my-10 place-content-between">
        <img src={logo} className="h-full"/>
        <div className=" self-center">
          <Link to={"#certifications"} className="mx-2 border-b-4 border-indigo-600 border-opacity-0 hover:border-opacity-100" activeClassName="border-b-4" activeStyle={{ color: "red" }}>Certifications</Link>
          <Link to={"#services"} className="mx-2 border-b-4 border-indigo-600 border-opacity-0 hover:border-opacity-100" activeClassName="border-b-4">Services</Link>
          <Link to={"#about"} className="mx-2 border-b-4 border-indigo-600 border-opacity-0 hover:border-opacity-100" activeClassName="border-b-4">About Us</Link>
          <Link to={"#products"} className="mx-2 border-b-4 border-indigo-600 border-opacity-0 hover:border-opacity-100" activeClassName="border-b-4">Products</Link>
        </div>
    </nav>
  )
}

export default Menu
