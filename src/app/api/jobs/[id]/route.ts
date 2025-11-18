import { NextRequest, NextResponse } from "next/server";
import Job from "@/models/Job";
import { connectDB } from "@/lib/db";

export const dynamic = "force-dynamic";

// ------------------ GET Job by ID ------------------
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!id) throw new Error("Job ID not provided");

    const job = await Job.findById(id);

    if (!job) {
      return NextResponse.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }

    // Check expiry
    const now = new Date();
    if (job.expireAt < now) {
      return NextResponse.json(
        { success: false, message: "Job has expired" },
        { status: 410 }
      );
    }

    return NextResponse.json({ success: true, job });
  } catch (error: any) {
    console.error("JOB GET ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ------------------ DELETE Job ------------------
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return NextResponse.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error: any) {
    console.error("JOB DELETE ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// ------------------ UPDATE Job ------------------
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    const body = await req.json();

    if (body.expireDays) {
      const now = new Date();
      body.expireAt = new Date(now.setDate(now.getDate() + body.expireDays));
      delete body.expireDays;
    }

    const updatedJob = await Job.findByIdAndUpdate(id, body, { new: true });

    if (!updatedJob) {
      return NextResponse.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, job: updatedJob });
  } catch (error: any) {
    console.error("JOB PATCH ERROR:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
