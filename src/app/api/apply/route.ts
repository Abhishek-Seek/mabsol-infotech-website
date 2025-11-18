// pages/api/apply.ts
import type { NextApiRequest, NextApiResponse } from "next";
// import { connectDB } from "../../lib/db";
// import Apply from "../../models/Apply";
// import { transporter } from "../../lib/nodemailer";

// import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";
import formidable from "formidable";
import { connectDB } from "@/lib/db";
import Apply from "@/models/Apply";
import { transporter } from "@/lib/nodemailer";

export const config = {
  api: { bodyParser: false }
};

const uploadDir = path.join(process.cwd(), "uploads");

// directory create if not exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

function parseFormData(req: NextApiRequest) {
  const form = new formidable.IncomingForm({
    uploadDir,
    keepExtensions: true,
    multiples: false
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  try {
    const { fields, files }: any = await parseFormData(req);

    const fullName = fields.fullName;
    const email = fields.email;
    const phone = fields.phone;
    const coverLetter = fields.coverLetter;

    if (!fullName || !email || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Resume file
    const file = files.resume as any;
    if (!file) return res.status(400).json({ message: "Resume is required" });

    const originalName = file.originalFilename || "resume.pdf";
    const ext = path.extname(originalName);
    const newFileName = `${Date.now()}_${fullName.replace(/ /g, "_")}${ext}`;
    const newPath = path.join(uploadDir, newFileName);

    await fs.promises.rename(file.filepath, newPath);

    // MongoDB Save
    await connectDB();

    await Apply.create({
      fullName,
      email,
      phone,
      coverLetter,
      resumeFilename: newFileName
    });

    // Email to Admin
//     await transporter.sendMail({
//       from: process.env.FROM_EMAIL,
//       to: process.env.ADMIN_EMAIL,
//       subject: `New Job Application from ${fullName}`,
//       text: `
// Full Name: ${fullName}
// Email: ${email}
// Phone: ${phone}

// Cover Letter:
// ${coverLetter || "No cover letter provided"}
//       `,
//       attachments: [
//         {
//           filename: originalName,
//           path: newPath
//         }
//       ]
//     });

await transporter.sendMail({
  from: `"HR Notifications" <${process.env.FROM_EMAIL}>`,
  to: process.env.ADMIN_EMAIL,
  subject: `🧑‍💼 New Job Application — ${fullName}`,

  html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f7fb;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">

      <div style="background: #004aad; padding: 20px;">
        <h2 style="color: white; margin: 0;">New Job Application Received</h2>
      </div>

      <div style="padding: 25px;">
        <p style="font-size: 15px; color: #333;">
          A new candidate has applied for the job. Below are the details:
        </p>

        <table style="width: 100%; margin-top: 15px; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px; border: 1px solid #eee;"><strong>Full Name:</strong></td>
            <td style="padding: 10px; border: 1px solid #eee;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 10px; border: 1px solid #eee;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #eee;"><strong>Phone:</strong></td>
            <td style="padding: 10px; border: 1px solid #eee;">${phone}</td>
          </tr>
        </table>

        <h3 style="margin-top: 25px;">Cover Letter</h3>
        <p style="background: #f1f1f1; padding: 10px; border-radius: 6px; color: #333;">
          ${coverLetter || "No cover letter provided."}
        </p>

        <p style="margin-top: 20px; font-size: 14px;">
          The applicant's resume is attached with this email.
        </p>

      </div>

      <div style="background: #f0f0f0; padding: 15px; text-align: center;">
        <p style="margin: 0; color: #666; font-size: 13px;">
          HR Dashboard – New Application Alert
        </p>
      </div>

    </div>
  </div>
  `,

  attachments: [
    {
      filename: originalName,
      path: newPath
    }
  ]
});


    return res.status(200).json({ message: "Application submitted successfully" });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ message: "Server Error", error: err });
  }
}
