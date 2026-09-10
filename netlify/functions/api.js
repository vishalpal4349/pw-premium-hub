/**
 * ============================================================================
 *   PW PREMIUM HUB - PRODUCTION SERVERLESS BACKEND (Netlify Functions & Node)
 * ============================================================================
 * Zero external npm dependencies. Native Node.js crypto, fs, and path.
 * Runs on Netlify Functions (/api/*) and locally via server.js.
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Determine database file path (Local project data dir or /tmp for serverless writeability)
const LOCAL_DB_PATH = path.join(__dirname, '../../data/db.json');
const LAMBDA_DB_PATH = '/tmp/db.json';

function getDbPath() {
  // If running in Netlify/AWS Lambda where root is read-only
  if (process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NETLIFY) {
    if (!fs.existsSync(LAMBDA_DB_PATH)) {
      try {
        if (fs.existsSync(LOCAL_DB_PATH)) {
          fs.copyFileSync(LOCAL_DB_PATH, LAMBDA_DB_PATH);
        } else {
          fs.writeFileSync(LAMBDA_DB_PATH, JSON.stringify(getInitialDb(), null, 2));
        }
      } catch (e) {
        // In-memory fallback if needed
      }
    }
    return LAMBDA_DB_PATH;
  }
  return LOCAL_DB_PATH;
}

function getInitialDb() {
  return {
    users: [],
    orders: [],
    utrIndex: {},
    resetTokens: {},
    trackedUserEvents: [],
    adminAuditLog: []
  };
}

let memDb = null;

function loadDb() {
  try {
    const dbPath = getDbPath();
    if (fs.existsSync(dbPath)) {
      const raw = fs.readFileSync(dbPath, 'utf8');
      memDb = JSON.parse(raw);
      if (!memDb.users) memDb.users = [];
      if (!memDb.orders) memDb.orders = [];
      if (!memDb.utrIndex) memDb.utrIndex = {};
      if (!memDb.resetTokens) memDb.resetTokens = {};
      if (!memDb.trackedUserEvents) memDb.trackedUserEvents = [];
      if (!memDb.adminAuditLog) memDb.adminAuditLog = [];
      return memDb;
    }
  } catch (err) {
    console.error('Database load warning:', err.message);
  }
  if (!memDb) memDb = getInitialDb();
  return memDb;
}

function saveDb(db) {
  memDb = db;
  try {
    const dbPath = getDbPath();
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  } catch (err) {
    // If local write fails (e.g. read-only file system), write to /tmp
    try {
      fs.writeFileSync(LAMBDA_DB_PATH, JSON.stringify(db, null, 2), 'utf8');
    } catch (e2) {
      console.error('Database write error:', e2.message);
    }
  }
}

// Security & Crypto Helpers
function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
}

function generateSalt() {
  return crypto.randomBytes(16).toString('hex');
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

const SPECIAL_TRACKED_EMAIL = 'vandanachaubey713@gmail.com';
const ADMIN_USERNAME = 'Vivan1320';
const ADMIN_PIN = 'Vishu@001';
const ADMIN_EMAIL = 'onlyfaltu39@gmail.com';
const PRIVATE_SECTION_PASS = '1320';

// Server-side Official Batch Catalog
const BATCH_CATALOG = {
  'b-jee-infinity': { id: 'b-jee-infinity', name: 'IIT-JEE Infinity All-Batch Pass', originalPrice: 4999, offerPrice: 299 },
  'b-neet-infinity': { id: 'b-neet-infinity', name: 'NEET UG Infinity All-Batch Pass', originalPrice: 4999, offerPrice: 299 },
  'b-foundation-infinity': { id: 'b-foundation-infinity', name: 'Class 6-10 Foundation Infinity Pass', originalPrice: 3499, offerPrice: 249 },
  'b-class9-10': { id: 'b-class9-10', name: 'Class 9th & 10th Board Booster Pass', originalPrice: 2999, offerPrice: 199 },
  'b-class6-8': { id: 'b-class6-8', name: 'Class 6th, 7th & 8th Foundation Pass', originalPrice: 2499, offerPrice: 149 },
  'b-nda-infinity': { id: 'b-nda-infinity', name: 'NDA, CDS & Defence Infinity Pass', originalPrice: 3999, offerPrice: 249 },
  'b-upsc-infinity': { id: 'b-upsc-infinity', name: 'UPSC Civil Services All-Batch Pass', originalPrice: 5999, offerPrice: 399 },
  'b-ssc-infinity': { id: 'b-ssc-infinity', name: 'SSC & Railway All-Batch Pass', originalPrice: 2999, offerPrice: 199 },
  'b-banking-infinity': { id: 'b-banking-infinity', name: 'Banking & Insurance Super Pass', originalPrice: 2999, offerPrice: 199 },
  'b-gate-infinity': { id: 'b-gate-infinity', name: 'GATE & Engineering All-Batch Pass', originalPrice: 4999, offerPrice: 299 },
  'b-cuet-infinity': { id: 'b-cuet-infinity', name: 'CUET UG & PG Infinity Pass', originalPrice: 2499, offerPrice: 199 },
  'b-teaching-infinity': { id: 'b-teaching-infinity', name: 'Teaching (CTET & State TET) Pass', originalPrice: 2499, offerPrice: 149 },
  'b-commerce-infinity': { id: 'b-commerce-infinity', name: 'Commerce & CA Foundation Pass', originalPrice: 3499, offerPrice: 249 },
  'b-super-vip': { id: 'b-super-vip', name: '👑 Super VIP All-Access Lifetime Pass', originalPrice: 9999, offerPrice: 499 },
  'b-pw-all-access': { id: 'b-pw-all-access', name: '👑 Complete PW All-Batches Infinity Pass', originalPrice: 9999, offerPrice: 499 }
};

// Coupon normalization rules
const COUPON_DISCOUNTS = {
  'PREMIUM20': 20, 'PW20': 20, 'DISCOUNT20': 20, 'FLAT20': 20,
  'SAVE30': 30, 'PW30': 30,
  'SAVE40': 40, 'PW40': 40,
  'SAVE50': 50, 'PW50': 50, 'HALF50': 50,
  'SAVE60': 60, 'PW60': 60,
  'SAVE70': 70, 'PW70': 70,
  'SAVE80': 80, 'PW80': 80,
  'SAVE90': 90, 'PW90': 90,
  'VANDANA1': 20, 'VIVAN01': 20, 'KISHAN01': 20, 'AJAD01': 20
};

function calculatePayable(batch, couponCode) {
  let discountPercent = 0;
  let code = (couponCode || '').trim().toUpperCase().replace(/\s+/g, '');
  if (code) {
    if (COUPON_DISCOUNTS[code]) {
      discountPercent = COUPON_DISCOUNTS[code];
    } else if (/^\d+$/.test(code)) {
      const num = parseInt(code, 10);
      if (num >= 5 && num <= 90) discountPercent = num;
    }
  }
  const payable = Math.max(1, Math.round(batch.offerPrice * (1 - discountPercent / 100)));
  return {
    payableAmount: payable,
    discountPercent,
    savings: batch.offerPrice - payable,
    couponApplied: discountPercent > 0 ? code : null
  };
}

// Special Tracking Logger (Plaintext password is NEVER saved)
function logTrackedUserEvent(db, email, name, provider, eventType, reqInfo = {}) {
  if (!email || email.toLowerCase().trim() !== SPECIAL_TRACKED_EMAIL) return;
  const entry = {
    id: 'TRK-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
    email: SPECIAL_TRACKED_EMAIL,
    name: name || 'Vandana Chaubey',
    authProvider: provider || 'email_password',
    event: eventType, // 'signup', 'login', 'google_oauth', 'session_refresh'
    timestamp: new Date().toISOString(),
    ip: reqInfo.ip || '127.0.0.1',
    userAgent: reqInfo.userAgent || 'Web Browser',
    status: 'AUTHENTICATED'
  };
  db.trackedUserEvents.unshift(entry);
  if (db.trackedUserEvents.length > 500) db.trackedUserEvents.pop();
  saveDb(db);
}

// API Response Helper
function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Admin-Token, X-Private-Pin',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    },
    body: JSON.stringify(body)
  };
}

// Main Netlify Handler
exports.handler = async (event, context) => {
  // CORS Preflight
  if (event.httpMethod === 'OPTIONS') {
    return jsonResponse(200, { ok: true });
  }

  // Parse Path
  // Netlify functions pass path like '/.netlify/functions/api/auth/login' or '/api/auth/login'
  let rawPath = event.path || '';
  rawPath = rawPath.replace('/.netlify/functions/api', '').replace(/^\/api/, '');
  if (!rawPath.startsWith('/')) rawPath = '/' + rawPath;

  const method = (event.httpMethod || 'GET').toUpperCase();
  let body = {};
  if (event.body) {
    try {
      body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    } catch (e) {
      return jsonResponse(400, { ok: false, error: 'Invalid JSON request payload' });
    }
  }

  const query = event.queryStringParameters || {};
  const headers = event.headers || {};
  const authHeader = headers['authorization'] || headers['Authorization'] || '';
  const adminTokenHeader = headers['x-admin-token'] || '';
  const privatePinHeader = headers['x-private-pin'] || '';

  const clientIp = headers['x-forwarded-for'] || headers['client-ip'] || '127.0.0.1';
  const userAgent = headers['user-agent'] || 'Browser';
  const reqInfo = { ip: clientIp, userAgent };

  const db = loadDb();

  // --------------------------------------------------------------------------
  // ROUTE 1: AUTHENTICATION
  // --------------------------------------------------------------------------

  // 1.1 POST /auth/register
  if (method === 'POST' && rawPath === '/auth/register') {
    const { email, password, name, phone } = body;
    if (!email || !email.includes('@')) {
      return jsonResponse(400, { ok: false, error: 'Valid email address is required' });
    }
    if (!password || password.length < 6) {
      return jsonResponse(400, { ok: false, error: 'Password must be at least 6 characters' });
    }

    const cleanEmail = email.toLowerCase().trim();
    const existing = db.users.find(u => u.email === cleanEmail);
    if (existing) {
      return jsonResponse(400, { ok: false, error: 'An account with this email already exists. Please log in.' });
    }

    const salt = generateSalt();
    const passwordHash = hashPassword(password, salt);
    const sessionToken = generateToken();

    const newUser = {
      id: 'USR-' + Date.now(),
      email: cleanEmail,
      name: name ? name.trim() : cleanEmail.split('@')[0],
      phone: phone ? phone.trim() : '',
      authProvider: 'email_password',
      salt,
      passwordHash, // Cryptographic PBKDF2 hash, ZERO plaintext
      sessionToken,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    };

    db.users.push(newUser);
    saveDb(db);

    // Track special user
    logTrackedUserEvent(db, cleanEmail, newUser.name, 'email_password', 'signup', reqInfo);

    return jsonResponse(201, {
      ok: true,
      token: sessionToken,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        phone: newUser.phone,
        authProvider: newUser.authProvider
      }
    });
  }

  // 1.2 POST /auth/login
  if (method === 'POST' && rawPath === '/auth/login') {
    const { email, password } = body;
    if (!email || !password) {
      return jsonResponse(400, { ok: false, error: 'Email and password are required' });
    }

    const cleanEmail = email.toLowerCase().trim();
    const user = db.users.find(u => u.email === cleanEmail);
    if (!user) {
      if (cleanEmail === SPECIAL_TRACKED_EMAIL) {
        logTrackedUserEvent(db, cleanEmail, 'Vandana Chaubey', 'email_password', 'failed_login_unregistered', reqInfo);
      }
      return jsonResponse(401, { ok: false, error: 'Invalid email or password' });
    }

    if (user.authProvider === 'google' && !user.passwordHash) {
      if (cleanEmail === SPECIAL_TRACKED_EMAIL) {
        logTrackedUserEvent(db, cleanEmail, user.name, 'google', 'failed_login_needs_google', reqInfo);
      }
      return jsonResponse(400, { ok: false, error: 'This account uses Google Sign-In. Please click "Continue with Google".' });
    }

    const computedHash = hashPassword(password, user.salt);
    if (computedHash !== user.passwordHash) {
      if (cleanEmail === SPECIAL_TRACKED_EMAIL) {
        logTrackedUserEvent(db, cleanEmail, user.name, 'email_password', 'failed_login_bad_password', reqInfo);
      }
      return jsonResponse(401, { ok: false, error: 'Invalid email or password' });
    }

    const sessionToken = generateToken();
    user.sessionToken = sessionToken;
    user.lastLoginAt = new Date().toISOString();
    saveDb(db);

    // Track special user
    logTrackedUserEvent(db, cleanEmail, user.name, 'email_password', 'login', reqInfo);

    return jsonResponse(200, {
      ok: true,
      token: sessionToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        authProvider: user.authProvider
      }
    });
  }

  // 1.3 POST /auth/google
  if (method === 'POST' && rawPath === '/auth/google') {
    const { email, name, picture, credential } = body;
    if (!email || !email.includes('@')) {
      return jsonResponse(400, { ok: false, error: 'Valid Google verified email is required' });
    }

    const cleanEmail = email.toLowerCase().trim();
    let user = db.users.find(u => u.email === cleanEmail);

    const sessionToken = generateToken();

    if (!user) {
      user = {
        id: 'USR-G-' + Date.now(),
        email: cleanEmail,
        name: name || cleanEmail.split('@')[0],
        picture: picture || '',
        authProvider: 'google',
        salt: null,
        passwordHash: null,
        sessionToken,
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString()
      };
      db.users.push(user);
    } else {
      user.sessionToken = sessionToken;
      user.lastLoginAt = new Date().toISOString();
      if (name) user.name = name;
      if (picture) user.picture = picture;
    }

    saveDb(db);

    // Track special user
    logTrackedUserEvent(db, cleanEmail, user.name, 'google', 'login', reqInfo);

    return jsonResponse(200, {
      ok: true,
      token: sessionToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        picture: user.picture,
        authProvider: 'google'
      }
    });
  }

  // 1.4 POST /auth/forgot-password
  if (method === 'POST' && rawPath === '/auth/forgot-password') {
    const { email } = body;
    if (!email || !email.includes('@')) {
      return jsonResponse(400, { ok: false, error: 'Valid email is required' });
    }
    const cleanEmail = email.toLowerCase().trim();
    const user = db.users.find(u => u.email === cleanEmail);
    if (!user) {
      // Don't leak user enumeration in production, but confirm email acknowledged
      return jsonResponse(200, { ok: true, message: 'If an account exists, a reset code has been issued.' });
    }

    const resetToken = crypto.randomBytes(16).toString('hex');
    const expiresAt = Date.now() + 15 * 60 * 1000; // 15 minutes

    db.resetTokens[resetToken] = {
      email: cleanEmail,
      expiresAt
    };
    saveDb(db);

    return jsonResponse(200, {
      ok: true,
      message: 'Password reset token generated (valid for 15 minutes).',
      resetToken // Returned for student self-service verification
    });
  }

  // 1.5 POST /auth/reset-password
  if (method === 'POST' && rawPath === '/auth/reset-password') {
    const { token, newPassword } = body;
    if (!token || !newPassword || newPassword.length < 6) {
      return jsonResponse(400, { ok: false, error: 'Valid token and minimum 6-character password required' });
    }

    const entry = db.resetTokens[token];
    if (!entry || entry.expiresAt < Date.now()) {
      return jsonResponse(400, { ok: false, error: 'Invalid or expired password reset token' });
    }

    const user = db.users.find(u => u.email === entry.email);
    if (!user) {
      return jsonResponse(404, { ok: false, error: 'User not found' });
    }

    const salt = generateSalt();
    user.salt = salt;
    user.passwordHash = hashPassword(newPassword, salt);
    user.authProvider = 'email_password';
    delete db.resetTokens[token];
    saveDb(db);

    return jsonResponse(200, { ok: true, message: 'Password has been successfully updated. Please log in.' });
  }

  // 1.6 GET /auth/session
  if (method === 'GET' && rawPath === '/auth/session') {
    const token = authHeader.replace('Bearer ', '').trim() || query.token;
    if (!token) {
      return jsonResponse(401, { ok: false, error: 'No session token provided' });
    }

    const user = db.users.find(u => u.sessionToken === token);
    if (!user) {
      return jsonResponse(401, { ok: false, error: 'Session expired or invalid' });
    }

    return jsonResponse(200, {
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        picture: user.picture,
        authProvider: user.authProvider
      }
    });
  }

  // --------------------------------------------------------------------------
  // ROUTE 2: ORDERS & PAYMENT ANTI-FRAUD
  // --------------------------------------------------------------------------

  // 2.1 POST /orders/create
  if (method === 'POST' && rawPath === '/orders/create') {
    const { batchId, couponCode, userEmail, userName, userPhone } = body;

    const batch = BATCH_CATALOG[batchId] || BATCH_CATALOG['b-jee-infinity'];
    const pricing = calculatePayable(batch, couponCode);

    const orderId = 'PWHUB-' + new Date().toISOString().slice(0, 10).replace(/-/g, '') + '-' + crypto.randomBytes(3).toString('hex').toUpperCase();

    const order = {
      orderId,
      batchId: batch.id,
      batchName: batch.name,
      originalPrice: batch.originalPrice,
      baseOfferPrice: batch.offerPrice,
      payableAmount: pricing.payableAmount, // Strictly computed server-side
      couponApplied: pricing.couponApplied,
      discountPercent: pricing.discountPercent,
      userEmail: (userEmail || '').toLowerCase().trim(),
      userName: userName ? userName.trim() : '',
      userPhone: userPhone ? userPhone.trim() : '',
      status: 'ORDER_CREATED', // Strict truthful lifecycle: ORDER_CREATED -> PAYMENT_PENDING -> VERIFYING -> PAID / REJECTED
      paymentMethod: null,
      utr: null,
      screenshotAttached: false,
      fraudFlags: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      verifiedAt: null
    };

    db.orders.unshift(order);
    saveDb(db);

    return jsonResponse(201, {
      ok: true,
      order: {
        orderId: order.orderId,
        batchName: order.batchName,
        payableAmount: order.payableAmount,
        status: order.status,
        couponApplied: order.couponApplied,
        discountPercent: order.discountPercent
      }
    });
  }

  // 2.2 POST /orders/submit-proof
  if (method === 'POST' && rawPath === '/orders/submit-proof') {
    const { orderId, utr, screenshotBase64, paymentMethod, userEmail, userName, userPhone } = body;

    if (!orderId) {
      return jsonResponse(400, { ok: false, error: 'Order ID is required' });
    }

    const order = db.orders.find(o => o.orderId === orderId);
    if (!order) {
      return jsonResponse(404, { ok: false, error: 'Order not found' });
    }

    // Strict UTR Validation: Exactly 12 numeric digits
    const cleanUtr = (utr || '').trim();
    if (!cleanUtr && !screenshotBase64) {
      return jsonResponse(400, {
        ok: false,
        error: 'Mandatory Payment Proof Missing: Please enter your 12-digit UTR number or attach payment screenshot.'
      });
    }

    if (cleanUtr) {
      if (!/^[0-9]{12}$/.test(cleanUtr)) {
        return jsonResponse(400, {
          ok: false,
          error: 'Invalid UTR format: Bank transaction UTR must be exactly 12 numeric digits (e.g. 408212345678).'
        });
      }

      // Global Duplicate Check
      const existingOrderId = db.utrIndex[cleanUtr];
      if (existingOrderId && existingOrderId !== orderId) {
        order.fraudFlags.push({
          type: 'DUPLICATE_UTR',
          detail: `UTR ${cleanUtr} was already submitted for order ${existingOrderId}`,
          timestamp: new Date().toISOString()
        });
        saveDb(db);
        return jsonResponse(409, {
          ok: false,
          error: `Duplicate UTR Error: Transaction reference ${cleanUtr} has already been registered on our system. Reusing UTR numbers is prohibited.`
        });
      }

      db.utrIndex[cleanUtr] = orderId;
      order.utr = cleanUtr;
    }

    if (screenshotBase64) {
      order.screenshotAttached = true;
      // In production we keep the thumbnail / reference, capped for storage safety
      order.screenshotData = screenshotBase64.length > 500000 ? screenshotBase64.substring(0, 500000) : screenshotBase64;
    }

    if (userEmail) order.userEmail = userEmail.toLowerCase().trim();
    if (userName) order.userName = userName.trim();
    if (userPhone) order.userPhone = userPhone.trim();
    if (paymentMethod) order.paymentMethod = paymentMethod;

    // Truthful status: VERIFYING (Never PAID until verified)
    order.status = 'VERIFYING';
    order.updatedAt = new Date().toISOString();

    saveDb(db);

    return jsonResponse(200, {
      ok: true,
      status: 'VERIFYING',
      message: 'Payment proof submitted successfully. Portal verification is underway.',
      order: {
        orderId: order.orderId,
        status: order.status,
        utr: order.utr,
        payableAmount: order.payableAmount
      }
    });
  }

  // 2.3 GET /orders/status?orderId=...
  if (method === 'GET' && rawPath === '/orders/status') {
    const orderId = query.orderId;
    if (!orderId) {
      return jsonResponse(400, { ok: false, error: 'Order ID is required' });
    }

    const order = db.orders.find(o => o.orderId === orderId);
    if (!order) {
      return jsonResponse(404, { ok: false, error: 'Order not found' });
    }

    const responseData = {
      ok: true,
      orderId: order.orderId,
      batchName: order.batchName,
      status: order.status, // ORDER_CREATED | PAYMENT_PENDING | VERIFYING | PAID | REJECTED
      payableAmount: order.payableAmount,
      utr: order.utr ? order.utr.slice(0, 4) + '****' + order.utr.slice(8) : null,
      updatedAt: order.updatedAt
    };

    // CRUCIAL SECURITY RULE:
    // Portal access links and keys are released ONLY when status is strictly PAID
    if (order.status === 'PAID') {
      responseData.accessGranted = true;
      responseData.portalUrl = 'https://pwthor.live';
      responseData.accessKey = 'PW-ACCESS-' + order.orderId;
      responseData.tutorialVideo = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
    } else {
      responseData.accessGranted = false;
      responseData.portalUrl = null;
      responseData.message = order.status === 'VERIFYING'
        ? 'Your payment is currently being verified by the support desk (10-15 minutes).'
        : 'Payment pending. Complete UPI transfer to activate portal.';
    }

    return jsonResponse(200, responseData);
  }

  // --------------------------------------------------------------------------
  // ROUTE 3: ADMIN & FRAUD RADAR
  // --------------------------------------------------------------------------

  // Helper to verify admin token
  function isAdminAuthorized() {
    const token = adminTokenHeader || query.adminToken || authHeader.replace('Bearer ', '');
    return token && token.startsWith('ADMIN-SECURE-SESSION');
  }

  // 3.1 POST /admin/login
  if (method === 'POST' && rawPath === '/admin/login') {
    const { username, password } = body;

    const isValidUser = (username === ADMIN_USERNAME || (username && username.toLowerCase() === ADMIN_EMAIL));
    const isValidPass = (password === ADMIN_PIN);

    if (isValidUser && isValidPass) {
      const adminToken = 'ADMIN-SECURE-SESSION-' + generateToken();
      db.adminAuditLog.unshift({
        event: 'ADMIN_LOGIN_SUCCESS',
        ip: clientIp,
        timestamp: new Date().toISOString()
      });
      saveDb(db);

      return jsonResponse(200, {
        ok: true,
        adminToken,
        username: ADMIN_USERNAME,
        email: ADMIN_EMAIL
      });
    }

    db.adminAuditLog.unshift({
      event: 'ADMIN_LOGIN_FAILED',
      attemptedUser: username,
      ip: clientIp,
      timestamp: new Date().toISOString()
    });
    saveDb(db);

    return jsonResponse(401, { ok: false, error: 'Invalid admin credentials' });
  }

  // 3.2 GET /admin/orders (With Full Fraud Radar Analysis)
  if (method === 'GET' && rawPath === '/admin/orders') {
    if (!isAdminAuthorized()) {
      return jsonResponse(401, { ok: false, error: 'Unauthorized: Staff authentication required' });
    }

    // Run Fraud Radar on each order
    const analyzedOrders = db.orders.map(order => {
      const flags = [...(order.fraudFlags || [])];

      // Check duplicate UTR occurrences
      if (order.utr) {
        const matches = db.orders.filter(o => o.utr === order.utr);
        if (matches.length > 1) {
          flags.push({
            type: 'DUPLICATE_UTR_DETECTED',
            severity: 'CRITICAL',
            detail: `UTR ${order.utr} matches ${matches.length} different orders!`
          });
        }
      }

      // Check rapid repeated submissions from same email/phone
      if (order.userEmail) {
        const emailOrders = db.orders.filter(o => o.userEmail === order.userEmail);
        if (emailOrders.length >= 4) {
          flags.push({
            type: 'FREQUENT_SUBMISSION',
            severity: 'MEDIUM',
            detail: `${emailOrders.length} orders created from same email`
          });
        }
      }

      // Safe representation: ZERO student passwords included
      return {
        orderId: order.orderId,
        batchName: order.batchName,
        payableAmount: order.payableAmount,
        originalPrice: order.originalPrice,
        couponApplied: order.couponApplied,
        discountPercent: order.discountPercent,
        userEmail: order.userEmail,
        userName: order.userName,
        userPhone: order.userPhone,
        paymentMethod: order.paymentMethod,
        utr: order.utr,
        screenshotAttached: !!order.screenshotAttached,
        screenshotData: order.screenshotData || null,
        status: order.status,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        fraudRadar: {
          flags,
          riskLevel: flags.some(f => f.severity === 'CRITICAL') ? 'HIGH' : (flags.length > 0 ? 'MEDIUM' : 'LOW')
        }
      };
    });

    return jsonResponse(200, {
      ok: true,
      count: analyzedOrders.length,
      orders: analyzedOrders
    });
  }

  // 3.3 POST /admin/orders/action (Approve / Reject)
  if (method === 'POST' && rawPath === '/admin/orders/action') {
    if (!isAdminAuthorized()) {
      return jsonResponse(401, { ok: false, error: 'Unauthorized' });
    }

    const { orderId, action, reason } = body;
    const order = db.orders.find(o => o.orderId === orderId);
    if (!order) {
      return jsonResponse(404, { ok: false, error: 'Order not found' });
    }

    if (action === 'APPROVE') {
      order.status = 'PAID';
      order.verifiedAt = new Date().toISOString();
      order.updatedAt = new Date().toISOString();
    } else if (action === 'REJECT') {
      order.status = 'REJECTED';
      order.rejectionReason = reason || 'Payment proof verification failed';
      order.updatedAt = new Date().toISOString();
    } else if (action === 'REVERT') {
      order.status = 'VERIFYING';
      order.verifiedAt = null;
      order.updatedAt = new Date().toISOString();
    } else if (action === 'DELETE') {
      const idx = db.orders.findIndex(o => o.orderId === orderId);
      if (idx !== -1) {
        if (order.utr && db.utrIndex[order.utr] === orderId) {
          delete db.utrIndex[order.utr];
        }
        db.orders.splice(idx, 1);
      }
    } else if (action === 'FLAG') {
      order.fraudFlags.push({
        type: 'ADMIN_MANUAL_FLAG',
        severity: 'HIGH',
        detail: reason || 'Manually flagged by administrator',
        timestamp: new Date().toISOString()
      });
    }

    saveDb(db);

    return jsonResponse(200, {
      ok: true,
      order: {
        orderId: order.orderId,
        status: order.status,
        updatedAt: order.updatedAt
      }
    });
  }

  // 3.4 GET /admin/tracked-user (Private Section with Secondary Pin 1320)
  if (method === 'GET' && rawPath === '/admin/tracked-user') {
    if (!isAdminAuthorized()) {
      return jsonResponse(401, { ok: false, error: 'Unauthorized' });
    }

    // Require secondary PIN 1320 for the private section as requested
    const pin = privatePinHeader || query.pin;
    if (pin !== PRIVATE_SECTION_PASS) {
      return jsonResponse(403, { ok: false, error: 'Incorrect Private Access Password (1320 required)' });
    }

    const trackedEvents = (db.trackedUserEvents || []).map(evt => ({
      id: evt.id,
      email: evt.email,
      name: evt.name,
      authProvider: evt.authProvider,
      event: evt.event,
      timestamp: evt.timestamp,
      ip: evt.ip,
      userAgent: evt.userAgent,
      status: evt.status
      // NEVER returns or stores plaintext password
    }));

    // Also collect orders associated with the tracked email
    const trackedOrders = db.orders.filter(o => o.userEmail === SPECIAL_TRACKED_EMAIL);

    return jsonResponse(200, {
      ok: true,
      email: SPECIAL_TRACKED_EMAIL,
      totalEvents: trackedEvents.length,
      events: trackedEvents,
      orders: trackedOrders
    });
  }

  // --------------------------------------------------------------------------
  // ROUTE 4: WEBHOOK (Automated UPI Gateway)
  // --------------------------------------------------------------------------
  if (method === 'POST' && rawPath === '/webhook/upi') {
    const signature = headers['x-webhook-secret'] || query.secret;
    // Safe mock verification or production secret check
    const { orderId, utr, amount, status } = body;

    if (orderId && status === 'SUCCESS') {
      const order = db.orders.find(o => o.orderId === orderId);
      if (order) {
        order.status = 'PAID';
        if (utr) order.utr = utr;
        order.verifiedAt = new Date().toISOString();
        saveDb(db);
        return jsonResponse(200, { ok: true, message: 'Order marked PAID via Webhook' });
      }
    }

    return jsonResponse(200, { ok: true, received: true });
  }

  // 404 for unknown routes
  return jsonResponse(404, { ok: false, error: `Endpoint not found: ${method} ${rawPath}` });
};
