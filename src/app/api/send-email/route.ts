import type { NextApiRequest, NextApiResponse } from "next";

import { NextResponse } from "next/server";

import transporter from "@/config/nodemailerConfig";

export async function POST(req: Request) {
  try {
    let body = await req.json();

    let mailOptions = {
      to: "supattra.chansawad@gmail.com",
      from: body.email,
      subject: `${body?.name || "Someone"} is contacting you from portfolio.`,
      text: body.message,
    };

    //@ts-ignore
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return NextResponse.json({
          message: "Error on send email.",
          status: false,
        });
      } else {
        // console.log('Email sent: ' + info.response);
      }
    });

    return NextResponse.json({
      message: "Send email successfully.",
      status: true,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: false });
  }
}
