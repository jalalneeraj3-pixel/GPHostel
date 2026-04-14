import React from 'react'
import Intro from '../Component/Header/Intro';
import Detail from '../Component/Header/Detail';
import Navbar from '../Component/Header/Navbar';
import Dashboard from './Dashboard';
import Registration from '../Component/Registration';

const Home = () => {
  return (
    <>
        <div className="container-fluid w-100">
            <div className="row">
                <div className="col-lg-12 bg-dark">
                    <Intro/>
                </div>
                <div className="col-lg-12">
                    <Detail/>
                </div>
                <div className="col-lg-12">
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                <Registration/>
            </div>
        </div>
    </>
  )
}

export default Home;