const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create patient Schema & model
const DoctorSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Name field is required'],
        unique:true
    },
    password: {
        type: String,
        required: [true, 'Password field is required']
    },
    field: {
        type: String,
    }
});

const Doctor = mongoose.model('Doctor', DoctorSchema);

module.exports = Doctor;