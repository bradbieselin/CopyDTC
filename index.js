const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "website", "src")));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, website, services, budget, message } = req.body;

  const servicesText = Array.isArray(services)
    ? services.join(", ")
    : services || "None selected";

  const mailOptions = {
    from: `"CopyDTC Contact Form" <${process.env.GMAIL_USER}>`,
    to: process.env.CONTACT_EMAIL || "bradley.bieselin@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Website: ${website || "Not provided"}`,
      `Services: ${servicesText}`,
      `Budget: ${budget || "Not specified"}`,
      ``,
      `Message:`,
      message || "No message provided",
    ].join("\n"),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.redirect("/?submitted=true");
  } catch (err) {
    console.error("Email send error:", err);
    res.redirect("/?submitted=error");
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "website", "src", "index.html"));
});

app.listen(PORT, () => {
  console.log(`CopyDTC server running on port ${PORT}`);
});
