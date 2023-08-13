import { addUser } from '@/database/users';
import hasErrorMessage from '@/helpers/hasErrorMessage';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const userData = req.body;
    try {
        const user = await addUser(userData);
        res.status(200).json(user);
    } catch (err) {
        if (hasErrorMessage(err)) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default handler;
