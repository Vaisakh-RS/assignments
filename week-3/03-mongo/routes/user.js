const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username:req.body.username,
        password:req.body.password
    });
    res.json({"message":"User created successfully"})
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    User.find()
    .then((courses)=>res.json(courses)) 
});

router.post('/courses/:courseId', userMiddleware,(req, res) => {
    // Implement course purchase logic
    
    const courseId=req.params.courseId

    Course.findOne({_id:courseId})
    .then((course)=>{
        if(course)
        {
          const username=req.headers.username
       
           User.updateOne({username},
                {$push:
                    {
                        purchasedCourses:{courseId:courseId}
                    }
                })
                .then(()=>{
                    res.json({"Message":"Course purchased"});
                })
                .catch((err)=>console.log(err))
           
            
        }
        else{
            res.json({"Message":"Course not found"})
        }
    })

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username;

    const user=await User.findOne({username}).populate('purchasedCourses.courseId');
    if(user)
    {
        const purchasedCourses=user.purchasedCourses.map((courses)=>courses.courseId)
        res.json({"purchasedCourses":purchasedCourses})
    }
}); 


module.exports = router