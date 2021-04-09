const  catchAsync=require('./../errorHandling/cathError');
const Research=require('./../Schema/research');
const Student =require('./../Schema/student');
exports.CreateResearch=catchAsync(async(req,res,next)=>{
    let research={};
    research.name=req.body.name;
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