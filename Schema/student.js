const mongoose = require('mongoose');
const validate = require('validator');


const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please Enter Professor's name"],
        minlength: [2, 'minimum length of name is 2 '],
      

    },
    department:String,
    photo:String,
    PassOutYear:String,
    branch:String,
    
    


});

const Student = mongoose.model('Professor', StudentSchema);
module.exports = Student;
