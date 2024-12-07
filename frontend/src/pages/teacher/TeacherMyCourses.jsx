// import React, { useContext, useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
// import './TeacherMyCourses.css'
// import AuthContext from '../../context/AuthContext';


// function TeacherMyCourses() {
//     const { token } = useContext(AuthContext);
//     // const dbJson = "http://localhost:7000";
//     const backend = import.meta.env.VITE_BACKEND;
//     const [courses, setCourses] = useState([])

//     const getCoureList = () => {
//         fetch(`${backend}/api/course/mycourse/`, { headers: { token } })
//             .then(response => response.json())
//             .then(data => setCourses(data))
//             .catch(error => console.log(error))
//     }
//     useEffect(() => {
//         getCoureList();
//     }, [])
//     return (
//         <div>

//             <div>
//                 <h3>My Courses</h3>

//                 <div className="video-component">
//                     <div className="videos">
//                         {   
//                             courses.map((course, key) => {
//                                 return (
//                                     <Link className="video-box" key={key} to={'/editCourse/'+course._id}>
//                                         <div className="video-img" style={{ backgroundImage: `url(${backend}/img/${course.courseImg})` }} ></div>
//                                         <div className="video-info">
//                                             <p>{course.title   }</p>
//                                         </div>
//                                         <small>Duration:{course.duration} Hours</small>
//                                     </Link>

//                                 )
//                             })
//                         }
//                     </div>
//                 </div>


//             </div>
//         </div>
//     )
// }

// export default TeacherMyCourses


import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TeacherMyCourses.css';
import AuthContext from '../../context/AuthContext';

function TeacherMyCourses() {
    const { token } = useContext(AuthContext); // Ensure token is available
    const backend = import.meta.env.VITE_BACKEND; // Backend URL from environment variable
    const [courses, setCourses] = useState([]); // State for storing courses

    // Fetch courses from the backend
    const getCourseList = () => {
        fetch(`${backend}/api/course/mycourse`, {
            headers: { token }, // Include token in headers for authentication if required
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setCourses(data))
            .catch((error) => console.error('Error fetching courses:', error));
    };

    useEffect(() => {
        getCourseList();
    }, []);

    return (
        <div>
            <div>
                <h3>My Courses</h3>
                <div className="video-component">
                    <div className="videos">
                        {courses.map((course) => (
                            <Link
                                className="video-box"
                                key={course._id}
                                to={`/editCourse/${course._id}`}
                            >
                                <div
                                    className="video-img"
                                    style={{
                                        backgroundImage: `url(${backend}/img/${course.courseImg})`,
                                    }}
                                ></div>
                                <div className="video-info">
                                    <p>{course.title}</p>
                                </div>
                                <small>Duration: {course.duration} Hours</small>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherMyCourses;
