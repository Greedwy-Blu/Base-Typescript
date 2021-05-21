import { Request, Response } from "express";
import EmailService from "../services/EmailService";
const users = [
    {name: 'Gabriel', email: 'teste²gmail.com'},
];



export default {async index(req:Request, res:Response) {
  return res.json(users);  

},

async create(req:Request, res:Response){
const emailService = new EmailService();

emailService.sendMail({to: {name: 'Gabriel',  email: 'Teste@gmail.com'},
message: {subject: 'Ola ', body:'Seja bem-vindo'}});

return res.send();
}
};