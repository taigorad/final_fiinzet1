import nodemailer from '../config/nodemailer.js'

export const contactMailer = (user)=>{
    console.log('LOG : Launching Contact Mailer',user);

    let htmlString = nodemailer.renderTemplate({user},'/contact_mailer.ejs')

    nodemailer.transport.sendMail({
        // from : 'ajit.amane1901@gmail.com',
        from : 'fiinzet1@gmail.com',
       
        //to : "taigorad5@gmail.com",
        to:"ajit.amane@fiinzet.com",
        subject : 'New Contact Added',
        html : htmlString
    },(err,info)=>{
        if(err){
            console.log('ERROR : Error in sending mail',err)
            return;
        }
        console.log('INFO : Email Sent Successfully',info);
    })
}

