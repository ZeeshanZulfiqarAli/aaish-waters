import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Certifications = () => {

  return (
    <section id="certifications">
      <h1>Certifications</h1>
      <div className="mt-7 flex w-full flex-wrap lg:flex-nowrap justify-center items-center gap-7">
      <StaticImage src="../../assets/media/report1.jpeg" alt="KW&SB water report" className="w-6/12"/>
      <StaticImage src="../../assets/media/report2.jpeg" alt="QLS water report" className="w-6/12"/>
      <StaticImage src="../../assets/media/report3.jpg" alt="AKU water report" className="w-6/12"/>
      </div>
    </section>
  )
}

export default Certifications
