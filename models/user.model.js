import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'user name is required'],
        trim: true,
        minLength: 2,
        maxLenght: 50,
    },
    email: {
        type: String,
        required: [true, 'email is required '],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill an vaild email address'],
    },
    password: {
        type: String,
        required: [true, 'user password is required'],
        minLength: 6,
    }

}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;