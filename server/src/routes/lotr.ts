import express, { Request, Response } from 'express'
import { Lotr } from "../models/lotr"

const router = express.Router()

router.get('/api/Lotr', [], async (req: Request, res: Response) => {
    const lotr = await Lotr.find({})
    return res.status(200).send(lotr)
})

router.post('/api/Lotr', async (req: Request, res: Response) => {
    console.log(req.body);
    const { name, helmet, timestamp, level, weapon } = req.body;

    const lotr = Lotr.build({ name, helmet, timestamp, weapon, level })
    await lotr.save()
    return res.status(201).send(lotr)
})

export { router as LotrRouter }

