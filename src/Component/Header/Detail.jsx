import React from 'react';
import banner from "../../assets/hotel1.jpeg"

const Detail = () => {
  return (
    <>
      <div className="container-fluid imglogo  ">
        <div className="row">
          <div className="col-lg-12">
            <img src={banner} alt="logo" className='w-100' />

          </div>
        </div>
      </div>

    </>
  )
}

export default Detail