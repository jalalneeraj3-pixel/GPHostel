import { useState } from "react";

function Registration() {
    const [name, setName] = useState("");
    const [nameError, setnameError] = useState("");
    const [username, setusername] = useState("");
    const [usernameError, setusernameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [passward, setpassward] = useState("");
    const [passwarderror, setpasswarderror] = useState("");
    const [userpassward, setuserpassward] = useState("");
    const [userpasswarderror, setuserpasswarderror] = useState("");
    const [phone, setphone] = useState("");
    const [phoneError, setphoneError] = useState("");
    const [student, setstudent] = useState("");
    const [studentError, setstudentError] = useState("");
    const [Adress, setAdress] = useState("");
    const [AdressError, setAdressError] = useState("");
    const [id, setid] = useState("");
    const [idError, setidError] = useState("")


    const [isvalid, setIsvalid] = useState(false);
    const [show, setshow] = useState(false)

    const handelshow = () => {
        setshow(!show);
    }

    const handelname = (e) => {
        setName(e.target.value);
    }

    const handelusername = (e) => {
        setusername(e.target.value);
    }
    const handelemail = (e) => {
        setEmail(e.target.value);
    }
    const handelpassward = (e) => {
        setpassward(e.target.value);
    }
    const handeluserpassward = (e) => {
        setuserpassward(e.target.value);
    }

    const handelphone = (e) => {
        setphone(e.target.value);
    }

    const handelstudent = (e) => {
        setstudent(e.target.value);
    }

    const handelAdress = (e) => {
        setAdress(e.target.value);
    }

    const handelid = (e) => {
        setid(e.target.value)
    }
    const handelsubmit = e => {
        e.preventDefault();

        if (name === "") {
            setnameError("name is not found !");
            setIsvalid(false);
        }
        else {
            setIsvalid(true);
        }
        if (username === "") {
            setusernameError("user name error !");
            setIsvalid(false);
        }

        if (email === "") {
            setEmailerror("invaild email !");
            setIsvalid(false);
        }
        if (passward === "") {
            setpasswarderror("invaild passward !");
            setIsvalid(false);
        }
        else {
            setIsvalid(true);
        }
        if (userpassward === "") {
            setuserpasswarderror("invaild passward !");
            setIsvalid(false);
        }
        else {
            setIsvalid(true);
        }
        if (phone === "") {
            setphoneError("invaild phone number !");
            setIsvalid(false);
        }

        if (student === "") {
            setstudentError("invaild student id !");
            setIsvalid(false);
        }

        if (Adress === "") {
            setAdressError("invaild adress !");
            setIsvalid(false);
        }

        if (id === "") {
            setidError("id not found");
            setIsvalid(false);
        }

        else if (!email.includes('@')) {
            setEmailerror("email id not mathch !");
            setIsvalid(false);
        }
        else {
            setIsvalid(true);
        }




        if (isvalid) {
            const user = {
                username: name,
                username: username,
                useremail: email,
                userpassward: confirmpassward,
                userpassward: passward,
                userphone: phone,
                userstudent: student,
                userAdress: Adress,
                userid: id


            }
            localStorage.setItem("user", JSON.stringify(user));
            setName("");
            setusername("");
            setEmail("");
            setpassward("");
            setphone("");
            setstudent("");
            setAdress("");
            setid("");

        }

        else {
            alert("fill the full information")
        }
    }

    return (


        <>

            <div className="main-count">
                <h2 className="h2-1">Registration</h2> <br /><br />

                <div className="col-4">
                    <form onSubmit={handelsubmit}>

                        <div className="form-row">
                            <div>
                                <label>Full Name</label>
                                <input type="text" onChange={handelname} value={name} placeholder="Enter your name" />
                                {
                                    nameError &&
                                    <span className="text-danger">{nameError}</span>
                                }
                            </div>
                            <div>
                                <label>Username</label>
                                <input type="text" onChange={handelusername} value={username} placeholder="Enter your username" />
                                {
                                    usernameError &&
                                    <span className="text-danger">{usernameError}</span>

                                }

                            </div>

                            <div>
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" onChange={handelemail} />
                                <span></span>
                                {
                                    emailerror &&
                                    <span className="text-danger">{emailerror}</span>
                                }
                            </div>
                        </div>

                        <div className="form-row">
                            <div>
                                <label>confirm password</label>
                                <input type="password" placeholder=" confirm passward" value={passward} onChange={handelpassward} />
                                {
                                    passwarderror &&
                                    <span className="text-danger">{passwarderror}</span>
                                }

                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" placeholder="Enter your passward" value={userpassward} onChange={handeluserpassward} />
                                {
                                    userpasswarderror &&
                                    <span className="text-danger">{userpasswarderror}</span>
                                }
                            </div>

                            <div>
                                <label>phone number</label>
                                <input type="text" placeholder="Enter your phonr number" value={phone} onChange={handelphone} />
                                {
                                    phoneError &&
                                    <span className="text-danger">{phoneError}</span>
                                }
                            </div>

                        </div>

                        <div className="form-row">
                            <div>
                                <label>Student id</label>
                                <input type="text" placeholder="Enter your id" value={student} onChange={handelstudent} />
                                {
                                    studentError &&
                                    <span className="text-danger">{studentError}</span>
                                }
                            </div>
                            <div>
                                <label> confirm Adress</label>
                                <input type="text" placeholder="Confirm your adress" value={Adress} onChange={handelAdress} />
                                {
                                    AdressError &&
                                    <span className="text-danger">{AdressError}</span>
                                }
                            </div>

                            <div>
                                <label htmlFor="">data of brith</label>
                                <input type="date" placeholder="enter data of brith" />
                            </div>
                        </div>

                        <div className="d-flex gap-3">
                            <div className="col-lg-11">
                                <label htmlFor="">course name</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>course</option>
                                    <option value="1">web devlopment</option>
                                    <option value="2">cyber security</option>
                                    <option value="3">digital marketing</option>
                                </select>
                            </div>

                            <div className="col-lg-11">
                                <label htmlFor="">college name</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>college</option>
                                    <option value="1">Graphic era university</option>
                                    <option value="2">MPBG</option>
                                    <option value="3">DSB campas</option>
                                </select>
                            </div>

                            <div className="col-lg-11">
                                <label htmlFor=""> course Durastion</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Durastion</option>
                                    <option value="1">6 month</option>
                                    <option value="2">1 year</option>
                                    <option value="3">2 year</option>
                                    <option value="3">3 year</option>
                                </select>
                            </div>
                        </div><br />

                        <div className="row ">
                            <label >id</label>
                            <input type="text" className="border-0 p-2 " placeholder=" enter your id " onChange={handelid} value={id} />
                            {
                                idError &&
                                <span className="text-danger">{idError}</span>
                            }
                        </div>

                        <label>Gender</label>
                        <input type="radio" name="gender" />male
                        <input type="radio" name="gender" />female

                        <button type="submit">Register</button>
                    </form>

                </div >

            </div >





        </>
    )
};

export default Registration;