import { NextRequest, NextResponse } from "next/server";

// ✅ PASTE YOUR GOOGLE APPS SCRIPT URL HERE
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5tvuoUbaX6r_kF6QIQJT2s9kq0rFM6VIrhcZ2ObTLHgtTS5dvJh2tnkqHAzYfLwcqWA/exec";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to submit to Google Sheets");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit" },
      { status: 500 }
    );
  }
}