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

class EmailService{
sendMail({to, message }: IMessageDTO){
    console.log(`Email enviado para ${to.name}: ${message.subject}`)
}



}


export default EmailService;