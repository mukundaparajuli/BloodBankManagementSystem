const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    bloodGroup: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    preferredAge: {
        type: Number,
        required: true,
    }
});
module.exports = mongoose.model("Blood", bloodRequestSchema);