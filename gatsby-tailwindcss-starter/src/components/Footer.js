import React from "react"
import Spacer from "../components/Spacer"

function Footer() {

  return (
    <footer className="relative bottom-0 h-80 w-full">
      <div className="absolute inset-x-0 h-full animate-footer-gradient-shift mobile-footer lg:mid-footer" style={{
        background: 'linear-gradient(270deg, #ffd7ec, #31b8d7, #a1eee4, #a1d9ee)',
        backgroundSize: '800% 800%',
      }}>
        <div className="h-full" style={{
          margin: `0 auto`,
          maxWidth: 1024,
          padding: `0 1.0875rem 1.45rem`,
        }}>
          <Spacer />
          <h2 >Contact Info</h2>
          <span>Address: </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          <br />
          <span>Phone: </span><a href="tel:+923357596907">+92 335 7596907</a>
        </div>
        <div className="relative bg-gray-700 font-mono text-center text-gray-300 bottom-0 w-full p-4">
          Made with &#x1F499; by <a href="" className="text-current underline hover:text-gray-100">Zeeshan</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
