import { connectDB } from "@/lib/db";
import Payment from "@/models/Payment";
import crypto from "crypto";

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

  const sign = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSign = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
    .update(sign)
    .digest("hex");

  if (razorpay_signature !== expectedSign) {
    return Response.json({ success: false, message: "Signature invalid" }, { status: 400 });
  }

  await Payment.create({
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
    signature: razorpay_signature,
    amount: 50000,
    currency: "INR",
    status: "success",
  });

  return Response.json({ success: true, message: "Payment verified!" });
}
