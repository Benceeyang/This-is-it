import React from 'react'
import ServicesData from "./ServicesData"

function Service() {
  return (


    <>
      <section className='Services topMarign'>
        <div className='container'>
          <div className='heading'>
            {/* <h3>About Milwaukee</h3> */}
            <h1>MILWAUKEE'S DIVERSITY</h1>
          </div>

          <div className='contain grid topMarign'>
            {ServicesData.map((val) => {
              return (
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Service