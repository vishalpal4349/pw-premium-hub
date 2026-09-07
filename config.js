/**
 * ============================================================================
 *               PW PREMIUM HUB - CENTRAL DATA & CONFIGURATION
 * ============================================================================
 * Payee Name: Aditya Kumar Dubey | WhatsApp Help: Direct via wa.me
 * Access Portal: https://pwthor.live (Unlocks after payment)
 * Features: Exam Infinity Packs, Smart Lucky Spinner, Tiered Referral Payouts
 * ============================================================================
 */

const DEFAULT_CONFIG = {
  // Brand & Portal
  BRAND_NAME: "PW Premium Hub",
  APP_PORTAL_LINK: "https://pwthor.live",
  PRIVATE_YOUTUBE_LINK: "https://www.youtube.com/embed/dQw4w9WgXcQ",

  // UPI Payment Details (Merchant UPI)
  UPI_ID: "7970870147@fam",
  PAYMENT_NAME: "Aditya Kumar Dubey",
  TRANSACTION_NOTE: "PW Batch Infinity Access",

  // Uploaded Payment QR Image
  PRIMARY_QR_IMAGE: "payment_qr.jpg",

  // WhatsApp Support (Opens WhatsApp directly without displaying the raw number)
  WHATSAPP_PHONE: "7631442934",
  SUPPORT_WHATSAPP: "https://wa.me/917631442934?text=Hello%2C%20I%20need%20help%20with%20PW%20Batch%20Access",

  // Commission & Coupons
  REFERRAL_COMMISSION_PERCENT: 40, // Upto 30%-50%
  MIN_ORDER_FOR_COUPON: 199,

  // Admin Login Credentials (3-Tier Authentication)
  ADMIN_EMAIL: "onlyfaltu39@gmail.com",
  ADMIN_PIN: "Vishu@001",
  ADMIN_SECURITY_CODE: "0000",

  // Video Links (Configurable via Admin Panel)
  HOW_TO_BUY_VIDEO: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  PRIVATE_YOUTUBE_LINK: "https://www.youtube.com/embed/dQw4w9WgXcQ",

  // Categories (PW Exam Verticals - Complete Coverage)
  CATEGORIES: [
    { id: "all", name: "🔥 All Exam Packs", icon: "🔥" },
    { id: "jee", name: "IIT-JEE (Mains+Adv)", icon: "⚛️" },
    { id: "neet", name: "NEET UG Medical", icon: "🩺" },
    { id: "foundation", name: "Class 6-10 Foundation", icon: "🌱" },
    { id: "defence", name: "NDA, CDS & Defence", icon: "🎖️" },
    { id: "upsc", name: "UPSC & State PCS", icon: "🏛️" },
    { id: "ssc", name: "SSC & Railway", icon: "🚆" },
    { id: "banking", name: "Banking & Insurance", icon: "🏦" },
    { id: "gate", name: "GATE & Engineering", icon: "⚙️" },
    { id: "cuet", name: "CUET UG Entrance", icon: "🎓" },
    { id: "teaching", name: "Teaching (CTET/TET)", icon: "📚" },
    { id: "commerce", name: "Commerce & CA", icon: "📊" }
  ],

  // Exam-Level Complete Infinity Batches (Full PW Exam Coverage)
  BATCHES: [
    {
      id: "b-jee-infinity",
      category: "jee",
      name: "IIT-JEE Infinity All-Batch Pass (11th, 12th & Droppers)",
      tag: "🔥 BEST SELLER • JEE PASS",
      badgeColor: "#6366f1",
      description: "Complete access to ALL JEE batches (Lakshya 12th, Arjuna 11th & Prayas Dropper 1.0, 2.0, 3.0) with live classes, DPPs, test series & Khazana.",
      originalPrice: 4999,
      offerPrice: 299,
      features: [
        "All JEE Batches (Arjuna, Lakshya, Prayas 1.0, 2.0, 3.0)",
        "Daily Live & Recorded 1080p Lectures with Unlimited Re-watch",
        "Infinity Chapter-wise DPPs with Video Solutions & Notes PDF",
        "Full Length Mock Tests + Rank Predictor + Khazana Lectures",
        "🎁 Exclusive Bonus: Secret Telegram Doubt Community Access"
      ]
    },
    {
      id: "b-neet-infinity",
      category: "neet",
      name: "NEET UG Ultimate Infinity Pass (All Dropper & Freshers Batches)",
      tag: "⚡ TOP RATED • MEDICAL PASS",
      badgeColor: "#10b981",
      description: "Complete access to ALL NEET batches (Yakeen 1.0, 2.0, 3.0, 4.0, Arjuna NEET & Lakshya NEET) with NCERT line-by-line revision & AIIMS test series.",
      originalPrice: 4999,
      offerPrice: 299,
      features: [
        "All NEET Batches (Yakeen 1.0, 2.0, 3.0, 4.0, Arjuna & Lakshya)",
        "100% NCERT Line-by-Line Biology, Physics Numericals & Chemistry",
        "Infinity Daily Practice Papers with Step-by-Step Video Solutions",
        "AIIMS & NEET Pattern Full Tests + High-Yield Formula Books",
        "🎁 Exclusive Bonus: Special Post-Payment Rank Booster Video"
      ]
    },
    {
      id: "b-foundation-infinity",
      category: "foundation",
      name: "Class 9th & 10th Foundation Mega Pass (Board + Olympiad)",
      tag: "🌟 POPULAR • CLASS 9 & 10",
      badgeColor: "#3b82f6",
      description: "Complete access to Udaan 10th, Neev 9th, Board Booster & NTSE batches with sample papers, NCERT solutions and Olympiad level questions.",
      originalPrice: 2999,
      offerPrice: 249,
      features: [
        "All Class 9th & 10th Batches (Udaan 10th, Neev 9th, Board Booster)",
        "Science, Maths, Social Science & English Full Concept Lectures",
        "Sample Papers with Step Marking Guidelines & Homework DPPs",
        "Olympiad, NTSE & Foundation Problem Solving Masterclasses",
        "🎁 Exclusive Bonus: Topper Formula Sheets & Quick Revision Notes"
      ]
    },
    {
      id: "b-junior-foundation",
      category: "foundation",
      name: "Class 6th, 7th & 8th Junior Foundation Mega Pass",
      tag: "🌱 JUNIOR PASS • CLASS 6-8",
      badgeColor: "#06b6d4",
      description: "Complete foundation building for Class 6th, 7th & 8th (Umang, Junoon) with animated concept videos, interactive quizzes & Olympiad preparation.",
      originalPrice: 2499,
      offerPrice: 199,
      features: [
        "All Junior Foundation Batches (Class 6th, 7th & 8th All Subjects)",
        "Strong Basics in Maths, Science, Reasoning & English Grammar",
        "Animated Visual Explanations & Daily Homework Practice Sets",
        "Junior Olympiad, IMO & NSO Level Practice Tests Included",
        "🎁 Exclusive Bonus: Junior Mental Ability Master Booklet"
      ]
    },
    {
      id: "b-defence-infinity",
      category: "defence",
      name: "NDA & Defence Warriors Infinity Pass (Maths + GAT + SSB)",
      tag: "🎖️ DEFENCE PASS",
      badgeColor: "#f59e0b",
      description: "Complete syllabus coverage for NDA 1 & 2, CDS & Airforce (Shaurya 1.0 & 2.0) with SSB interview mentorship & 10-year solved papers.",
      originalPrice: 3999,
      offerPrice: 279,
      features: [
        "All NDA & Defence Batches (Shaurya 1.0, 2.0 & CDS Master)",
        "Complete Maths, GAT, English & General Science Video Modules",
        "SSB Interview Guidance & Psychological Test Techniques",
        "Previous 10 Years Solved Question Papers & Mock Test Series",
        "🎁 Exclusive Bonus: Monthly Defence Current Affairs Capsules"
      ]
    },
    {
      id: "b-upsc-infinity",
      category: "upsc",
      name: "UPSC CSE & State PCS Sankalp Infinity Pass (Prelims + Mains)",
      tag: "🏛️ UPSC & PCS PASS",
      badgeColor: "#d97706",
      description: "Comprehensive GS Prelims + Mains foundation, CSAT masterclass, NCERT foundation, Essay writing modules, and daily current affairs analysis.",
      originalPrice: 5999,
      offerPrice: 349,
      features: [
        "All UPSC Sankalp & State PCS Prelims + Mains Complete Batches",
        "History, Polity, Geography, Economy & Environment Full Syllabus",
        "Daily Current Affairs Video Editorial Analysis & Monthly Magazines",
        "CSAT Comprehensive Course + Mains Answer Writing Worksheets",
        "🎁 Exclusive Bonus: 15-Year Solved Prelims & Mains PYQ Compendium"
      ]
    },
    {
      id: "b-ssc-infinity",
      category: "ssc",
      name: "SSC (CGL, CHSL, MTS, CPO) & RRB Railway Mahapack Pass",
      tag: "🚆 SSC & RAILWAY PASS",
      badgeColor: "#14b8a6",
      description: "All-in-one Mahapack for SSC CGL, CHSL, MTS, GD Constable, and RRB NTPC/ALP/Group D with speed calculation tricks and full mock tests.",
      originalPrice: 3499,
      offerPrice: 249,
      features: [
        "All SSC Batches (Brahma 1.0/2.0, SSC CGL, CHSL, MTS, CPO)",
        "RRB Railway NTPC, ALP & Group D Full Target Syllabus Included",
        "Maths Speed Calculation Tricks, English Grammar & Reasoning",
        "Full Length Tier 1 & Tier 2 Pattern Mock Tests with Live Ranking",
        "🎁 Exclusive Bonus: 5,000+ TCS Pattern Questions Bank"
      ]
    },
    {
      id: "b-banking-infinity",
      category: "banking",
      name: "Banking & Insurance (IBPS, SBI PO & Clerk) Target Pass",
      tag: "🏦 BANKING PASS",
      badgeColor: "#0284c7",
      description: "Complete preparation for SBI PO, SBI Clerk, IBPS PO/Clerk & RRB with high-level puzzle solving, DI masterclasses & Banking Awareness.",
      originalPrice: 3499,
      offerPrice: 249,
      features: [
        "All Banking Batches (SBI PO, SBI Clerk, IBPS PO, RRB Assistant)",
        "Advanced Data Interpretation & High-Level Reasoning Puzzles",
        "Quantitative Aptitude Shortcut Methods & English Comprehension",
        "Complete Banking, Financial & Economic Awareness Video Series",
        "🎁 Exclusive Bonus: Weekly Speed Test Series with Percentile Score"
      ]
    },
    {
      id: "b-gate-infinity",
      category: "gate",
      name: "GATE & ESE Engineering Shresth Infinity Pass (CS, ME, CE, EE, EC)",
      tag: "⚙️ GATE & ESE PASS",
      badgeColor: "#7c3aed",
      description: "In-depth engineering concept lectures, numerical problem solving, virtual calculator practice, and subject-wise & full-length GATE mock tests.",
      originalPrice: 4999,
      offerPrice: 299,
      features: [
        "GATE Shresth & Parakram Batches (CS, Mechanical, Civil, Electrical, EC)",
        "Core Technical Subjects + Engineering Maths & General Aptitude",
        "Formula Books, Short Notes PDF & Step-by-Step Numerical Practice",
        "GATE Pattern Subject Tests + Multi-Subject Tests + Full Mocks",
        "🎁 Exclusive Bonus: Last 30-Year Topic-wise GATE Solved Booklets"
      ]
    },
    {
      id: "b-cuet-infinity",
      category: "cuet",
      name: "CUET UG All-Stream Complete Entrance Pass (Arts, Science, Comm)",
      tag: "🎓 CUET UG PASS",
      badgeColor: "#059669",
      description: "Guaranteed admission preparation for Delhi University, BHU, JNU with Domain Subjects (PCM, PCB, Commerce, Humanities) + Language + General Test.",
      originalPrice: 2999,
      offerPrice: 249,
      features: [
        "All CUET Batches (Aagaz, Science, Commerce & Arts Domains)",
        "Complete Section 1 (English/Hindi) + Section 3 General Test",
        "NCERT Exemplar Questions & NTA Pattern Computer-Based Mock Tests",
        "Top Central University Counselling & Cutoff Guidance Modules",
        "🎁 Exclusive Bonus: High-Frequency General Test Current Affairs"
      ]
    },
    {
      id: "b-teaching-infinity",
      category: "teaching",
      name: "Teaching Exams Infinity Pass (CTET Paper 1 & 2 + State TET)",
      tag: "📚 TEACHING PASS",
      badgeColor: "#ea580c",
      description: "Complete preparation for CTET Paper 1 & 2, UPTET, REET, Super TET with Child Development & Pedagogy (CDP), Maths, Science & EVS.",
      originalPrice: 2999,
      offerPrice: 229,
      features: [
        "All Teaching Batches (Nirman CTET, Target TET & State Exams)",
        "In-depth Child Development & Pedagogy (CDP) Masterclasses",
        "Subject Pedagogy (Maths, Science, Social Science, Language)",
        "Previous Years Solved Question Papers with Detailed Explanations",
        "🎁 Exclusive Bonus: Quick CDP Formula & Theorist Revision Sheets"
      ]
    },
    {
      id: "b-commerce-infinity",
      category: "commerce",
      name: "Commerce & CA Foundation Infinity Pass (11th, 12th & CA)",
      tag: "📊 COMMERCE PASS",
      badgeColor: "#8b5cf6",
      description: "Complete access to Aarambh CA Foundation and Class 11th & 12th Commerce with Accounts, Economics, Business Studies & Law modules.",
      originalPrice: 3499,
      offerPrice: 249,
      features: [
        "All Commerce & CA Foundation Batches (Aarambh & Top Rankers)",
        "In-depth Accounts, Micro/Macro Economics & Business Studies",
        "CA Foundation ICAI Exam Pattern Mock Tests & Case Studies",
        "Chapter-wise Notes & Practical Problem Solving Worksheets",
        "🎁 Exclusive Bonus: Secret Exam Revision Question Bank"
      ]
    },
    {
      id: "b-all-access-vip",
      category: "all",
      name: "👑 PW ALL-EXAM SUPER VIP PASS (Unlimited Infinity Access)",
      tag: "💎 VIP UNLIMITED • ALL BATCHES",
      badgeColor: "#ec4899",
      description: "Instant unlimited lifetime access to EVERY SINGLE BATCH in the entire PW app across JEE, NEET, Foundation, NDA, UPSC, SSC, Banking, GATE & Commerce. All future batches included free!",
      originalPrice: 9999,
      offerPrice: 499,
      features: [
        "UNLIMITED LIFETIME ACCESS to Every Single Batch on PW",
        "All JEE + NEET + 9th/10th + NDA + UPSC + SSC + GATE + Commerce Batches",
        "All Future Batches & Revision Series Added Automatically Free",
        "All Khazana Video Lectures + 50,000+ Questions + All Test Series",
        "👑 VIP Secret Bonus: Private Mentor Community + Bonus Strategy Videos"
      ]
    }
  ],

  // Coupons: Public discount on > 199, secret ₹1 & ₹5 special codes (never shown in public list)
  COUPONS: [
    // Public Promo Coupon (Shown on site)
    { code: "PREMIUM20", percent: 20, minOrder: 199, isPublic: true, description: "Flat 20% off on packs above ₹199" },

    // SECRET VIP PRICING CODES (Requested by Owner - Strictly Hidden from public chips/cards)
    // VANDANA1 gives direct ₹1 batch price!
    { code: "VANDANA1", specialPrice: 1, percent: 100, minOrder: 0, isPublic: false, description: "VIP Secret Pass - Direct ₹1 Access" },
    // VIVAN01, KISHAN01, AJAD01 give direct ₹5 batch price!
    { code: "VIVAN01", specialPrice: 5, percent: 100, minOrder: 0, isPublic: false, description: "VIP Secret Pass - Direct ₹5 Access" },
    { code: "KISHAN01", specialPrice: 5, percent: 100, minOrder: 0, isPublic: false, description: "VIP Secret Pass - Direct ₹5 Access" },
    { code: "AJAD01", specialPrice: 5, percent: 100, minOrder: 0, isPublic: false, description: "VIP Secret Pass - Direct ₹5 Access" },

    // Tiered Admin Coupons for custom sharing
    { code: "SAVE30", percent: 30, minOrder: 199, isPublic: false, description: "Secret 30% discount" },
    { code: "SAVE40", percent: 40, minOrder: 199, isPublic: false, description: "Secret 40% discount" },
    { code: "SAVE50", percent: 50, minOrder: 199, isPublic: false, description: "Secret 50% discount" },
    { code: "SAVE60", percent: 60, minOrder: 199, isPublic: false, description: "Special 60% discount" },
    { code: "SAVE70", percent: 70, minOrder: 199, isPublic: false, description: "Special 70% discount" },
    { code: "SAVE80", percent: 80, minOrder: 199, isPublic: false, description: "Special 80% discount" },
    { code: "SAVE90", percent: 90, minOrder: 199, isPublic: false, description: "Special 90% discount" },
    { code: "FREE100", percent: 100, minOrder: 0, isPublic: false, description: "100% Free Special Pass" }
  ],

  // 3 UPI QR Code Options pointing to uploaded payment QR image
  QR_CODES: [
    { id: "qr1", name: "Google Pay", file: "payment_qr.jpg", description: "Scan with Google Pay or any UPI app" },
    { id: "qr2", name: "PhonePe", file: "payment_qr.jpg", description: "Scan with PhonePe or any UPI app" },
    { id: "qr3", name: "Paytm • All UPI", file: "payment_qr.jpg", description: "Scan with Paytm, BHIM or any UPI app" }
  ]
};

// ============================================================================
// STORAGE & STATE INITIALIZATION
// ============================================================================

function loadData(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Storage save failed:", e);
  }
}

// Global active store
const APP_STATE = {
  config: loadData("pw_config", DEFAULT_CONFIG),
  batches: loadData("pw_batches", DEFAULT_CONFIG.BATCHES),
  coupons: loadData("pw_coupons", DEFAULT_CONFIG.COUPONS),
  orders: loadData("pw_orders", loadData("thor_orders", [])),
  referralClaims: loadData("pw_referrals", loadData("thor_referrals", [])),
  currentUser: loadData("pw_user", loadData("thor_user", null))
};

// Always enforce Payee Name, Merchant UPI ID, clean WhatsApp support link, and QR image
APP_STATE.config.PAYMENT_NAME = "Aditya Kumar Dubey";
APP_STATE.config.UPI_ID = "7970870147@fam";
APP_STATE.config.WHATSAPP_PHONE = "7631442934";
APP_STATE.config.SUPPORT_WHATSAPP = "https://wa.me/917631442934?text=Hello%2C%20I%20need%20help%20with%20PW%20Batch%20Access";
APP_STATE.config.APP_PORTAL_LINK = "https://pwthor.live";
APP_STATE.config.PRIMARY_QR_IMAGE = "payment_qr.jpg";
APP_STATE.config.CATEGORIES = DEFAULT_CONFIG.CATEGORIES;
if (!APP_STATE.config.ADMIN_PIN || APP_STATE.config.ADMIN_PIN === "1234") {
  APP_STATE.config.ADMIN_PIN = "Vishu@001";
}
if (!APP_STATE.config.ADMIN_EMAIL) {
  APP_STATE.config.ADMIN_EMAIL = "onlyfaltu39@gmail.com";
}
if (!APP_STATE.config.ADMIN_SECURITY_CODE || APP_STATE.config.ADMIN_SECURITY_CODE === "7788") {
  APP_STATE.config.ADMIN_SECURITY_CODE = "0000";
}
if (!APP_STATE.config.HOW_TO_BUY_VIDEO) {
  APP_STATE.config.HOW_TO_BUY_VIDEO = "https://www.youtube.com/embed/dQw4w9WgXcQ";
}

if (APP_STATE.config.QR_CODES && APP_STATE.config.QR_CODES.length > 0) {
  APP_STATE.config.QR_CODES.forEach(q => {
    q.file = "payment_qr.jpg";
  });
}

// Ensure updated Exam-Level Batches exist in store
if (!APP_STATE.batches || APP_STATE.batches.length < DEFAULT_CONFIG.BATCHES.length || !APP_STATE.batches.some(b => b.id === "b-upsc-infinity")) {
  APP_STATE.batches = DEFAULT_CONFIG.BATCHES;
  saveData("pw_batches", APP_STATE.batches);
}

// Ensure secret & tiered coupons exist in store
DEFAULT_CONFIG.COUPONS.forEach(dc => {
  const existing = APP_STATE.coupons.find(c => c.code.toUpperCase() === dc.code.toUpperCase());
  if (!existing) {
    APP_STATE.coupons.push(dc);
  } else {
    if (dc.specialPrice !== undefined) existing.specialPrice = dc.specialPrice;
    existing.isPublic = dc.isPublic;
  }
});
saveData("pw_coupons", APP_STATE.coupons);
saveData("pw_config", APP_STATE.config);

function saveBatches(batches) {
  APP_STATE.batches = batches;
  saveData("pw_batches", batches);
}

function saveCoupons(coupons) {
  APP_STATE.coupons = coupons;
  saveData("pw_coupons", coupons);
}

function saveConfig(cfg) {
  APP_STATE.config = cfg;
  saveData("pw_config", cfg);
}

function saveOrders(orders) {
  APP_STATE.orders = orders;
  saveData("pw_orders", orders);
}

function saveReferralClaims(claims) {
  APP_STATE.referralClaims = claims;
  saveData("pw_referrals", claims);
}

function setCurrentUser(user) {
  APP_STATE.currentUser = user;
  saveData("pw_user", user);
}

function getRegisteredUsers() {
  return loadData("pw_registered_users", {});
}

function findRegisteredUser(contact) {
  if (!contact) return null;
  const clean = contact.trim().toLowerCase();
  const users = getRegisteredUsers();
  
  // Direct match by email key
  if (users[clean]) return users[clean];

  // Match by phone or email attribute
  for (const emailKey in users) {
    const u = users[emailKey];
    if (
      (u.email && u.email.toLowerCase() === clean) ||
      (u.phone && u.phone.trim() === clean.replace(/\s+/g, "")) ||
      (u.phone && u.phone.replace(/[^0-9]/g, "") === clean.replace(/[^0-9]/g, ""))
    ) {
      return u;
    }
  }
  return null;
}

function saveRegisteredUser(email, userProfile) {
  const users = getRegisteredUsers();
  const cleanEmail = (email || (userProfile && userProfile.email) || "").trim().toLowerCase();
  if (!cleanEmail) return null;
  
  const existing = users[cleanEmail] || {};
  users[cleanEmail] = {
    ...existing,
    ...userProfile,
    email: cleanEmail,
    phone: (userProfile && userProfile.phone) || existing.phone || "",
    name: (userProfile && userProfile.name) || existing.name || "Student",
    password: (userProfile && userProfile.password) || existing.password || "Student@123",
    exam: (userProfile && userProfile.exam) || existing.exam || "all",
    updatedAt: new Date().toISOString()
  };
  saveData("pw_registered_users", users);
  return users[cleanEmail];
}

function verifyUserLogin(contact, password) {
  if (!contact) return { success: false, message: "Please enter your Email or Mobile Number." };
  if (!password) return { success: false, message: "Please enter your Password." };

  const user = findRegisteredUser(contact);
  if (!user) {
    return { 
      success: false, 
      message: "Account not found with this Email/Phone. Please register first." 
    };
  }

  // Check password (supports default fallback if user registered before password feature)
  const userPass = user.password || "Student@123";
  if (userPass === password.trim()) {
    setCurrentUser(user);
    return { success: true, user: user, message: "Login successful!" };
  } else {
    return { success: false, message: "Incorrect password. You can reset it below." };
  }
}

function resetUserPassword(contact, newPassword) {
  if (!contact) return { success: false, message: "Please enter your registered Email or Mobile." };
  if (!newPassword || newPassword.trim().length < 4) {
    return { success: false, message: "New password must be at least 4 characters long." };
  }

  const user = findRegisteredUser(contact);
  if (!user) {
    return { success: false, message: "No registered account found with this Email or Mobile." };
  }

  const updated = saveRegisteredUser(user.email, {
    ...user,
    password: newPassword.trim()
  });

  setCurrentUser(updated);
  return { 
    success: true, 
    user: updated, 
    message: "Password reset successful! You are now logged in." 
  };
}

// Helper to find orders by Email or Phone
function findOrdersByUserContact(contact) {
  if (!contact) return [];
  const clean = contact.trim().toLowerCase();
  const all = APP_STATE.orders || [];
  return all.filter(o => {
    const p = (o.userPhone || "").toLowerCase();
    const e = (o.userEmail || "").toLowerCase();
    const id = (o.orderId || "").toLowerCase();
    return p.includes(clean) || e.includes(clean) || id === clean;
  });
}

// Helpers
function formatINR(num) {
  return "₹" + Number(num).toLocaleString("en-IN");
}

function getBatchById(id) {
  return APP_STATE.batches.find(b => b.id === id) || APP_STATE.batches[0];
}

function generateUpiUrl(amount, note) {
  const cfg = APP_STATE.config;
  const pa = encodeURIComponent(cfg.UPI_ID.trim());
  const pn = encodeURIComponent(cfg.PAYMENT_NAME.trim());
  const tn = encodeURIComponent(note || cfg.TRANSACTION_NOTE.trim());
  return `upi://pay?pa=${pa}&pn=${pn}&am=${amount}&cu=INR&tn=${tn}`;
}

function getAppSpecificUpiUrls(amount, note) {
  const cfg = APP_STATE.config;
  const pa = encodeURIComponent(cfg.UPI_ID.trim());
  const pn = encodeURIComponent(cfg.PAYMENT_NAME.trim());
  const tn = encodeURIComponent(note || cfg.TRANSACTION_NOTE.trim());
  const q = `pa=${pa}&pn=${pn}&am=${amount}&cu=INR&tn=${tn}`;
  return {
    generic: `upi://pay?${q}`,
    gpay: `gpay://upi/pay?${q}`,
    phonepe: `phonepe://pay?${q}`,
    paytm: `paytmmp://pay?${q}`
  };
}

// Order ID Generator (e.g. PW-7K3M)
function createNewOrderId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let rand = "";
  for (let i = 0; i < 6; i++) {
    rand += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `PW-${rand}`;
}

// Helper to convert any YouTube URL to an embed URL
function normalizeYoutubeUrl(url) {
  if (!url) return "";
  const clean = url.trim();
  if (clean.includes("/embed/")) return clean;
  const match = clean.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/);
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  }
  return clean;
}

// Exports to window
window.CONFIG = APP_STATE.config;
window.APP_STATE = APP_STATE;
window.saveBatches = saveBatches;
window.saveCoupons = saveCoupons;
window.saveConfig = saveConfig;
window.saveOrders = saveOrders;
window.saveReferralClaims = saveReferralClaims;
window.setCurrentUser = setCurrentUser;
window.getRegisteredUsers = getRegisteredUsers;
window.findRegisteredUser = findRegisteredUser;
window.saveRegisteredUser = saveRegisteredUser;
window.verifyUserLogin = verifyUserLogin;
window.resetUserPassword = resetUserPassword;
window.findOrdersByUserContact = findOrdersByUserContact;
window.formatINR = formatINR;
window.getBatchById = getBatchById;
window.generateUpiUrl = generateUpiUrl;
window.getAppSpecificUpiUrls = getAppSpecificUpiUrls;
window.createNewOrderId = createNewOrderId;
window.normalizeYoutubeUrl = normalizeYoutubeUrl;
