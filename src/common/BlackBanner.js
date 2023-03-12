import React from 'react'

const BlackBanner = ({text}) => {
  return (
    <section className="blackbanner">
    <div className="container">
      <h1 className="bannertitle">{text}</h1>
    </div>
  </section>
  )
}

export default BlackBanner