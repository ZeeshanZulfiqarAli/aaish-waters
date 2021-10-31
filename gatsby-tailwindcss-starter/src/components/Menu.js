import { Link } from "gatsby"
import logo from "../../assets/media/logo.png"
import classnames from "classnames"
import Spacer from "../components/Spacer"

import React, { useState, useMemo, useRef } from "react"

const menuItems = [
  {
    title: "Certifications",
    slug: "#certifications",
  },
  // {
  //   title: "Services",
  //   slug: "#services",
  // },
  {
    title: "About Us",
    slug: "#about",
  },
  {
    title: "Products",
    slug: "#products",
  },
]
function Menu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuButton = useRef(null);

  const handleMobileMenuToggle = () => {
    menuButton.current.setAttribute('aria-expanded', !showMobileMenu);
    const bodyEl = document.querySelector("body");

    if (!showMobileMenu) {
      bodyEl.classList.add("overflow-hidden");
    }
    else {
      bodyEl.classList.remove("overflow-hidden");
    }
    setShowMobileMenu(prevState  => !prevState);

  }

  const mobileRadius = useMemo(() => {
    if (typeof window === 'undefined') return 0;
    const width = window.innerWidth, height = window.innerHeight;
    const radius = Math.round(0.33 * Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)));
    return radius;
  })

  return (
    <nav className="h-10 md:h-24 my-10">
      <div className="h-10 md:h-24 my-10 flex place-content-between">
        <img src={logo} className="px-4 h-full"/>
        <div className="md:hidden" >
          <button className={classnames("menu h-1/2 w-1/2", {"opened": showMobileMenu})} ref={menuButton} onClick={handleMobileMenuToggle} aria-label="Main Menu">
            <svg style={{zIndex: 9999}} width="50" height="50" viewBox="0 0 100 100">
              <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path className="line line2" d="M 20,50 H 80" />
              <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </button>
        </div>

        <div className="self-center hidden md:block">
          {
            menuItems.map(item => (
              <Link to={item.slug} className="mx-2 border-b-4 border-indigo-600 border-opacity-0 hover:border-opacity-100" activeClassName="border-b-4">{item.title}</Link>
            ))
          }
        </div>
      </div>
      <div className={classnames("md:hidden", {"block": showMobileMenu, "hidden": !showMobileMenu})}>
        <div className="fixed left-0 top-0 h-screen w-screen z-50">
          <svg id="mobile-menu-background" width="100vw" height="100vh" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur stdDeviation={mobileRadius*0.45} result="effect1_foregroundBlur"></feGaussianBlur>
                </filter>
            </defs>
            <rect width="100vw" height="100vh" fill="#6600FF"></rect>
            <g filter="url(#blur1)">
                <circle cx="365" cy="268" fill="#00CC99" r={mobileRadius}></circle>
                <circle cx="2" cy="713" fill="#6600FF" r={mobileRadius}></circle>
                <circle cx="302" cy="437" fill="#00CC99" r={mobileRadius}></circle>
                <circle cx="213" cy="578" fill="#00CC99" r={mobileRadius}></circle>
                <circle cx="265" cy="732" fill="#6600FF" r={mobileRadius}></circle>
                <circle cx="203" cy="252" fill="#00CC99" r={mobileRadius}></circle>
            </g>
          </svg>
          <div className="absolute top-36 flex flex-col gap-7 w-full items-center">
            <Spacer />
            {
              menuItems.map(item => (
                <Link onClick={handleMobileMenuToggle} to={item.slug} className="mx-2 text-4xl text-white  border-b-4 border-white-600 border-opacity-0 hover:border-opacity-100" activeClassName="border-b-4">{item.title}</Link>
              ))
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
