const appError = require('../errorHandling/ErrorFormate');
const  catchAsync=require('./../errorHandling/cathError');
const Research=require('./../Schema/research');
const Student =require('./../Schema/student');
exports.CreateResearch=catchAsync(async(req,res,next)=>{
    let research={};
    console.log(req.body.name);
    research.name=req.body.name;
    research.short_discription=req.body.short_discription;
    research.photo=req.body.photo;
    research.discription=req.body.discription;
    research.faculties=req.body.faculties;
    research.students=req.body.students;
    const NewResearch=await Research.create(research);
    res.status(200).json({
        research:NewResearch
    })
})

exports.CreateStudent=catchAsync(async(req,res,next)=>{
   let student={};
   student.name=req.body.name;
   student.photo=req.file.filename;
   student.department=req.body.department;
   student.PassOutYear=req.body.PassOutYear;
  

   const newStudent=await Student.create(student);
   
   res.status(200).json({
       newStudent
   })

})
exports.GetAllStudents=catchAsync(async(req,res,next)=>{
    const students=await Student.find();
    res.status(200).json({
        students
    })
})
exports.GetAllResearches=catchAsync(async(req,res,next)=>{
    const researches=await Research.find();
    res.status(200).render('AllResearches',{researches})
})
exports.getSingleResearch=catchAsync(async(req,res,next)=>{
    const id=req.params.id;
    const research=await Research.findById(id).populate('faculties').populate('students');
    if(!research)return next (new appError('Please use valid id ',500))
    res.status(200).render('research',{research})
})