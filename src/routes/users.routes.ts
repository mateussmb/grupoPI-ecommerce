import { Router, Request, Response, NextFunction } from "express";
import {StatusCodes} from 'http-status-codes'

 const usersRoute =  Router();

 usersRoute.get('/',(req: Request, res:Response, next:NextFunction)=>{
    const users = [{"username":" Wasse","password":"admin"}];
    res.json(users);
    res.status(StatusCodes.OK).send(users)
 });

 usersRoute.get('/users/:uuid', (req: Request<{uiid:string}>, res:Response, next:NextFunction)=>{
    
    const uuid = req.params.uiid;
    //banncoDeDados.getUserByUUid(uuid)
    res.status(StatusCodes.OK).send({uuid});
 });

 usersRoute.post('/users',(req: Request, res:Response, next:NextFunction)=> {
    const newUser = req.body;
    console.log(req.body);
    res.send(StatusCodes.CREATED).send(newUser);
 });

 usersRoute.put('/users/:uuid',(req: Request<{uuid:string}>, res:Response, next:NextFunction)=>{   
    const uuid =  req.params;
    const modifiedUser = req.body;

    modifiedUser.uiid = uuid;
    res.status(StatusCodes.OK).send(modifiedUser);
 });

 usersRoute.delete('/users/:uuid',(req: Request<{uuid:string}>,res: Response, next:NextFunction)=>{
    
    res.sendStatus(StatusCodes.OK);
 })

export default  usersRoute;