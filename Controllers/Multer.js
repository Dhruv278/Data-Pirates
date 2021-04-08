var multer = require('multer')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Public/photo/")

  },
  filename: function (req, file, cb) {
    // + '-' + Math.round(Math.random() * 1E9)
    cb(null, Date.now() + '-' +'.jpg')
  }
})

// let multerStorage=multer.memoryStorage()
  const fileFilter=(req,file,cb)=>{
    
      if(file.mimetype.startsWith('image/')){
          cb(null,true)
      }else{
          cb(new appError('please upload only image not other file',400),false)
      }
  }

let upload = multer({
  storage: storage, 
 fileFilter:fileFilter 
}).single('file')

exports.uploadPhoto=upload










// const filter=(obj,...allowedFeilds)=>{
//     let newObj={};
//     Object.keys(obj).forEach(el=>{
//         if(allowedFeilds.includes(el))newObj[el]=obj[el];
//     })
//     return newObj;
// }
// exports.resizePhoto=(req,res,next)=>{
//     if(!req.file) return next()
//   req.file.filename= `${Date.now()}-user.jpeg`
//     sharp(req.file.buffer).resize(500,500).toFormat('jpeg').jpeg({quality:90}).toFile(`public/img/users/${req.file.filename}`)
//     next()
// }


// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/tmp/my-uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
   
//   var upload = multer({ storage: storage })