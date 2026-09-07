# Premium UPI Payment Website

A simple, fast, and responsive static website for one-time premium access with UPI payments, dark glassmorphism aesthetic, coupon system, deep-link UPI support, and centralized configuration.

## 📁 File Structure

- **`index.html`**: Landing page with pricing, original price crossed out (₹999), current price (₹299), coupon input (`PREMIUM20` → ₹239), feature checklist, and checkout CTA.
- **`payment.html`**: Checkout page with discounted order summary, 3 UPI QR code options (`qr1.svg`, `qr2.svg`, `qr3.svg`), 1-click direct UPI deep-link button, UPI ID copy button, and payment completion flow.
- **`success.html`**: Order confirmation page with animated checkmark, "You're all set" headline, and 3 access buttons opening in new tabs.
- **`config.js`**: **Single configuration file** for your UPI ID, merchant name, prices, coupon, and destination links.
- **`styles.css`**: Dark glassmorphism theme, smooth animations, and mobile-first responsive layout.
- **`qr1.svg`, `qr2.svg`, `qr3.svg`**: Responsive SVG QR code placeholders for Google Pay, PhonePe, and Paytm / Universal UPI.

---

## ⚙️ Configuration (Edit in `config.js`)

Open `config.js` in any text editor to update your details:

```javascript
const CONFIG = {
  // 1. Your UPI ID and Name
  UPI_ID: "yourname@okhdfcbank",
  PAYMENT_NAME: "Your Brand Name",

  // 2. Pricing
  ORIGINAL_PRICE: 999,
  BASE_PRICE: 299,
  COUPON_CODE: "PREMIUM20",
  COUPON_DISCOUNT_PERCENT: 20, // 20% off gives ₹239

  // 3. Post-Payment Access Links (success.html)
  ACCESS_LINK: "https://your-resource-link.com",
  WEBSITE_LINK: "https://your-website.com",
  PRIVATE_YOUTUBE_LINK: "https://youtube.com/watch?v=your_video_id"
};
```

---

## 🖼️ How to Replace QR Codes

Replace `qr1.svg`, `qr2.svg`, and `qr3.svg` in this folder with your actual payment QR codes:
1. **Option A (SVG)**: Save your exported QR SVG file with the same name (`qr1.svg`, `qr2.svg`, `qr3.svg`).
2. **Option B (PNG / JPG)**: Place your images here (e.g. `gpay.png`, `phonepe.png`, `paytm.png`) and update the `file` attribute in `CONFIG.QR_CODES` inside `config.js`.

---

## 🚀 How to Publish for Free

### 1. Free Hosting on Netlify (Drag & Drop - 30 seconds)
1. Go to [netlify.com](https://www.netlify.com) and create a free account.
2. Go to the **Sites** tab and drag & drop this entire project folder into the upload box.
3. Your site is live instantly with a free HTTPS URL!

### 2. Free Hosting on GitHub Pages
1. Create a free repository on [GitHub](https://github.com) (e.g. `premium-upi-site`).
2. Upload all the files from this folder (`index.html`, `payment.html`, `success.html`, `styles.css`, `config.js`, `qr1.svg`, `qr2.svg`, `qr3.svg`).
3. Go to **Settings** → **Pages** → under **Branch**, choose `main` and `/ (root)` → Click **Save**.
4. Your site will be published at `https://<your-username>.github.io/premium-upi-site/`.

### 3. Free Hosting on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up for free.
2. Install the Vercel CLI (`npx vercel`) or connect your GitHub repository.
3. Deploy with zero configuration.
