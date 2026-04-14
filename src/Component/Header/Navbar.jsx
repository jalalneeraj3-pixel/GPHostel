import React from 'react'
import { Link, Links } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-dark">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                  <li className="nav-item me-3">
                    <Link className="nav-link active text-white" aria-current="page" to="/registration">Home</Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link className="nav-link text-white" to="/sign-up">SignUp</Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link className="nav-link text-white" to="/attendance">Attendence</Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link className="nav-link text-white" to="/feesCollection">Fee</Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link className="nav-link text-white" to="/students">Student</Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link className="nav-link text-white" to="/notice">Notice</Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link className="nav-link text-white" to="/staff">Staff</Link>
                  </li>
                  <li className="nav-item me-3">
                    <Link className="nav-link text-white" to="/"></Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              {/* </div> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar