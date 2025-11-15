import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Apply from "@/models/Apply";
import { transporter } from "@/lib/nodemailer";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const { fullName, email, phone, coverLetter } = body;

    if (!fullName || !email || !phone || !coverLetter) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const application = await Apply.create({
      fullName,
      email,
      phone,
      coverLetter,
    });

    const naodemailer = await process.env.EMAIL_USER;
    const mailOptions = {
      from: naodemailer,
      to: email,
      subject: "Application Received",
      html: `
  <div style="font-family: Arial, sans-serif; background:#f5f7fa; padding:30px;">
  <div style="max-width:600px; margin:auto; background:white; border-radius:10px; box-shadow:0 4px 14px rgba(0,0,0,0.1); overflow:hidden;">

    <!-- Header -->
    <div style="background:#0d1a59; padding:20px 30px; text-align:center;">
      <img src="https://i.postimg.cc/Hkz9wGDW/mabsol.png" alt="MABSOL Logo" style="max-width:180px;">
      <h2 style="color:white; margin-top:15px; font-weight:500;">New Job Application Submitted</h2>
    </div>

    <!-- Body -->
    <div style="padding:30px; color:#333;">

      <p style="font-size:16px; line-height:1.6;">
        A new job application has been received for one of the open positions at 
        <strong>MABSOL Infotech Pvt. Ltd.</strong>  
        The candidate’s details have been included below for your review.
      </p>

      <table style="width:100%; font-size:15px; margin-top:15px;">
        <tr>
          <td style="font-weight:bold; padding:8px 0;">Name:</td>
          <td>${fullName}</td>
        </tr>
        <tr>
          <td style="font-weight:bold; padding:8px 0;">Email:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td style="font-weight:bold; padding:8px 0;">Phone:</td>
          <td>${phone}</td>
        </tr>
        <tr>
          <td style="font-weight:bold; padding:8px 0;">Cover Letter:</td>
          <td>${coverLetter}</td>
        </tr>
      </table>

      <div style="text-align:center; margin-top:30px;">
        <a href="#" style="background:#0d1a59; color:white; padding:12px 25px; border-radius:6px; text-decoration:none; font-weight:bold;">
          View Candidate Profile
        </a>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#eef1f7; padding:15px 20px; text-align:center; font-size:13px; color:#666;">
      © 2025 MABSOL Infotech Pvt. Ltd. | Automated job application notification.
    </div>

  </div>
</div>

`
    };
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: "Application submitted & email sent", data: application },
      { status: 201 }
    );
  } catch (error) {
    console.error("ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
