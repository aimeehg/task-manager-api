const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'hernandez.aimee@outlook.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email, 
        from: 'hernandez.aimee@outlook.com',
        subject: 'Sorry to se you go! :(',
        text: `Goodbye, ${name}. I hope t se you back sometime soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}