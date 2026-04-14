import React, { useState } from 'react'

const Attendance = () => {

  // const students = [
  //   { id: 1, name: "Himanshu Dumka", roomNo: 1, bedNo: 1, attendance: "" },
  //   { id: 2, name: "Himanshu Negi", roomNo: 1, bedNo: 2, attendance: "" },
  //   { id: 3, name: "Harshit Palariya", roomNo: 1, bedNo: 3, attendance: "" },

  //   { id: 4, name: "Bhawesh Mehta", roomNo: 2, bedNo: 1, attendance: "" },
  //   { id: 5, name: "Neeraj Jalal", roomNo: 2, bedNo: 2, attendance: "" },
  //   { id: 6, name: "Lavish", roomNo: 2, bedNo: 3, attendance: "" },

  //   { id: 7, name: "Harshit Joshi", roomNo: 3, bedNo: 1, attendance: "" },
  //   { id: 8, name: "Kartik Sharma", roomNo: 3, bedNo: 2, attendance: "" },
  //   { id: 9, name: "Shivank Pandey", roomNo: 3, bedNo: 3, attendance: "" },

  //   { id: 10, name: "Prashant Kumar", roomNo: 4, bedNo: 1, attendance: "" },
  //   { id: 11, name: "Himanshu Dumka", roomNo: 4, bedNo: 2, attendance: "" },
  //   { id: 12, name: "Himanshu Negi", roomNo: 4, bedNo: 3, attendance: "" },

  //   { id: 13, name: "Harshit Palariya", roomNo: 5, bedNo: 1, attendance: "" },
  //   { id: 14, name: "Bhawesh Mehta", roomNo: 5, bedNo: 2, attendance: "" },
  //   { id: 15, name: "Neeraj Jalal", roomNo: 5, bedNo: 3, attendance: "" },

  //   { id: 16, name: "Lavish", roomNo: 6, bedNo: 1, attendance: "" },
  //   { id: 17, name: "Harshit Joshi", roomNo: 6, bedNo: 2, attendance: "" },
  //   { id: 18, name: "Kartik Sharma", roomNo: 6, bedNo: 3, attendance: "" },

  //   { id: 19, name: "Shivank Pandey", roomNo: 7, bedNo: 1, attendance: "" },
  //   { id: 20, name: "Prashant Kumar", roomNo: 7, bedNo: 2, attendance: "" },
  //   { id: 21, name: "Himanshu Dumka", roomNo: 7, bedNo: 3, attendance: "" },

  //   { id: 22, name: "Himanshu Negi", roomNo: 8, bedNo: 1, attendance: "" },
  //   { id: 23, name: "Harshit Palariya", roomNo: 8, bedNo: 2, attendance: "" },
  //   { id: 24, name: "Bhawesh Mehta", roomNo: 8, bedNo: 3, attendance: "" },

  //   { id: 25, name: "Neeraj Jalal", roomNo: 9, bedNo: 1, attendance: "" },
  //   { id: 26, name: "Lavish", roomNo: 9, bedNo: 2, attendance: "" },
  //   { id: 27, name: "Harshit Joshi", roomNo: 9, bedNo: 3, attendance: "" },

  //   { id: 28, name: "Kartik Sharma", roomNo: 10, bedNo: 1, attendance: "" },
  //   { id: 29, name: "Shivank Pandey", roomNo: 10, bedNo: 2, attendance: "" },
  //   { id: 30, name: "Prashant Kumar", roomNo: 10, bedNo: 3, attendance: "" }
  // ];
  const studentsData = [
    {
      id: 1,
      name: "Himanshu Dumka",
      roomNo: 1,
      bedNo: 1,
      attendance: {
        sunday: "",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: ""
      },
      totalPresent: 0,
      totalAbsent: 0,
      percentage: 0
    },
    {
      id: 2,
      name: "Himanshu Negi",
      roomNo: 1,
      bedNo: 2,
      attendance: {
        sunday: "",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: ""
      },
      totalPresent: 0,
      totalAbsent: 0,
      percentage: 0
    },
    {
      id: 3,
      name: "Harshit Palariya",
      roomNo: 1,
      bedNo: 3,
      attendance: {
        sunday: "",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: ""
      },
      totalPresent: 0,
      totalAbsent: 0,
      percentage: 0
    },
    {
      id: 4,
      name: "Bhawesh Mehta",
      roomNo: 2,
      bedNo: 1,
      attendance: {
        sunday: "",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: ""
      },
      totalPresent: 0,
      totalAbsent: 0,
      percentage: 0
    },
    {
      id: 5,
      name: "Neeraj Jalal",
      roomNo: 2,
      bedNo: 2,
      attendance: {
        sunday: "",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: ""
      },
      totalPresent: 0,
      totalAbsent: 0,
      percentage: 0
    },
    {
      id: 6,
      name: "Lavish",
      roomNo: 2,
      bedNo: 3,
      attendance: {
        sunday: "",
        monday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: ""
      },
      totalPresent: 0,
      totalAbsent: 0,
      percentage: 0
    }
  ];

  const [students, setStudents] = useState(studentsData);

  const markAttendance = (studentId, day, status) => {
    console.log(studentId, day, status);
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? {
            ...student,
            attendance: {
              ...student.attendance,
              [day]: status
            }
          }
          : student
      )
    );
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="student text-center">Student Attendance</h1>
        <div className="row">
          <div className="col-lg-2">
            <div className="card"><button className="btn btn-success btn-sm"><b>Civil</b></button></div>
          </div>
          <div className="col-lg-2">
            <div className="card"><button className="btn btn-success btn-sm"><b>Computer Science</b></button></div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-3 ">
            <div className="card">
              <b>Total Present = 25 <i className="bi bi-check2-square"></i></b>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="card">
              <b>Total Absent = 5 <i className="bi bi-check2-square"></i></b>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="card">
              <b>Total Late = 5 <i className="bi bi-check2-square"></i></b>
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="card">
              <b>Total Holidays = 0 <i className="bi bi-check2-square"></i></b>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-3">
            <div className="card"><b>Present = <span class="badge text-bg-success">P</span></b></div>
          </div>
          <div className="col-lg-3">
            <div className="card"><b>Absent = <span class="badge text-bg-danger">A</span></b></div>
          </div>
          <div className="col-lg-3">
            <div className="card"><b>Late = <span class="badge text-bg-primary">L</span></b></div>
          </div>
          <div className="col-lg-3">
            <div className="card"><b>Holiday = <span class="badge text-bg-secondary">H</span></b></div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12">
            <table className="table table-bordered border-primary">
              <thead className="table-light">
                <tr>
                  <th scope="col">Room NO.</th>
                  <th scope="col">Student Name</th>
                  <th scope="col">Bed No.</th>
                  <th scope="col">Sunday</th>
                  <th scope="col">Monday</th>
                  <th scope="col">Tuesday</th>
                  <th scope="col">Wednesday</th>
                  <th scope="col">Thursday</th>
                  <th scope="col">Friday</th>
                  <th scope="col">Saturday</th>
                  <th scope="col">March Total %</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.roomNo}</td>
                    <td className="text-center">{student.name}</td>
                    <td>{student.bedNo}</td>

                    {Object.keys(student.attendance).map((day) => (
                      <td key={day}>
                        <button className="btn btn-outline-success rounded-circle btn-sm me-2"
                          onClick={() => markAttendance(student.id, day, "P")}
                          disabled={student.attendance.sunday && student.attendance.sunday !== "P"}>
                          P
                        </button>
                        <button className="btn btn-outline-danger rounded-circle btn-sm me-2"
                          disabled={student.attendance.sunday && student.attendance.sunday !== "A"}
                          onClick={() => markAttendance(student.id, "sunday", "A")}>
                          A
                        </button>
                        <button className="btn btn-outline-danger rounded-circle btn-sm me-2"
                          disabled={student.attendance.sunday && student.attendance.sunday !== "L"}
                          onClick={() => markAttendance(student.id, "sunday", "L")}>
                          L
                        </button>
                        <button className="btn btn-outline-danger rounded-circle btn-sm me-2"
                          disabled={student.attendance.sunday && student.attendance.sunday !== "H"}
                          onClick={() => markAttendance(student.id, "sunday", "H")}>
                          H
                        </button>
                      </td>
                    ))}

                    <td>0%</td>
                  </tr>
                ))}
              </tbody>
              {/* <tbody>
                <tr>
                  <td>01</td>
                  <td className="text-center">Himanshu Dumka</td>
                  <td>01</td>
                  <td>
                    <span class="btn btn-outline-success btn-sm me-3">P</span>
                    <span class="btn btn-outline-danger btn-sm me-3">A</span>
                    <span class="badge rounded-pill text-bg-danger me-3">A</span>
                    <span class="badge rounded-pill text-bg-primary me-3">L</span>
                    <span class="badge rounded-pill text-bg-dark">H</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>01</td>
                  <td className="text-center">Himanshu Negi</td>
                  <td>02</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>01</td>
                  <td className="text-center">Harshit Palariya</td>
                  <td>03</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="text-center">Bhawesh Mehta</td>
                  <td>04</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td className="text-center">Neeraj Jalal</td>
                  <td>05</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td className="text-center">Lavish</td>
                  <td>06</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td className="text-center">Harshit Joshi</td>
                  <td>07</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td className="text-center">Kartik Sharma</td>
                  <td>08</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td className="text-center">Shivank Pandey</td>
                  <td>09</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td className="text-center">Prashant Kumar</td>
                  <td>10</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td className="text-center">Himanshu Dumka</td>
                  <td>11</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td className="text-center">Himanshu Negi</td>
                  <td>12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td className="text-center">Harshit Palariya</td>
                  <td>13</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td className="text-center">Bhawesh Mehta</td>
                  <td>14</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td className="text-center">Neeraj Jalal</td>
                  <td>15</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td className="text-center">Lavish</td>
                  <td>16</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td className="text-center">Harshit Joshi</td>
                  <td>17</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>06</td>
                  <td className="text-center">Kartik Sharma</td>
                  <td>18</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>07</td>
                  <td className="text-center">Shivank Pandey</td>
                  <td>19</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>07</td>
                  <td className="text-center">Prashant Kumar</td>
                  <td>20</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>07</td>
                  <td className="text-center">Himanshu Dumka</td>
                  <td>21</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>08</td>
                  <td className="text-center">Himanshu Negi</td>
                  <td>22</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>08</td>
                  <td className="text-center">Harshit Palariya</td>
                  <td>23</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>08</td>
                  <td className="text-center">Bhawesh Mehta</td>
                  <td>24</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>09</td>
                  <td className="text-center">Neeraj Jalal</td>
                  <td>25</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>09</td>
                  <td className="text-center">Lavish</td>
                  <td>26</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>09</td>
                  <td className="text-center">Harshit Joshi</td>
                  <td>27</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td className="text-center">Kartik Sharma</td>
                  <td>28</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td className="text-center">Shivank Pandey</td>
                  <td>29</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td className="text-center">Prashant Kumar</td>
                  <td>30</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                <button className="btn btn-success btn-sm">Done</button>
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Attendance