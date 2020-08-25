const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();

// View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Static folder
app.use("/public", express.static(path.join(__dirname, "public")));

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//route
app.get("/", (req, res) => {
  res.render("contact", { layout: false });
});

app.post("/send", (req, res) => {
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    name: "www.rehmaitsolutions.com",
    host: "mail.rehmaitsolutions.com",
    port: 587, //!change port if ssl is there
    secure: false, // true for 465, false for other ports //! if ssl is present then true
    auth: {
      user: "info@rehmaitsolutions.com", // generated ethereal user
      pass: "", // generated ethereal password
    },
    //!if doing from localhost , remove in production
    tls: {
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: `"Sender" <${req.body.email}>`, // sender address
    to: "info@rehmaitsolutions.com", // list of receivers
    subject: "Website Contact", // Subject line
    text: "Hey", // plain text body
    html: output, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log("Email sent: ", info.response);

    res.render("contact", { layout: false, msg: "Email has been sent" });
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started to run on Port ${PORT}`);
});

//any css, images , client side js goes in public folder
