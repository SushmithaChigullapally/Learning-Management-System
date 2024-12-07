// const mongoose = require('mongoose')

// const courseSchema = mongoose.Schema({
//     title:{
//         type: String,
//         required:true,
//         unique:true
//     },
//     description: {
//         type: String,
//         required:true,
//     },
//     // learning_points: String,
//     teacherId: {
//         type: mongoose.SchemaTypes.ObjectId,
//         ref:'User'
//     },
//     duration:{
//         type:Number,
//         required:true
//     },        
//     courseImg:{
//         type:String
//     },
//     createdAt:{
//         type:Date,
//         default: Date.now,
//         immutable:true
//     },
//     active:{
//         type:Boolean,
//         default:true
//     }
// })

// module.exports = mongoose.model("Course",courseSchema)




const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    teacherId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    duration: {
        type: Number,
        required: true
    },
    courseImg: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

// Avoid model overwrite error
const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

module.exports = Course;
