import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config()

if(process.env.RESEND_API){
    console.log("Provide RESEND_API in side the .env fil")
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async({sendTo, subject, html})=>{
    try {
        const { data, error } = await resend.emails.send({
    from: 'Blinkit <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

    }catch(error){
        console.log(error)
    }
}

(async function () {
  

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();