import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup'
import StudentList from '../../components/Lists/StudentList';

function TeacherStudentList() {
  const dbJson = "http://localhost:5000";
  const [student, setStudent] = useState([]);

  const getStudentList = () => {
      fetch(`${dbJson}/Admin_Teacher_student`)
          .then(response => response.json())
          .then(data => setStudent(data))
          .catch(error => console.error("Error fetching student data:", error));
  };

  useEffect(() => {
      getStudentList();
  }, []);

  const StudentSetStatus = () => (
      <Popup trigger={<button className="btn btn-filled big">Set Status</button>} modal className="set-status">
          {/* Popup content */}
      </Popup>
  );

  return (
      <>
          {/* Wrap everything in a React fragment or a parent div */}
          <StudentList teacher={true} />
          <div className="main_module">
              <h1>Students List</h1>
              <div className="module2">
                  <button className="btn btn-border-blue">
                      <Link to={"add/"}>+ Add Students</Link>
                  </button>
                  <button className="btn btn-border-blue">Bulk Upload</button>
              </div>
              <div className="sub_heading">
                  <input type="text" placeholder="Search Students" />
                  <button className="filter1">Filter</button>
              </div>
              <div className="module2">
                  <StudentSetStatus />
              </div>
              <div className="module5">
                  {student.length > 0 ? (
                      <table>
                          <thead>
                              <tr>
                                  <th>Student Id</th>
                                  <th>Student Name</th>
                                  <th>Faculty</th>
                                  <th>Year</th>
                                  <th>Total No of <br /> Enrolled Courses</th>
                                  <th>Ongoing Course</th>
                                  <th>Completed Course</th>
                                  <th>Update</th>
                                  <th>View</th>
                                  <th className="status">Active</th>
                              </tr>
                          </thead>
                          <tbody>
                              {student.map((record, key) => (
                                  <tr key={key}>
                                      <td>{record.id}</td>
                                      <td>{record.name}</td>
                                      <td>{record.faculty}</td>
                                      <td>{record.year}</td>
                                      <td>{record.enroll}</td>
                                      <td>{record.ongoing}</td>
                                      <td>{record.completed}</td>
                                      <td>
                                          <button>Update</button>
                                      </td>
                                      <td>
                                          <button>View</button>
                                      </td>
                                      <td>
                                          <button className="status">Active</button>
                                      </td>
                                  </tr>
                              ))}
                          </tbody>
                      </table>
                  ) : (
                      <p>No students found.</p>
                  )}
              </div>
          </div>
      </>
  );
}

export default TeacherStudentList;
