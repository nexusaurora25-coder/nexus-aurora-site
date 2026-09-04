import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const TO_EMAIL = "sales@nexus-aurora.com";
const FROM_EMAIL = "noreply@nexus-aurora.com";
const FROM_NAME = "Nexus Aurora Website";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { type, ...data } = body;

    let subject = "";
    let htmlContent = "";

    if (type === "contact") {
      subject = `Contact Form: ${data.name} — ${data.service || "General Inquiry"}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: linear-gradient(135deg, #1d4ed8, #0d9488); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Name</td><td style="padding: 8px 0;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #1d4ed8;">${data.email}</a></td></tr>
              ${data.company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Company</td><td style="padding: 8px 0;">${data.company}</td></tr>` : ""}
              ${data.service ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Service</td><td style="padding: 8px 0;">${data.service}</td></tr>` : ""}
              ${data.budget ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Budget</td><td style="padding: 8px 0;">${data.budget}</td></tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="font-weight: bold; color: #475569; margin: 0 0 8px;">Message</p>
              <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
            </div>
            <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">Submitted: ${new Date().toLocaleString("en-MY", { timeZone: "Asia/Kuala_Lumpur" })}</p>
          </div>
        </div>
      `;
    } else if (type === "appointment") {
      subject = `Meeting Request: ${data.name} — ${data.service}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: linear-gradient(135deg, #1d4ed8, #0d9488); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Meeting Request</h1>
          </div>
          <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
            <h3 style="color: #1e293b; margin: 0 0 16px;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Name</td><td style="padding: 8px 0;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #1d4ed8;">${data.email}</a></td></tr>
              ${data.phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone</td><td style="padding: 8px 0;">${data.phone}</td></tr>` : ""}
              ${data.company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Company</td><td style="padding: 8px 0;">${data.company}</td></tr>` : ""}
            </table>
            <h3 style="color: #1e293b; margin: 24px 0 16px;">Meeting Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Service</td><td style="padding: 8px 0;">${data.service}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Date</td><td style="padding: 8px 0;">${data.date}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Time</td><td style="padding: 8px 0;">${data.time}</td></tr>
            </table>
            ${data.message ? `<div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;"><p style="font-weight: bold; color: #475569; margin: 0 0 8px;">Additional Notes</p><p style="margin: 0; white-space: pre-wrap;">${data.message}</p></div>` : ""}
            <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">Submitted: ${new Date().toLocaleString("en-MY", { timeZone: "Asia/Kuala_Lumpur" })}</p>
          </div>
        </div>
      `;
    } else if (type === "quote") {
      subject = `Quote Request: ${data.name} — ${data.service}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: linear-gradient(135deg, #1d4ed8, #0d9488); padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Quote Request</h1>
          </div>
          <div style="background: #f8fafc; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
            <h3 style="color: #1e293b; margin: 0 0 16px;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Name</td><td style="padding: 8px 0;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #1d4ed8;">${data.email}</a></td></tr>
              ${data.phone ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone</td><td style="padding: 8px 0;">${data.phone}</td></tr>` : ""}
              ${data.company ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Company</td><td style="padding: 8px 0;">${data.company}</td></tr>` : ""}
            </table>
            <h3 style="color: #1e293b; margin: 24px 0 16px;">Project Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Service</td><td style="padding: 8px 0;">${data.service}</td></tr>
              ${data.projectType ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Project Type</td><td style="padding: 8px 0;">${data.projectType}</td></tr>` : ""}
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Budget</td><td style="padding: 8px 0;">${data.budget}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Timeline</td><td style="padding: 8px 0;">${data.timeline}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="font-weight: bold; color: #475569; margin: 0 0 8px;">Project Description</p>
              <p style="margin: 0; white-space: pre-wrap;">${data.description}</p>
            </div>
            ${data.requirements ? `<div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e2e8f0;"><p style="font-weight: bold; color: #475569; margin: 0 0 8px;">Specific Requirements</p><p style="margin: 0; white-space: pre-wrap;">${data.requirements}</p></div>` : ""}
            <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">Submitted: ${new Date().toLocaleString("en-MY", { timeZone: "Asia/Kuala_Lumpur" })}</p>
          </div>
        </div>
      `;
    } else {
      return new Response(JSON.stringify({ error: "Invalid email type" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        reply_to: data.email,
        subject,
        html: htmlContent,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send email");
    }

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});


