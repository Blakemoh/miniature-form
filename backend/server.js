const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error with transporter: ', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

const loadTemplate = (templateName, data) => {
  const filePath = path.join(__dirname, 'templates', `${templateName}.html`);
  const source = fs.readFileSync(filePath, 'utf-8').toString();
  const template = handlebars.compile(source);
  return template(data);
};

app.post('/send', upload.fields([{ name: 'document1' }, { name: 'document2' }]), async (req, res) => {
  const formData = req.body;
  const files = req.files;

  console.log('Uploaded files:', files);

  const recipientEmail = formData.email;

  if (!recipientEmail) {
    return res.status(400).send('Recipient email address is missing');
  }

  const emailData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    address1: formData.address1,
    address2: formData.address2,
    city: formData.city,
    state: formData.state,
    country: formData.country,
    email: formData.email,
    phone: formData.phone,
    introductoryMessage: formData.introductoryMessage,
    position: formData.position,
    yearsOfExperience: formData.yearsOfExperience,
    currentlyEmployed: formData.currentlyEmployed,
    employmentReasonTitle: formData.currentlyEmployed === 'Yes' ? 'Reason for leaving current job' : 'Reason for leaving last job',
    employmentReason: formData.employmentReason,
    selfDescription: formData.selfDescription,
    workForUs: formData.workForUs,
    pastAccomplishment: formData.pastAccomplishment,
    workEnvironment: formData.workEnvironment,
    specialSkills: formData.specialSkills,
    strengthsWeaknesses: formData.strengthsWeaknesses,
    helpGettingJobDone: formData.helpGettingJobDone
  };

  const userEmailHtml = loadTemplate('userEmailTemplate', emailData);
  const ownerEmailHtml = loadTemplate('ownerEmailTemplate', emailData);

  const mailOptionsUser = {
    from: process.env.SMTP_USER,
    to: recipientEmail,
    replyTo: process.env.OWNER_EMAIL,  // Set reply-to address to owner's email
    subject: 'Re:Application Confirmation from Johnson & Johnson',
    html: userEmailHtml,
  };

  const mailOptionsOwner = {
    from: process.env.SMTP_USER,
    to: process.env.OWNER_EMAIL,
    subject: 'New Application Received',
    html: ownerEmailHtml,
    attachments: []
  };

  const attachments = [];
  if (files.document1 && files.document1[0]) {
    attachments.push({
      filename: files.document1[0].originalname,
      path: files.document1[0].path,
    });
  }

  if (files.document2 && files.document2[0]) {
    attachments.push({
      filename: files.document2[0].originalname,
      path: files.document2[0].path,
    });
  }

  console.log('Attachments:', attachments);

  mailOptionsOwner.attachments = attachments;

  try {
    await transporter.sendMail(mailOptionsUser);
    await transporter.sendMail(mailOptionsOwner);
    res.status(200).send('Emails sent successfully');
  } catch (error) {
    console.error('Error sending emails: ', error);
    res.status(500).send('Error sending emails');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
