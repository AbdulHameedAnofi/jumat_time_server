import mongoose from "mongoose";

const mosqueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    link: {
        type: String
    },

    jumat_start: {
        type: String,
        required: true,
    },

    jumat_end: {
        type: String,
        required: true
    }

});

export default mongoose.model("Mosque", mosqueSchema);