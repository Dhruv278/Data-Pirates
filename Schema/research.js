const mongoose = require('mongoose');
const validate = require('validator');


const ResearchSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please Enter Professor's name"],
        minlength: [2, 'minimum length of name is 2 '],
      

    },
    discription:String,
    photo:String,
    department:String,
    faculties:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Professor'
    }],
    students:[{
        type:mongoose.Schema.ObjectId,
        ref:'Student'
    }],


});

const Research = mongoose.model('Professor', ResearchSchema);
module.exports = Research;
