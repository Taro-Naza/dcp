import mongoose from 'mongoose';

async function connectToDatabase() {
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_HOST = process.env.DB_HOST;
    const DB_PORT = process.env.DB_PORT;
    const DB_NAME = process.env.DB_NAME;

    if (mongoose.connections[0].readyState) {
        console.log('Already Connected');
    } else {
        console.log(
            `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
        );
        try {
            await mongoose.connect(
                `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
            );
            console.log('Connected to MongoDB');
        } catch (err) {
            console.log('Error connecting to MongoDB:', err);
        }
    }
}

export default connectToDatabase;
