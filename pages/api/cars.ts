import { createCar } from '../../src/app/lib/redis';

export default async function handler(req, res) {
    try {
        const id = await createCar(req.body);
        res.status(200).json({ id })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}