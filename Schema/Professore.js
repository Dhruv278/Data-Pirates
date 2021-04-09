const mongoose = require('mongoose');
const validate = require('validator');


const ProfessorSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please Enter Professor's name"],
        minlength: [2, 'minimum length of name is 2 '],
      

    },
    email: {
        type: String,
        require: [true, 'email is must require'],
        lowercase: true,
        unique: true,
        validate: [validate.isEmail, 'please enter the valid email'],
        },
   
    designation: {
        type: String,
    },
    Qualification:String,
    photo:String,
    department:String,
    experience:Number,


});

const Professor = mongoose.model('Professor', ProfessorSchema);
module.exports = Professor;
