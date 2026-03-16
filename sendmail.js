import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); 

export async function sendMail(data) {
  console.log(data)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });




 await transporter.sendMail({
  from:`"Juvenis Clinic" <${process.env.GMAIL_USER}>`,
  to: data.email,
  subject: `✅ Appointment Request Submitted - ${data.name}`,
  html: `
  <div style="background:#f4f4f4; padding:40px 0; font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
      
      <div style="background:#4b79a1; background:linear-gradient(90deg,#4b79a1 0%,#283e51 100%); padding:20px; text-align:center;">
        <h1 style="margin:0; font-size:24px; color:#ffffff;">Your Appointment is Confirmed</h1>
      </div>
      
      <div style="padding:30px;">
        <p style="font-size:16px; color:#333;">Hello <strong>${data.name}</strong>,</p>
        <p style="font-size:16px; color:#333;">Thank you for booking with us. Here are your appointment details:</p>
        
        <table style="width:100%; border-collapse:collapse; margin:20px 0;">
          <tr>
            <td style="padding:8px 0; font-weight:bold; color:#555;">Name:</td>
            <td style="padding:8px 0;">${data.name}</td>
          </tr>
          <tr style="background:#f9f9f9;">
            <td style="padding:8px 0; font-weight:bold; color:#555;">Email:</td>
            <td style="padding:8px 0;">${data.email}</td>
          </tr>
        </table>
        
        <p style="font-weight:bold; margin-top:20px; color:#333;">Message:</p>
        <p style="background:#f6f6f6; padding:15px; border-radius:6px; font-size:15px; color:#555;">${data.message}</p>
        
        <p style="font-size:16px; color:#333;">Our team will get in touch with you shortly to confirm your appointment and assist you further.</p>
        <p style="margin-top:30px; font-size:14px; color:#888;">Best regards,<br><strong>Juvenis Clinic</strong></p>
      </div>
      
      <div style="background:#f4f4f4; text-align:center; padding:15px; font-size:12px; color:#999;">
        This is an automated confirmation. If you have questions, please contact us.
      </div>
      
    </div>
  </div>
  `
});


}

// export async function POST(req) {
//   const data = await req.json();
//   const response = new Response(JSON.stringify({ ok: true }), { status: 200 });
//   await sendMail(data);
//   return response;
// }


