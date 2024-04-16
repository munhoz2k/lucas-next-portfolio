import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

import { ReactEmailTemplate, SimpleEmailTemplate } from "./emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await resend.emails.send({
      from: 'Lucas <lucas@munhoz.tech>',
      to: ['lucasmunhozarruda@gmail.com'],
      subject: 'Contact E-mail',
      react: ReactEmailTemplate({ firstName: 'Lucas' }),
      html: SimpleEmailTemplate({ firstName: 'Lucas' })
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}