import React from 'react'

const Attendance = () => {
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
            <div className="card"><b>Present = P</b></div>
          </div>
          <div className="col-lg-3">
            <div className="card"><b>Absent = A</b></div>
          </div>
          <div className="col-lg-3">
            <div className="card"><b>Late = L</b></div>
          </div>
          <div className="col-lg-3">
            <div className="card"><b>Holiday = H</b></div>
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
                  <tr>
                    <td>01</td>
                    <td className="text-center">Himanshu Dumka</td>
                    <td>01</td>
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
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  )
}

export default Attendance