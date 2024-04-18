import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import { lucasEmailTemplate, userEmailTemplate } from "./emailTemplates";

const myEmail = process.env.MY_EMAIL ?? ''
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const body = await req.json()

  try {
    const { email, subject, message } = body

    if (!email || !subject || !message) {
      throw new Error('')
    }

    const emailSendResponse = await resend.emails.send({
      from: 'Lucas <lucas@munhoz.tech>',
      to: [myEmail],
      subject: `Protfolio: ${subject}`,
      html: lucasEmailTemplate({ email, subject, message })
    });

    // IF RESEND FAILS
    if (emailSendResponse.error) {
      throw new Error('')
    }

    const { data } = await resend.emails.get(emailSendResponse.data?.id ?? '')

    // // IF EMAILS BOUNCE
    if(data?.last_event == 'bounced') {
      throw new Error('')
    }

    await resend.emails.send({
      from: 'Lucas <lucas@munhoz.tech>',
      to: [email],
      subject: `Email successfully sent to Lucas.`,
      html: userEmailTemplate()
    });

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    return NextResponse.json({}, { status: 400 });
  }
}