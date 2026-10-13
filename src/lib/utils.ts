

// const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzBnpLLZoGortKAllWaElMwJOf8VOZkWB-SEA7bOVM-Poia1zm4ai61pJu_UNoVSxQ2/exec";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbybYFg47qe2i2ecKPPOKfwoz3D4kJ3Pbax5meFbHqCLNMtzuwfFdeHYtkBvX_v4HK_4aw/exec"

export async function submitLeadToGoogleSheet(formData: {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  message?: string;
  project: string; // "Signature Paradise" | "Signature Heritage" | "Ultimate Height"
}) {
  try {
    await fetch(GOOGLE_SCRIPT_URL,{
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return true;
  } catch (error) {
    console.error("Google Sheet submission error:", error);
    return false;
  }
}