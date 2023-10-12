//@ts-ignore
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "supattra.chansawad@gmail.com",
    pass: "pcujsxwudkttnkjy",
  },
});

export default transporter;
