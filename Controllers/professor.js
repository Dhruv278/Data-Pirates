const  catchAsync=require('./../errorHandling/cathError');
const Professor=require('./../Schema/Professore');

exports.addProfessor=catchAsync(async(req,res,next)=>{
    let professor={};
    professor.name=req.body.name;
    professor.photo=req.file.filename;
    professor.designation=req.body.designation;
    professor.experience=req.body.experience;
    professor.department=req.body.department;
    professor.email=req.body.email;
    professor.Qualification=req.body.Qualification;
    const newProfessor=await Professor.create(professor);
    res.status(200).json({
        professor:newProfessor
    })
})

exports.getAllProfessors=catchAsync(async(req,res,next)=>{
    const AllProfessors=await Professor.find();
    res.status(200).json({
        AllProfessors
    })
})

