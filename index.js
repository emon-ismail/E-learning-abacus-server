

const express = require('express');
const app =express();
const cors =require('cors');
const port =process.env.PORT || 5000;

app.use(cors())
const courses= require('./data/courses.json')

const course=require('./data/course.json')

app.get('/',(req,res)=>{
    res.send("News Api Running")
});
app.get('/course-courses', (req, res) => {
    res.send(courses)
});
app.get('/single-course/:id',(req,res)=>{
    const id=req.params.id;
    if(id==='08'){
res.send(course)
    }
    else{
        const singleCourseCourse=course.filter(n=>n.category_id ===id);
        res.send(singleCourseCourse)
    }
    

})
app.get('/course', (req, res) =>{
    res.send(course);
});
app.get('/course/:id',(req,res)=>{
    const id=req.params.id;
   const salectedCourse= course.find(n=>n._id == id)
   res.send(salectedCourse)
});
app.get('/course/:id',(req,res)=>{
    res.send(course)
})
app.listen(port,()=>{
    console.log("Abacus server running on",port)
})