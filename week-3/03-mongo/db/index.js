const { application } = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(url)
.catch(err=>console.log(err));
mongoose.connection.on('connected',()=>console.log("connected"));

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourses:[
        {
            courseId:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
            },
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    image:String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);


module.exports = {
    Admin,
    User,
    Course
}