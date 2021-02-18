const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const plantAskSchema = new Schema({
    title: {
        type: String,
        trim: true,       
        required: "Enter the Name of Plant",
    },
    
});

const PlantAsk = mongoose.model("Inquiry", plantAskSchema);

module.exports = PlantAsk;

