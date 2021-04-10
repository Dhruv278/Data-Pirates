const catchAsync=require('./../errorHandling/cathError');
const appError=require('./../errorHandling/ErrorFormate')
const Email=require('./email');
exports.index=(req,res)=>{
    res.status(200).render('main.ejs')
}
exports.event=(req,res)=>{
    res.status(200).render('event')
}
exports.contact=(req,res)=>{
    res.status(200).render('contact')
}
exports.sendMail=catchAsync(async(req,res,next)=>{
  const data={}
  data.name=req.body.name;
  data.email=req.body.email;
  data.subject=req.body.subject;
  data.message=req.body.message;
//   console.log(data)
     await new Email(data).contact();
     res.status(200).json({
         status:'success'
     })

})