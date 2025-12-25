# Contact Form Integration Guide

The contact form has been temporarily hidden. Here are the easiest ways to make it functional:

## Option 1: Formspree (Easiest - Recommended) ⭐

**Setup Time:** 5 minutes  
**Cost:** Free tier available (50 submissions/month)

### Steps:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form endpoint (e.g., `https://formspree.io/f/YOUR_FORM_ID`)
3. Update the form submission in `App.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    
    if (response.ok) {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    alert('Sorry, there was an error. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Option 2: EmailJS (Client-Side Only)

**Setup Time:** 10 minutes  
**Cost:** Free tier available (200 emails/month)

### Steps:
1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Install EmailJS: `npm install @emailjs/browser`
5. Update `App.tsx`:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  } catch (error) {
    alert('Sorry, there was an error. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## Option 3: Netlify Forms (If Using Netlify)

**Setup Time:** 2 minutes  
**Cost:** Free

### Steps:
1. Add `netlify` attribute to your form:
```html
<form onSubmit={handleSubmit} netlify>
```

2. Add hidden input:
```html
<input type="hidden" name="form-name" value="contact" />
```

3. Netlify automatically handles form submissions!

---

## Option 4: Backend API (Most Control)

**Setup Time:** 30+ minutes  
**Cost:** Varies (can use free services like Vercel, Railway, etc.)

### Steps:
1. Create a backend API endpoint (Node.js, Python, etc.)
2. Use services like:
   - **SendGrid** for email
   - **Resend** for email (modern alternative)
   - **Nodemailer** (Node.js)
3. Update form to POST to your API endpoint

---

## Quick Recommendation

**For fastest setup:** Use **Formspree** (Option 1) - it's the quickest to implement and requires no backend.

**For production:** Consider **EmailJS** or a **Backend API** for more control and better deliverability.

---

## To Re-enable the Form

1. Uncomment the contact form section in `App.tsx` (lines 126-212)
2. Restore the two-column layout
3. Implement one of the options above
4. Test the form submission

