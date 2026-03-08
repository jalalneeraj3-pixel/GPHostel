import React, { useState } from 'react'

const SignUp = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    // Form Handling
    const initialState ={
        name:"",
        email:"",
        branch:"",
        UBTER:"",
        contact:"",
        password:"",
    };
    const [formValue, setFoermValue] = useState(initialState);
    const handleFormChange = (e) => {
        console.log(e);
        const { name, value } = e.target;

        setFoermValue({
            ...formValue,
            [name]: value
        })
    }

    console.log(formValue);

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="card p-3 shadow">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input onChange={handleFormChange} type="text" className="form-control" placeholder="Enter Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input onChange={handleFormChange} type="text" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Branch</label>
                                    <input onChange={handleFormChange} type="text" className="form-control" placeholder="Enter Branch Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">UBTER</label>
                                    <input onChange={handleFormChange} type="text" className="form-control" placeholder="Enter Roll No. Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contact</label>
                                    <input onChange={handleFormChange} type="text" className="form-control" placeholder="Enter Contact" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="input-group mb-3">
                                        <input onChange={handleFormChange} type={show === true ? 'text' : 'password'} className="form-control" placeholder="Enter Password" />
                                        <span className="input-group-text" id="basic-addon1" onClick={handleShow}>
                                            {
                                                show === true ?
                                                    <i className="bi bi-eye"></i>
                                                    :
                                                    <i className="bi bi-eye-slash"></i>
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className='btn btn-primary'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp