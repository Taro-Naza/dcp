import connectToDatabase from '@/config/connectToDB';
import User from '@/models/User';
import user from '@/types/User';

async function addUser(user: user) {
    connectToDatabase();
    return await User.create(user);
}

export { addUser };
