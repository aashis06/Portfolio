# Email Configuration Guide

## Gmail SMTP Setup for Contact Form

Your portfolio contact form is now fully functional and ready to receive messages. Follow these steps to configure Gmail SMTP.

### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account: https://myaccount.google.com
2. Navigate to **Security**
3. Enable **2-Step Verification** if not already enabled

### Step 2: Generate App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Select **Mail** as the app
3. Select **Other (Custom name)** as the device
4. Enter "Portfolio Contact Form"
5. Click **Generate**
6. Copy the 16-character password (remove spaces)

### Step 3: Configure Environment Variables

Create a `.env.local` file in your project root:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
```

**Important:**
- Use your actual Gmail address for `EMAIL_USER`
- Use the App Password (NOT your regular Gmail password) for `EMAIL_PASS`
- Never commit `.env.local` to Git (it's already in .gitignore)

### Step 4: Test Locally

```bash
# Start development server
npm run dev

# Visit http://localhost:3000
# Navigate to Contact section
# Fill out and submit the form
# Check your Gmail inbox for the message
```

### Step 5: Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add `EMAIL_USER` with your Gmail address
   - Add `EMAIL_PASS` with your App Password
4. Redeploy

### Features Implemented

✅ **Validation**
- Email format validation
- Field length validation (name: 2-100, message: 10-1000 chars)
- Required field checking

✅ **Anti-Spam Protection**
- Rate limiting (3 emails per hour per IP)
- Spam keyword detection
- Input sanitization

✅ **User Experience**
- Loading state with spinner
- Success/error messages
- Form reset on success
- Disabled state during submission

✅ **Email Template**
- Professional HTML email design
- Includes sender name, email, and message
- Reply-to configured for easy responses
- Plain text fallback

### Troubleshooting

**"Invalid login" error:**
- Make sure you're using an App Password, not your regular password
- Verify 2-Factor Authentication is enabled
- Check that EMAIL_USER matches the Gmail account

**"Email service not configured" error:**
- Environment variables are missing
- Check `.env.local` file exists
- Restart development server after adding variables

**Rate limit error:**
- Wait 1 hour before trying again
- Or restart the server to reset in-memory rate limit

**Gmail blocks the email:**
- Check Gmail's "Less secure app access" settings
- Verify the App Password is correct
- Try generating a new App Password

### Security Notes

- App Passwords are safer than using your main password
- Rate limiting prevents spam abuse
- Input validation prevents injection attacks
- Never expose EMAIL_PASS in client-side code
- Keep .env.local in .gitignore

### Alternative: Using a Different Email Service

If you prefer not to use Gmail, you can modify the transporter in `app/api/contact/route.ts`:

```typescript
// For Outlook/Hotmail
const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// For custom SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Testing Checklist

- [ ] Environment variables configured
- [ ] Form submits without errors
- [ ] Email received in inbox
- [ ] Reply-to works correctly
- [ ] Loading state displays
- [ ] Success message shows
- [ ] Error handling works
- [ ] Rate limiting prevents spam
- [ ] Works on mobile devices
- [ ] Deployed and tested on Vercel

---

**Need Help?**
- Email: aashisacharya60@gmail.com
- GitHub: github.com/aashis06

Your contact form is production-ready! 🎉
