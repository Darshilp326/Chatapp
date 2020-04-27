const express = require ('express');
const router = express.Router();
const Patient = require('../models/patient');

// add a new patient to the db
router.post('/register', function(req, res, next){
    Patient.create(req.body).then(function(patient){
        res.send(patient);
    }).catch(next);
});

// delete a patient from the db
router.delete('/patients/:id', function(req, res, next){
    Patient.findByIdAndRemove({_id: req.params.id}).then(function(patient){
        res.send(patient);
    }).catch(next);
});

module.exports = router;
