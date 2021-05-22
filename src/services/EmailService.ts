interface ImailTo{
name:string;
email:string;
}

interface ImailMessage{
subject: string;
body: string;
attachment ?: string[];
}

interface IMessageDTO{

    to: ImailTo; message: ImailMessage;

}

interface IEmailService{
sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService{
sendMail({to, message }: IMessageDTO){
    console.log(`Email enviado para ${to.name}: ${message.subject}`)
}



}


export default EmailService;