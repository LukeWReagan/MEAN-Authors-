const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    type: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    skill: {
        type: Array,
        default: []
    }
},{timestamps: true});

mongoose.connect('mongodb://localhost:27017/beltTest', {useNewUrlParser:true}, (errs)=>console.log("Db error -- ", errs));

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
