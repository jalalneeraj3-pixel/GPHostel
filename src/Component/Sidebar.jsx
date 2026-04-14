import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="col-lg-12 left_sidebar p-0">
                <ul className="list-group bg-none">
                    <li className="list-group-item">
                        <Link to={'/'}><i className="bi bi-house-door"></i><b>Dashboard</b></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/students'}><i className="bi bi-person-bounding-box"></i> <b>Students</b></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/attendance'}><i className="bi bi-calendar2-check"></i> <b>Attendance</b></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/feesCollection'}><i className="bi bi-currency-dollar"></i> <b>Fees Collection</b></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/sign-up'}><b>New Registration</b></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/staff'}><i className="bi bi-person-plus"></i><b>Staff</b></Link>
                    </li>
                    <li className="list-group-item">
                        <Link to={'/notice'}><i className="bi bi-journal-medical"></i><b>Notice Board</b></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar