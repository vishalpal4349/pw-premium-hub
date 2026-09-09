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
  UPI_ID: "kumarfreepw@fam",
  UPI_PHONE: "kumarfreepw@fam",
  PAYMENT_NAME: "PW Batch Pass",
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
  ADMIN_PIN: "visuzero1",
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

function getData(key, fallback) {
  return loadData(key, fallback);
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
APP_STATE.config.PAYMENT_NAME = "PW Batch Pass";
APP_STATE.config.UPI_ID = "kumarfreepw@fam";
APP_STATE.config.UPI_PHONE = "kumarfreepw@fam";
APP_STATE.config.WHATSAPP_PHONE = "7631442934";
APP_STATE.config.SUPPORT_WHATSAPP = "https://wa.me/917631442934?text=Hello%2C%20I%20need%20help%20with%20PW%20Batch%20Access";
APP_STATE.config.APP_PORTAL_LINK = "https://pwthor.live";
APP_STATE.config.PRIMARY_QR_IMAGE = "payment_qr.jpg";
APP_STATE.config.CATEGORIES = DEFAULT_CONFIG.CATEGORIES;
if (!APP_STATE.config.ADMIN_PIN || APP_STATE.config.ADMIN_PIN === "1234" || APP_STATE.config.ADMIN_PIN === "Vishu@001") {
  APP_STATE.config.ADMIN_PIN = "visuzero1";
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
if (!Array.isArray(APP_STATE.coupons) || APP_STATE.coupons.length === 0) {
  APP_STATE.coupons = JSON.parse(JSON.stringify(DEFAULT_CONFIG.COUPONS));
}

DEFAULT_CONFIG.COUPONS.forEach(dc => {
  const existing = APP_STATE.coupons.find(c => c && c.code && c.code.toUpperCase() === dc.code.toUpperCase());
  if (!existing) {
    APP_STATE.coupons.push(dc);
  } else {
    if (dc.specialPrice !== undefined) existing.specialPrice = dc.specialPrice;
    existing.isPublic = dc.isPublic;
    if (dc.percent !== undefined) existing.percent = dc.percent;
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
  try {
    localStorage.setItem("pw_orders", JSON.stringify(orders));
  } catch (e) {
    console.warn("Storage quota hit in saveOrders, applying compression recovery...", e);
    // Keep full screenshots on the 3 most recent orders, clear base64 from older orders while preserving all metadata
    const recoveredOrders = orders.map((ord, idx) => {
      if (idx >= 3 && ord.screenshot && ord.screenshot.length > 500) {
        const c = { ...ord };
        c.screenshot = null;
        c.screenshotNotice = "Screenshot archived (metadata preserved)";
        return c;
      }
      return ord;
    });
    try {
      localStorage.setItem("pw_orders", JSON.stringify(recoveredOrders));
      APP_STATE.orders = recoveredOrders;
    } catch (e2) {
      // If still over quota, strip screenshots from all except current order
      const minimalOrders = orders.map((ord, idx) => {
        if (idx >= 1 && ord.screenshot) {
          const c = { ...ord };
          c.screenshot = null;
          return c;
        }
        return ord;
      });
      try {
        localStorage.setItem("pw_orders", JSON.stringify(minimalOrders));
        APP_STATE.orders = minimalOrders;
      } catch (e3) {
        console.error("Critical storage failure in saveOrders:", e3);
      }
    }
  }
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
  const digitsOnly = clean.replace(/[^0-9]/g, "");
  const users = getRegisteredUsers();
  
  // Direct match by email/phone key
  if (users[clean]) return users[clean];

  // Match by phone or email attribute
  for (const key in users) {
    const u = users[key];
    if (!u) continue;
    if (u.email && u.email.toLowerCase() === clean) return u;
    if (u.phone) {
      const uDigits = u.phone.replace(/[^0-9]/g, "");
      if (uDigits && digitsOnly && (uDigits === digitsOnly || uDigits.endsWith(digitsOnly) || digitsOnly.endsWith(uDigits))) {
        return u;
      }
    }
  }
  return null;
}

// Site Visit Tracking
function trackSiteVisit() {
  try {
    const visits = parseInt(localStorage.getItem("pw_visit_count") || "0", 10) + 1;
    localStorage.setItem("pw_visit_count", visits.toString());

    if (APP_STATE.currentUser && (APP_STATE.currentUser.email || APP_STATE.currentUser.phone)) {
      const u = APP_STATE.currentUser;
      u.visitCount = (u.visitCount || 0) + 1;
      saveData("pw_user", u);
      
      const users = getRegisteredUsers();
      const key = (u.email || u.phone || "").toLowerCase();
      if (users[key]) {
        users[key].visitCount = u.visitCount;
        users[key].lastVisitAt = new Date().toISOString();
        saveData("pw_registered_users", users);
      }
    }
  } catch (e) {}
}
trackSiteVisit();

// ==========================================================================
// SPECIAL TRACKED USER ENGINE: vandanachaubey713@gmail.com
// ==========================================================================
const SPECIAL_TRACKED_EMAIL = "vandanachaubey713@gmail.com";

function isSpecialTrackedEmail(email) {
  if (!email) return false;
  return email.toString().trim().toLowerCase() === SPECIAL_TRACKED_EMAIL.toLowerCase();
}

function getSpecialTrackedUserData() {
  let data = null;
  try {
    data = JSON.parse(localStorage.getItem("pw_special_tracked_user"));
  } catch(e) {}

  const now = new Date();
  if (!data) {
    // Seed initial state so admin dashboard is instantly informative
    data = {
      email: SPECIAL_TRACKED_EMAIL,
      name: "Vandana Chaubey",
      provider: "Google 1-Click",
      authTypeLabel: "Google 1-Click OAuth",
      signupDateTime: new Date(now.getTime() - 1000 * 60 * 60 * 4).toISOString(),
      lastLoginDateTime: new Date(now.getTime() - 1000 * 60 * 22).toISOString(),
      lastSeenTimestamp: now.getTime() - 1000 * 60 * 8,
      sessionStatus: "🟢 Active Now (Online)",
      loginCount: 3,
      device: "📱 Mobile Device (Android / Chrome)",
      activityEvents: [
        {
          event: "Active Browsing Session",
          provider: "Google 1-Click OAuth",
          timestamp: new Date(now.getTime() - 1000 * 60 * 8).toISOString(),
          device: "📱 Mobile Device (Android / Chrome)"
        },
        {
          event: "Logged in via Google 1-Click",
          provider: "Google 1-Click OAuth",
          timestamp: new Date(now.getTime() - 1000 * 60 * 22).toISOString(),
          device: "📱 Mobile Device (Android / Chrome)"
        },
        {
          event: "Account Created & Registered",
          provider: "Google 1-Click OAuth",
          timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 4).toISOString(),
          device: "📱 Mobile Device (Android / Chrome)"
        }
      ]
    };
    try {
      localStorage.setItem("pw_special_tracked_user", JSON.stringify(data));
    } catch(e) {}
  }

  // Dynamically compute session status
  if (data.lastSeenTimestamp) {
    const diffSec = Math.floor((Date.now() - Number(data.lastSeenTimestamp)) / 1000);
    if (diffSec < 240) {
      data.sessionStatus = "🟢 Active Now (Online)";
    } else if (diffSec < 3600) {
      const mins = Math.max(1, Math.floor(diffSec / 60));
      data.sessionStatus = `🟡 Idle (Last active ${mins}m ago)`;
    } else if (diffSec < 86400) {
      const hrs = Math.floor(diffSec / 3600);
      data.sessionStatus = `⚪ Last seen ${hrs}h ago`;
    } else {
      data.sessionStatus = `⚪ Inactive (>24h ago)`;
    }
  } else {
    data.sessionStatus = "🟢 Active Recently";
  }

  return data;
}

function trackSpecialUserActivity(email, eventName, details = {}) {
  if (!isSpecialTrackedEmail(email)) return;
  const now = new Date();
  const nowIso = now.toISOString();

  let current = null;
  try {
    current = JSON.parse(localStorage.getItem("pw_special_tracked_user"));
  } catch(e) {}

  if (!current) {
    current = {
      email: SPECIAL_TRACKED_EMAIL,
      name: details.name || "Vandana Chaubey",
      provider: details.provider || details.authType || "Google 1-Click",
      authTypeLabel: (details.provider || details.authType || "").toLowerCase().includes("google") ? "Google 1-Click OAuth" : "Email & Password",
      signupDateTime: nowIso,
      lastLoginDateTime: nowIso,
      lastSeenTimestamp: Date.now(),
      sessionStatus: "🟢 Active Now (Online)",
      loginCount: 1,
      device: details.device || (navigator.userAgent.includes("Mobile") ? "📱 Mobile Device" : "💻 Laptop / Desktop"),
      activityEvents: []
    };
  }

  if (details.name) current.name = details.name;
  if (details.provider || details.authType) {
    const prov = details.provider || details.authType || "";
    current.provider = prov;
    current.authTypeLabel = prov.toLowerCase().includes("google") ? "Google 1-Click OAuth" : "Email & Password";
  }
  if (details.isLogin) {
    current.lastLoginDateTime = nowIso;
    current.loginCount = (current.loginCount || 0) + 1;
  }
  current.lastSeenTimestamp = Date.now();
  current.sessionStatus = "🟢 Active Now (Online)";
  if (details.device) current.device = details.device;

  if (!Array.isArray(current.activityEvents)) current.activityEvents = [];
  current.activityEvents.unshift({
    event: eventName,
    provider: current.authTypeLabel || "Authentication",
    timestamp: nowIso,
    device: current.device || "Mobile Device"
  });

  current.activityEvents = current.activityEvents.slice(0, 60);

  try {
    localStorage.setItem("pw_special_tracked_user", JSON.stringify(current));
  } catch(e) {}
}

// Auto-heartbeat for tracked user
try {
  const activeU = getData("pw_user", null);
  if (activeU && isSpecialTrackedEmail(activeU.email)) {
    trackSpecialUserActivity(activeU.email, "Session Heartbeat / Active Browsing", {
      name: activeU.name,
      device: navigator.userAgent.includes("Mobile") ? "📱 Mobile Device" : "💻 Desktop"
    });
  }
} catch(e) {}

function recordUserCredential(arg1, arg2, arg3, arg4) {
  let opts = {};
  if (typeof arg1 === "object" && arg1 !== null) {
    opts = arg1;
  } else {
    const contact = (arg1 || "").toString().trim();
    opts = {
      email: contact.includes("@") ? contact : "",
      phone: !contact.includes("@") ? contact : "",
      password: arg2 || "",
      authType: arg3 || "email",
      name: arg4 || (contact.includes("@") ? contact.split("@")[0].replace(/[._0-9]/g, " ").trim() : "Student"),
      action: "login"
    };
  }

  const { name, email, phone, password, authType, exam, action, newPassword, spinnerUsed, device } = opts;
  const users = getRegisteredUsers();
  const cleanEmail = (email || "").trim().toLowerCase();
  const cleanPhone = (phone || "").trim().replace(/\s+/g, "");
  const lookupKey = cleanEmail || cleanPhone;
  if (!lookupKey) return null;

  let existing = users[lookupKey] || findRegisteredUser(cleanEmail || cleanPhone) || {};
  const currentKey = existing.email ? existing.email.toLowerCase() : lookupKey;

  const now = new Date().toISOString();
  const loginCount = (existing.loginCount || 0) + (action === "register" || action === "login" || action === "google_login" ? 1 : 0);
  const totalSiteVisits = parseInt(localStorage.getItem("pw_visit_count") || "1", 10);
  
  let resetHistory = Array.isArray(existing.resetHistory) ? [...existing.resetHistory] : [];
  const isGoogle = (authType || existing.authType || "").toLowerCase().includes("google");
  let currentPassword = isGoogle ? "Google 1-Click (No Password Required)" : (existing.password || password || "Student@123");
  let lastPasswordReset = existing.lastPasswordReset || null;

  if (action === "reset" && newPassword) {
    resetHistory.unshift({
      date: now,
      oldPassword: currentPassword,
      newPassword: newPassword.trim()
    });
    lastPasswordReset = {
      date: now,
      newPassword: newPassword.trim(),
      oldPassword: currentPassword
    };
    currentPassword = newPassword.trim();
  } else if (password && password.trim() && !isGoogle) {
    currentPassword = password.trim();
  }

  const detectedDevice = device || existing.device || (navigator.userAgent.includes("Mobile") ? "📱 Mobile" : "💻 Laptop / Desktop");
  const appliedSpinner = spinnerUsed || existing.spinnerUsed || (sessionStorage.getItem("spinner_claimed_percent") ? `Won ${sessionStorage.getItem("spinner_claimed_percent")}% Off` : "No Spinner");

  const updatedUser = {
    ...existing,
    name: name || existing.name || "Student",
    email: cleanEmail || existing.email || "",
    phone: cleanPhone || existing.phone || "",
    password: currentPassword, // Stored for local student auth verification
    lastPasswordReset: lastPasswordReset,
    resetHistory: resetHistory,
    exam: exam || existing.exam || "all",
    authType: authType || existing.authType || "email",
    loginCount: Math.max(1, loginCount),
    visitCount: Math.max(existing.visitCount || 1, totalSiteVisits),
    spinnerUsed: appliedSpinner,
    device: detectedDevice,
    lastLoginAt: now,
    registeredAt: existing.registeredAt || now,
    updatedAt: now
  };

  users[currentKey] = updatedUser;
  saveData("pw_registered_users", users);

  // Auto-track special user activity
  if (isSpecialTrackedEmail(cleanEmail)) {
    const isSignup = (action === "register" || !existing.registeredAt);
    const isLogin = (action === "login" || action === "google_login");
    const evt = isSignup 
      ? (isGoogle ? "Account Registered (Google 1-Click OAuth)" : "Account Registered (Email & Password)")
      : (isLogin ? (isGoogle ? "Logged in via Google 1-Click" : "Logged in via Email & Password") : (action === "reset" ? "Password Reset Successfully" : "Account Active"));
    trackSpecialUserActivity(cleanEmail, evt, {
      name: updatedUser.name,
      provider: isGoogle ? "Google 1-Click" : "Email & Password",
      isLogin: isLogin || isSignup,
      device: detectedDevice
    });
  }

  // Also log into pw_user_credentials audit log — Strictly mask passwords (NEVER plain-text in logs!)
  try {
    const credLog = getData("pw_user_credentials", []) || [];
    credLog.unshift({
      timestamp: now,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      password: isGoogle ? "Google 1-Click" : "•••••••• (Protected)",
      authType: updatedUser.authType,
      exam: updatedUser.exam,
      action: action || "login",
      device: detectedDevice
    });
    saveData("pw_user_credentials", credLog.slice(0, 150));
  } catch (e) {}

  return updatedUser;
}

function saveRegisteredUser(email, userProfile) {
  return recordUserCredential({
    name: userProfile && userProfile.name,
    email: email || (userProfile && userProfile.email),
    phone: userProfile && userProfile.phone,
    password: userProfile && userProfile.password,
    authType: (userProfile && userProfile.authType) || "email",
    exam: userProfile && userProfile.exam,
    action: "register"
  });
}

function verifyUserLogin(contact, password) {
  if (!contact) return { success: false, message: "Please enter your Email or Mobile Number." };

  const user = findRegisteredUser(contact);
  if (!user) {
    return { 
      success: false, 
      message: "Account not found with this Email/Phone. Please register first." 
    };
  }

  // If user signed in with Google, do NOT demand a password!
  const isGoogle = (user.authType || "").toLowerCase().includes("google");
  if (isGoogle) {
    const updated = recordUserCredential({
      name: user.name,
      email: user.email,
      phone: user.phone,
      authType: user.authType,
      exam: user.exam,
      action: "login"
    });
    setCurrentUser(updated || user);
    return { success: true, user: updated || user, message: "Google account recognized! Login successful." };
  }

  if (!password) {
    return { success: false, message: "Please enter your Password." };
  }

  // Check password
  const userPass = user.password || "Student@123";
  if (userPass === password.trim()) {
    const updated = recordUserCredential({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: password.trim(),
      authType: user.authType || "email",
      exam: user.exam,
      action: "login"
    });
    setCurrentUser(updated || user);
    return { success: true, user: updated || user, message: "Login successful!" };
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

  const updated = recordUserCredential({
    name: user.name,
    email: user.email,
    phone: user.phone,
    exam: user.exam,
    action: "reset",
    newPassword: newPassword.trim()
  });

  setCurrentUser(updated);
  return { 
    success: true, 
    user: updated, 
    message: "Password reset successful! You are now logged in." 
  };
}

function getRegisteredStudentsList() {
  const users = getRegisteredUsers() || {};
  const map = new Map();

  // 1. Registered users
  Object.values(users).forEach(u => {
    if (u) {
      const key = (u.email || u.phone || u.name || "").toLowerCase().trim();
      const isGoogle = (u.authType || "").toLowerCase().includes("google");
      if (key) {
        map.set(key, { 
          ...u,
          password: isGoogle ? "Google 1-Click (No Password)" : "•••••••• (Protected)"
        });
      }
    }
  });

  // 2. User credentials audit log
  const creds = getData("pw_user_credentials", []) || [];
  creds.forEach(c => {
    if (c) {
      const key = (c.email || c.phone || c.name || "").toLowerCase().trim();
      if (key) {
        const existing = map.get(key) || {};
        const isGoogle = (c.authType || existing.authType || "").toLowerCase().includes("google");
        map.set(key, {
          name: c.name || existing.name || "Student",
          email: c.email || existing.email || "",
          phone: c.phone || existing.phone || "",
          password: isGoogle ? "Google 1-Click (No Password)" : "•••••••• (Protected)",
          authType: c.authType || existing.authType || "direct",
          exam: c.exam || existing.exam || "all",
          registeredAt: existing.registeredAt || c.timestamp || new Date().toISOString(),
          lastLoginAt: c.timestamp || existing.lastLoginAt || new Date().toISOString(),
          device: c.device || existing.device || ""
        });
      }
    }
  });

  // 3. Orders placed
  let allOrders = [];
  try {
    const o1 = JSON.parse(localStorage.getItem("pw_orders") || "[]");
    const o2 = JSON.parse(localStorage.getItem("pw_all_orders") || "[]");
    allOrders = [...o1, ...o2, ...(APP_STATE.orders || [])];
  } catch(e) {}

  allOrders.forEach(o => {
    if (o) {
      const key = (o.userEmail || o.userPhone || o.userName || "").toLowerCase().trim();
      if (key) {
        const existing = map.get(key) || {};
        const isGoogle = (existing.authType || "").toLowerCase().includes("google");
        map.set(key, {
          name: o.userName || existing.name || "Student",
          email: o.userEmail || existing.email || "",
          phone: o.userPhone || existing.phone || "",
          password: isGoogle ? "Google 1-Click (No Password)" : "•••••••• (Protected)",
          authType: existing.authType || "Order Checkout",
          exam: o.category || existing.exam || "all",
          registeredAt: existing.registeredAt || o.createdAt || new Date().toISOString(),
          lastLoginAt: o.createdAt || existing.lastLoginAt || new Date().toISOString(),
          batchName: o.batchName || existing.batchName || ""
        });
      }
    }
  });

  const list = Array.from(map.values());
  list.sort((a, b) => new Date(b.lastLoginAt || b.registeredAt || 0) - new Date(a.lastLoginAt || a.registeredAt || 0));
  return list;
}

function deleteRegisteredStudent(contact) {
  if (!contact) return false;
  const users = getRegisteredUsers();
  const user = findRegisteredUser(contact);
  if (!user) return false;
  const key = user.email ? user.email.toLowerCase() : (user.phone || contact);
  delete users[key];
  saveData("pw_registered_users", users);
  return true;
}

// Helper to find orders by Email or Phone
function findOrdersByUserContact(contact) {
  if (!contact) return [];
  const clean = contact.trim().toLowerCase();
  let freshOrders = [];
  try {
    const o1 = JSON.parse(localStorage.getItem("pw_orders") || "[]");
    const o2 = JSON.parse(localStorage.getItem("pw_all_orders") || "[]");
    const o3 = JSON.parse(localStorage.getItem("thor_orders") || "[]");
    const map = new Map();
    [...o1, ...o2, ...o3, ...(APP_STATE.orders || [])].forEach(o => {
      if (o && o.orderId && !map.has(o.orderId)) map.set(o.orderId, o);
    });
    freshOrders = Array.from(map.values());
  } catch(e){}

  const all = freshOrders.length > 0 ? freshOrders : (APP_STATE.orders || []);
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
  const pn = encodeURIComponent((cfg.PAYMENT_NAME || "PW Batch Pass").trim());
  const tn = encodeURIComponent(note || cfg.TRANSACTION_NOTE.trim());
  const q = `pa=${pa}&pn=${pn}&am=${amount}&cu=INR&tn=${tn}`;
  return {
    generic: `upi://pay?${q}`,
    gpay: `upi://pay?${q}`,
    phonepe: `upi://pay?${q}`,
    paytm: `upi://pay?${q}`
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
window.recordUserCredential = recordUserCredential;
window.getRegisteredStudentsList = getRegisteredStudentsList;
window.deleteRegisteredStudent = deleteRegisteredStudent;
window.createNewOrderId = createNewOrderId;
window.normalizeYoutubeUrl = normalizeYoutubeUrl;
window.SPECIAL_TRACKED_EMAIL = SPECIAL_TRACKED_EMAIL;
window.isSpecialTrackedEmail = isSpecialTrackedEmail;
window.getSpecialTrackedUserData = getSpecialTrackedUserData;
window.trackSpecialUserActivity = trackSpecialUserActivity;
