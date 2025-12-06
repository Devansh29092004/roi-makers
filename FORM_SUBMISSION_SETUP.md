# Form Submission Setup Guide

## Current Status

### Contact Form (`src/app/contact/page.tsx`)

- **Current Behavior**: Opens user's email client with pre-filled data
- **Destination**: `hello@roimakers.com`
- **Data Collected**: Name, Email, Company, Phone, Service Type, Budget, Message

### Careers Form (`src/app/careers/page.tsx`)

- **Current Behavior**: Opens user's email client with pre-filled data
- **Destination**: `careers@roimakers.com`
- **Data Collected**: Name, Email, Phone, Position, LinkedIn, Portfolio, Experience, Resume (manual attachment), Cover Letter

## ⚠️ Important: Current Implementation

Both forms currently use a **mailto:** fallback solution that:

1. Opens the user's default email client
2. Pre-fills the email with form data
3. Requires the user to click "Send" in their email client
4. Resume files need to be attached manually

**This is a temporary solution.** For production, you should implement one of the options below.

---

## Production-Ready Options

### Option 1: Backend API Route (Recommended)

Create API routes in Next.js to handle form submissions:

**1. Install email service SDK:**

```bash
npm install resend
# or
npm install @sendgrid/mail
# or
npm install nodemailer
```

**2. Create API route** (`src/app/api/contact/route.ts`):

```typescript
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await resend.emails.send({
      from: "contact@roimakers.com",
      to: "hello@roimakers.com",
      subject: `Contact Form: ${data.service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
```

**3. Update form submission:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      });
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    alert("Error submitting form. Please email us directly.");
  }
};
```

**Environment Variables (.env.local):**

```
RESEND_API_KEY=re_your_api_key_here
```

---

### Option 2: Third-Party Form Services (Easiest)

#### Using Formspree (No backend code needed)

**1. Sign up at [formspree.io](https://formspree.io)**

**2. Get your form endpoint**

**3. Update form submission:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you! We'll get back to you within 24 hours.");
      setFormData({
        /* reset form */
      });
    }
  } catch (error) {
    alert("Error submitting form.");
  }
};
```

#### Other Form Services:

- **Getform.io** - Similar to Formspree
- **Netlify Forms** - If hosting on Netlify
- **Web3Forms** - Free and simple

---

### Option 3: EmailJS (Frontend Only, No Backend)

**1. Install EmailJS:**

```bash
npm install @emailjs/browser
```

**2. Setup on [EmailJS.com](https://emailjs.com)**

**3. Update form:**

```typescript
import emailjs from "@emailjs/browser";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formData,
      "YOUR_PUBLIC_KEY"
    );

    alert("Thank you! We'll get back to you within 24 hours.");
    setFormData({
      /* reset */
    });
  } catch (error) {
    alert("Error submitting form.");
  }
};
```

---

### Option 4: Direct SMTP with Nodemailer

For careers form with file uploads, you'll need a backend API:

```typescript
// src/app/api/careers/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.formData();
  const resume = formData.get("resume") as File;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "careers@roimakers.com",
    subject: `Job Application: ${formData.get("position")}`,
    html: `
      <h2>New Job Application</h2>
      <p><strong>Name:</strong> ${formData.get("name")}</p>
      <p><strong>Email:</strong> ${formData.get("email")}</p>
      <!-- Add more fields -->
    `,
    attachments: resume
      ? [
          {
            filename: resume.name,
            content: Buffer.from(await resume.arrayBuffer()),
          },
        ]
      : [],
  };

  await transporter.sendMail(mailOptions);
  return NextResponse.json({ success: true });
}
```

**Environment Variables:**

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

---

## Recommended Setup for ROI Makers

**For Contact Form**: Use **Resend** or **Formspree** (quickest to implement)

**For Careers Form**: Use **Backend API with Resend** (best for file uploads)

### Why Resend?

- Clean API
- Generous free tier (100 emails/day)
- Great deliverability
- Easy file attachment handling
- Built for Next.js

### Next Steps:

1. Choose your email service provider
2. Create account and get API keys
3. Create API routes (`/api/contact`, `/api/careers`)
4. Update form submission handlers
5. Add `.env.local` with API keys
6. Test thoroughly before going live

---

## File Upload Handling

For the careers form resume upload, you'll need to:

1. **Convert file input to handle actual uploads** (currently it's just stored in state)
2. **Use FormData API** instead of JSON for file uploads
3. **Process files in API route** using libraries like `formidable` or Next.js built-in FormData handling

Example update needed in careers form:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    if (value) data.append(key, value);
  });

  const response = await fetch("/api/careers", {
    method: "POST",
    body: data, // Send as FormData, not JSON
  });

  // Handle response...
};
```

---

## Current Email Addresses

- **Contact Form** → `hello@roimakers.com`
- **Careers Form** → `careers@roimakers.com`

Make sure these email addresses are set up and monitored!

---

## Security Considerations

1. **Add rate limiting** to prevent spam
2. **Validate input** on backend (never trust client-side validation)
3. **Add CAPTCHA** (reCAPTCHA v3 recommended)
4. **Sanitize HTML** in email content
5. **Set file upload limits** (max 5MB for resumes)
6. **Validate file types** (only .pdf, .doc, .docx)

---

**Need help implementing?** Choose Option 2 (Formspree) for the quickest setup with zero backend code!
