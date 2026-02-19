import React from 'react'

const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>OUR REGIONS</h1>

        <p>
          Explore our most popular destinations, carefully selected to offer
          breathtaking views, relaxing environments, and premium stays. From
          peaceful mountain retreats to vibrant coastal escapes, Elite Rentals
          brings you closer to your perfect getaway.
        </p>

        <div className="region_container">
          <div className="card">
            <img src="/region1.jpg" alt="mountain villas" />
            <h2>Mountains</h2>
            <p><span>90</span> Properties</p> 
          </div>

          <div className="card">
            <img src="/region2.jpg" alt="coastal villas" />
            <h2>Coastline</h2>
            <p><span>52</span> Properties</p> 
          </div>
        </div>
      </section> 
    </>
  )
}

export default Regions
