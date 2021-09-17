import express, { Request, Response } from 'express';
import { Devices } from '../models/todomodels';

const route = express.Router();

route.get('/test/get/api', async (req: Request,res: Response) => {
    const devices = await Devices.find({}).skip(0).limit(2);
    const result = { devices: devices, totalRecords : await Devices.count({ })}
    return res.status(201).send(result)
})
route.post('/test/post/api', async(req: Request,res: Response) => {

    req.body['updated'] = new Date().getTime();
    const device = Devices.build(req.body)
    await device.save()
    return res.status(201).send(device)
})

route.put('/test/put/api', async(req: Request,res: Response) => {

    req.body.updation['updated'] = new Date().getTime();
    const devices = await Devices.updateMany({"imei": req.body.imei}, {"$set":req.body.updation});
    return res.status(201).send(devices)
})

export { route as todoRouter }