// const express = require('express')
// var cors = require('cors')
// const connectToMongo = require("./db");
// const path = require("path");

// connectToMongo();

// const app = express();
// const port  = process.env.PORT || 5000;
// //using middleware
// app.use(cors())
// app.use(express.json())

// //image
// app.use('/img', express.static(path.join(__dirname, './img')));

// // routes
// //auth
// app.use('/api/auth', require('./routes/auth/register.js'))
// app.use('/api/auth', require('./routes/auth/login.js'))
// //users with single user
// app.use('/api/users', require('./routes/users/users.js'))
// // course
// app.use('/api/course', require('./routes/course/course.js'))
// //unit
// app.use('/api/unit', require('./routes/course/unit.js'))
// //video
// app.use('/api/video', require('./routes/course/video.js'))
// //test mcq
// app.use('/api/test', require('./routes/course/test.js'))
// // enroll
// app.use('/api/enroll', require('./routes/enrollment/enrollment.js'))
// // overview
// app.use('/api/overview/admin', require('./routes/overview/adminOverview.js'))
// app.use('/api/overview/teacher', require('./routes/overview/teacherOverview.js'))
// app.use('/api/overview/student', require('./routes/overview/StudentOverview.js'))

// app.listen(port, () => {
//     console.log(`express running on http://localhost:${port}`)
// })

// app.get('/',(req,res)=>{
//     res.json({
//         auth:{
//             login:"http://localhost:5000/api/auth/login",
//             register:"http://localhost:5000/api/auth/register (admin)",
//             registerStudent:"http://localhost:5000/api/auth/registerstudent (admin,teacher)",
//         },
//         users:{
//             allUsers:"http://localhost:5000/api/users/ (admin)",
//             teachers:"http://localhost:5000/api/users/teachers/ (admin)",
//             students:"http://localhost:5000/api/users/students/ (admin,teacher)",
//         },
//         enrollment:{
//             enroll:"http://localhost:5000/api/enroll/"
//         },
//         course:{
//             allCourse:"http://localhost:5000/api/course/",
//             CreateCourse:"http://localhost:5000/api/course/create/",
//             teacherMyCourse:"http://localhost:5000/api/course/teachermycourse/ (teacher)",
//         },
//         overview:{
//             admin:"http://localhost:5000/api/overview/admin/ (admin)",
//             teacher:"http://localhost:5000/api/overview/teacher/ (teacher)",
//             student:"http://localhost:5000/api/overview/teacher/",
//         }
//     })
// })


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require("path");
const connectToMongo = require("./db");

// Load environment variables
dotenv.config();

// Connect to MongoDB (using your `connectToMongo` function if needed)
connectToMongo(); // Assuming you have your own MongoDB connection logic

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/img', express.static(path.join(__dirname, './img'))); // Serve static images

// MongoDB connection with mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB Connection Error:', err));

// Define a Course schema
const courseSchema = new mongoose.Schema({
    title: String,
    duration: Number,
    courseImg: String,
});

const Course = mongoose.model('Course', courseSchema);

// Route to get courses for the teacher
app.get('/api/course/mycourse', async (req, res) => {
    try {
        const courses = await Course.find(); // Fetch all courses
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses.' });
    }
});

// Routes
// Auth
app.use('/api/auth', require('./routes/auth/register.js'));
app.use('/api/auth', require('./routes/auth/login.js'));

// Users
app.use('/api/users', require('./routes/users/users.js'));

// Course
app.use('/api/course', require('./routes/course/course.js'));

// Unit
app.use('/api/unit', require('./routes/course/unit.js'));

// Video
app.use('/api/video', require('./routes/course/video.js'));

// Test (MCQ)
app.use('/api/test', require('./routes/course/test.js'));

// Enrollment
app.use('/api/enroll', require('./routes/enrollment/enrollment.js'));

// Overview
app.use('/api/overview/admin', require('./routes/overview/adminOverview.js'));
app.use('/api/overview/teacher', require('./routes/overview/teacherOverview.js'));
app.use('/api/overview/student', require('./routes/overview/StudentOverview.js'));

// API Information Endpoint
app.get('/', (req, res) => {
    res.json({
        auth: {
            login: "http://localhost:5000/api/auth/login",
            register: "http://localhost:5000/api/auth/register (admin)",
            registerStudent: "http://localhost:5000/api/auth/registerstudent (admin,teacher)",
        },
        users: {
            allUsers: "http://localhost:5000/api/users/ (admin)",
            teachers: "http://localhost:5000/api/users/teachers/ (admin)",
            students: "http://localhost:5000/api/users/students/ (admin,teacher)",
        },
        enrollment: {
            enroll: "http://localhost:5000/api/enroll/"
        },
        course: {
            allCourse: "http://localhost:5000/api/course/",
            createCourse: "http://localhost:5000/api/course/create/",
            teacherMyCourse: "http://localhost:5000/api/course/teachermycourse/ (teacher)",
            myCourse: "http://localhost:5000/api/course/mycourse/ (all users)"
        },
        overview: {
            admin: "http://localhost:5000/api/overview/admin/ (admin)",
            teacher: "http://localhost:5000/api/overview/teacher/ (teacher)",
            student: "http://localhost:5000/api/overview/student/",
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Express running on http://localhost:${port}`);
});
