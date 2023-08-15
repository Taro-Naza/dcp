import mongoose from 'mongoose';

async function connectToDatabase() {
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_HOST = process.env.DB_HOST;
    const DB_PORT = process.env.DB_PORT;
    const DB_DATABASE = process.env.DB_DATABASE;

    if (mongoose.connections[0].readyState) {
        console.log('Already Connected');
    } else {
        console.log(
            `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
        );
        try {
            await mongoose.connect(
                `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
            );
            console.log('Connected to MongoDB');
        } catch (err) {
            console.log('Error connecting to MongoDB:', err);
        }
    }
}
// ?authSource=admin

export default connectToDatabase;
