import React from "react"
import report1 from "../../assets/media/report1.jpeg"
import report2 from "../../assets/media/report2.jpeg"

function Certifications() {

  return (
    <section id="certifications">
      <h1>Certifications</h1>
      <div className="mt-7 flex w-full flex-wrap lg:flex-nowrap justify-center items-center gap-7">
        <img src={report1} alt="KW&SB water report" className="w-6/12"/>
        <img src={report2} alt="QLS water report" className="w-6/12"/>
      </div>
    </section>
  )
}

export default Certifications
