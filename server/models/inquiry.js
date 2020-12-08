import mongoose from 'mongoose';

const { Schema } = mongoose;

const InquirySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        validate: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
});

export default mongoose.model('Email', InquirySchema);