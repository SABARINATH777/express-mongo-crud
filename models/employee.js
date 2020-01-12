const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    id_employee: { type: String },
    name: { type: String },
    email: { type: String }
});

module.exports = { Employee };