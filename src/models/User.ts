import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    status: Boolean,
    isAdmin: Boolean,
    createdAt: Date,
    updatedAt: Date,
});

export default models.User || model('User', userSchema);
