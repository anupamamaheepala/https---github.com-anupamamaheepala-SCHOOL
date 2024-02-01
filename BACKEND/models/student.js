const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name : {
        type : String,
        require: true
    },
    age : {
        type : Number,
        require: true
    },
    gender : {
        type : String,
        require: true
    },

})

const student = mongoose.model("Student",studentSchema);

module.exports = Student;