// import { NextRequest, NextResponse } from "next/server";

// // ✅ PASTE YOUR GOOGLE APPS SCRIPT URL HERE
// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5tvuoUbaX6r_kF6QIQJT2s9kq0rFM6VIrhcZ2ObTLHgtTS5dvJh2tnkqHAzYfLwcqWA/exec";

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();

//     const response = await fetch(GOOGLE_SCRIPT_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to submit to Google Sheets");
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to submit" },
//       { status: 500 }
//     );
//   }
// }




// app/api/lead/route.ts

import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw5tvuoUbaX6r_kF6QIQJT2s9kq0rFM6VIrhcZ2ObTLHgtTS5dvJh2tnkqHAzYfLwcqWA/exec";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const params = new URLSearchParams({
      name: body.name || "",
      phone: body.phone || "",
      email: body.email || "",
      requirement: body.requirement || "",
      source: body.source || "",
      timestamp: new Date().toISOString(),
    });

    const url = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
    });

    const text = await response.text();
    console.log("Google Script Response:", text);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit" },
      { status: 500 }
    );
  }
}