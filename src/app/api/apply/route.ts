import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import formidable from "formidable";
import { connectDB } from "@/lib/db";
import Apply from "@/models/Apply";
import { transporter } from "@/lib/nodemailer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

function parseForm(req: any) {
  const form = formidable({
    uploadDir,
    keepExtensions: true,
    multiples: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    const httpReq: any = req; // required for formidable
    const { fields, files }: any = await parseForm(httpReq);

    const fullName = fields.fullName;
    const email = fields.email;
    const phone = fields.phone;
    const coverLetter = fields.coverLetter;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const file = files.resume;
    if (!file)
      return NextResponse.json(
        { message: "Resume is required" },
        { status: 400 }
      );

    const originalName = file.originalFilename || "resume.pdf";
    const ext = path.extname(originalName);
    const newFileName = `${Date.now()}_${fullName.replace(/ /g, "_")}${ext}`;
    const newPath = path.join(uploadDir, newFileName);

    await fs.promises.rename(file.filepath, newPath);

    await connectDB();

    await Apply.create({
      fullName,
      email,
      phone,
      coverLetter,
      resumeFilename: newFileName,
    });

    await transporter.sendMail({
      from: `"HR Notifications" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🧑‍💼 New Job Application — ${fullName}`,
      html: `
        <h2>New Application Received</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${coverLetter || "No cover letter provided."}</p>
      `,
      attachments: [
        {
          filename: originalName,
          path: newPath,
        },
      ],
    });

    return NextResponse.json({
      message: "Application submitted successfully",
    });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { message: "Server Error", error: String(err) },
      { status: 500 }
    );
  }
}
