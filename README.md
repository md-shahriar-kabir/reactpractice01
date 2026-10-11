# Assignment 1 : NexusFlow Landing Page (React + Vite + Tailwind CSS v4)

Learn with Sumit (LWS) - React & Next.js Assignment 1

এই প্রোজেক্টে প্রদত্ত সম্পূর্ণ HTML ও Tailwind CSS ল্যান্ডিং পেজ টেমপ্লেটটিকে **Vite**, **React**, এবং **Tailwind CSS v4** ব্যবহার করে ১০০% Pixel-Perfect ও Responsive ভাবে রূপান্তর করা হয়েছে।

---

## টেকনোলজি স্ট্যাক (Tech Stack)

- **Framework**: [React 19](https://react.dev/)
- **Bundler / Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Fonts**: `Geist` & `Geist Mono` via Google Fonts

---

## 📂 প্রোজেক্ট স্ট্রাকচার (Project Structure)

```text
├── public/
│   └── assets/
│       ├── icons/        # SVG আইকনসমূহ (logo, arrows, sparkles, zap, etc.)
│       ├── images/       # ইউজার অ্যাভাটারসমূহ
│       └── logos/        # পার্টনার কোম্পানির লোগোসমূহ
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # হেডার ও রেসপনসিভ মোবাইল ড্রয়ার মেনু
│   │   ├── Hero.jsx            # হিরো সেকশন, CLI কপি ফিচার ও টার্মিনাল প্রিভিউ
│   │   ├── LogoCloud.jsx       # ব্র্যান্ড লোগো গ্রিড (Array mapping)
│   │   ├── Features.jsx        # ফিচার সেকশন কন্টেইনার
│   │   ├── FeatureCard.jsx     # রিইউজেবল ফিচার কার্ড কম্পোনেন্ট
│   │   ├── Solutions.jsx       # ২-কলাম স্পটলাইট ও ভিজ্যুয়াল পাইপলাইন
│   │   ├── Stats.jsx           # স্ট্যাটস সেকশন কন্টেইনার
│   │   ├── StatCard.jsx        # রিইউজেবল স্ট্যাট কার্ড কম্পোনেন্ট
│   │   ├── Testimonials.jsx    # কাস্টমার টেস্টিমোনিয়াল কন্টেইনার
│   │   ├── TestimonialCard.jsx # রিইউজেবল টেস্টিমোনিয়াল কার্ড কম্পোনেন্ট
│   │   ├── Pricing.jsx         # প্রাইসিং সেকশন ও Monthly/Annual টগল
│   │   ├── PricingCard.jsx     # রিইউজেবল প্রাইসিং কার্ড কম্পোনেন্ট
│   │   ├── Faq.jsx             # এফএকিউ অ্যাকর্ডিয়ন সেকশন
│   │   ├── FaqItem.jsx         # রিইউজেবল এফএকিউ আইটেম কম্পোনেন্ট
│   │   ├── CtaBanner.jsx       # কল টু অ্যাকশন ব্যানার
│   │   └── Footer.jsx          # ফুটার এবং সিস্টেম স্ট্যাটাস বার
│   ├── data/
│   │   ├── brands.js           # ব্র্যান্ড লোগো ডেটা
│   │   ├── features.js         # ফিচার কার্ড ডেটা
│   │   ├── stats.js            # স্ট্যাটিস্টিক্স ডেটা
│   │   ├── testimonials.js     # কাস্টমার রিভিউ ডেটা
│   │   ├── pricing.js          # প্রাইসিং প্ল্যান ডেটা
│   │   └── faqs.js             # এফএকিউ ডেটা
│   ├── App.jsx                 # মেইন রুট কম্পোনেন্ট
│   ├── main.jsx                # রিঅ্যাক্ট মাউন্ট পয়েন্ট
│   └── index.css               # Tailwind CSS v4 ও কাস্টম থিম কনফিগারেশন
├── index.html                  # HTML এন্ট্রি পয়েন্ট
├── vite.config.js              # Vite কনফিগারেশন (@tailwindcss/vite প্লাগইনসহ)
└── package.json
```
