"use server";

import { z } from "zod";
import { formSchema } from "./schemas";
import { EmailTemplate } from '../components/ui/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {

    const { error } = await resend.emails.send({
        from: `Resend <${process.env.RESEND_FROM_EMAIL}>`,
        to: [emailFormData.email],
        subject: 'NEW Contact Form Submission',
        react: await EmailTemplate({ firstName: emailFormData.firstName, lastName: emailFormData.lastName, email: emailFormData.email, message: emailFormData.message}),
      });

    if (error) {
        throw error;
    }
}