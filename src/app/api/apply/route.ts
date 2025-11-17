import { connectDB } from "@/lib/db";
import Apply from "@/models/Apply";
import { transporter } from "@/lib/nodemailer";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  console.log("👉 API HIT: /api/apply");

  try {
    await connectDB();
    console.log("👉 MONGO CONNECTED");

    const contentType = req.headers.get("content-type") || "";
    console.log("👉 CONTENT TYPE:", contentType);

    let fullName, email, phone, coverLetter, fileUrl;

    // ----- CASE 1: JSON -----
    if (contentType.includes("application/json")) {
      console.log("👉 JSON REQUEST RECEIVED");

      const body = await req.json();
      console.log("👉 JSON BODY:", body);

      fullName = body.fullName;
      email = body.email;
      phone = body.phone;
      coverLetter = body.coverLetter;
      fileUrl = body.resume || null;
    }

    // ----- CASE 2: Form-Data -----
    else if (contentType.includes("multipart/form-data")) {
      console.log("👉 FORM-DATA REQUEST RECEIVED");

      const formData = await req.formData();
      console.log("👉 FORM DATA RECEIVED:", formData);

      fullName = formData.get("fullName") as string;
      email = formData.get("email") as string;
      phone = formData.get("phone") as string;
      coverLetter = formData.get("coverLetter") as string;
      const resume = formData.get("resume") as File;

      console.log("👉 FILE RECEIVED:", resume?.name);

      if (resume) {
        const buffer = Buffer.from(await resume.arrayBuffer());
        const fileName = `${Date.now()}-${resume.name}`;
        const uploadsDir = path.join(process.cwd(), "public/resumes");

        if (!fs.existsSync(uploadsDir)) {
          fs.mkdirSync(uploadsDir, { recursive: true });
          console.log("👉 UPLOAD DIRECTORY CREATED");
        }

        const filePath = path.join(uploadsDir, fileName);
        fs.writeFileSync(filePath, buffer);

        fileUrl = `/resumes/${fileName}`;

        console.log("👉 FILE SAVED AT:", fileUrl);
      }
    }

    else {
      console.log("❌ INVALID CONTENT TYPE RECEIVED");
      return NextResponse.json(
        { error: "Invalid Content-Type. Use JSON or form-data." },
        { status: 400 }
      );
    }

    console.log("👉 SAVING DB RECORD...");

    const application = await Apply.create({
      fullName,
      email,
      phone,
      coverLetter,
      resume: fileUrl,
    });

    console.log("👉 SAVED TO DB:", application._id);

    console.log("👉 SENDING EMAIL...");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
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
    });

    console.log("👉 EMAIL SENT SUCCESSFULLY");

    return NextResponse.json(
      { success: true, message: "Applied successfully", application },
      { status: 201 }
    );

  } catch (error) {
    console.error("❌ SERVER ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
