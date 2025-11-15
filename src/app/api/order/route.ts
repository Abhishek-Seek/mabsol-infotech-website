import Razorpay from "razorpay";

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await razorpay.orders.create({
      amount: 50000,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    return Response.json(order);
  } catch (error: any) {
    console.log("ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
