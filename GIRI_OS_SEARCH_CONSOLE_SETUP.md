# GIRI OS OFFICIAL WEBSITE — SEARCH CONSOLE & WEBMASTER SETUP GUIDE

**Project:** Giri OS Official Website  
**Repository:** [`abhinavgiri45/giri-os-website`](https://github.com/abhinavgiri45/giri-os-website)  
**Primary Domain:** `https://girios.org`  
**Target Search Consoles:** Google Search Console & Bing Webmaster Tools  
**Audience:** Repository Owner & Project Administrator  
**Date:** November 19, 2026  

---

## 1. Important Owner Action Notice

In accordance with strict security standards, an AI assistant or CI/CD runner cannot access your private Google account, Cloudflare dashboard, or domain registrar. 

This guide provides the **exact, step-by-step instructions** for the owner (`abhinavgiri45`) to verify domain ownership, submit the XML sitemap, inspect live indexing, and monitor organic performance in Google Search Console and Bing Webmaster Tools.

---

## 2. Google Search Console (GSC) Setup Walkthrough

### Step 1: Open Google Search Console
1. Navigate to [search.google.com/search-console](https://search.google.com/search-console).
2. Log in with your primary administrative Google account.

### Step 2: Add New Property
1. Click the property selector dropdown in the top-left corner and click **Add property**.
2. Select the **Domain** property option (recommended over URL-prefix because it automatically covers `https://`, `http://`, `www.`, and all subdomains):
   - Enter: `girios.org`
   - Click **Continue**.

### Step 3: Domain DNS Verification (via Cloudflare DNS)
Google will provide a unique TXT verification record string (e.g. `google-site-verification=abc123xyz...`).

To verify using Cloudflare (where your domain DNS is hosted):
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Select your domain (`girios.org`).
3. In the left navigation, click **DNS > Records**.
4. Click **Add record**:
   - **Type:** `TXT`
   - **Name:** `@` (or `girios.org`)
   - **Content:** Paste the exact `google-site-verification=...` string from Google.
   - **TTL:** Auto
5. Click **Save**.
6. Return to Google Search Console and click **Verify**. Cloudflare DNS propagates within seconds, and Google will confirm verification.

*(Alternative Method: If using URL-prefix property `https://girios.org/`, you can also verify via HTML tag by copying the code into `index.html`).*

### Step 4: Submit XML Sitemap
1. In the left navigation menu of Google Search Console, click **Sitemaps** (under Indexing).
2. In the "Add a new sitemap" input field, enter:
   ```text
   sitemap.xml
   ```
   *(The full path submitted will be `https://girios.org/sitemap.xml`)*.
3. Click **Submit**.
4. Google will queue the sitemap. Within 24 to 48 hours, the Status column will turn green and display **Success**, reporting 12 discovered URLs.

### Step 5: Execute URL Inspection on Key Pages
To expedite initial discovery and test rendering:
1. In the top search bar, enter: `https://girios.org/` and press `Enter`.
2. Click **Test Live URL**.
3. Confirm that:
   - Status returns **URL is available to Google**.
   - Page fetch returns **Successful**.
   - Screenshot / DOM reveals pre-rendered HTML and structured data.
4. Click **Request Indexing**.
5. Repeat for high-priority landing pages:
   - `https://girios.org/downloads`
   - `https://girios.org/features`
   - `https://girios.org/docs`

---

## 3. Bing Webmaster Tools Setup Walkthrough

Bing powers search for Bing, Yahoo, DuckDuckGo, and Copilot.

### Method 1: Instant One-Click Import from Google (Recommended)
1. Navigate to [bing.com/webmasters](https://www.bing.com/webmasters).
2. Sign in with your Microsoft, Google, or GitHub account.
3. Choose the option: **Import your sites from GSC (Google Search Console)**.
4. Click **Continue** and grant read access to your Google Search Console property.
5. Bing will instantly verify ownership, import `girios.org`, and automatically queue `https://girios.org/sitemap.xml` without requiring any DNS edits!

### Method 2: Manual Sitemap Submission in Bing
1. If adding manually, go to **Sitemaps** in the Bing Webmaster sidebar.
2. Enter: `https://girios.org/sitemap.xml` and click **Submit sitemap**.

---

## 4. Structured Data & Rich Results Validation Tools

Before waiting for Google to crawl, test your live structured data using Google's official public test suites:

1. **Google Rich Results Test:**
   - URL: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
   - Test `https://girios.org/` -> Should detect: **SoftwareApplication**, **Organization**, **WebSite**.
   - Test `https://girios.org/downloads` -> Should detect: **FAQPage**, **BreadcrumbList**.
   - Test `https://girios.org/docs` -> Should detect: **TechArticle**, **BreadcrumbList**.

2. **Schema.org Official Validator:**
   - URL: [validator.schema.org](https://validator.schema.org/)
   - Paste the URL or JSON-LD payload to confirm 0 errors and 0 warnings.

3. **Google PageSpeed Insights:**
   - URL: [pagespeed.web.dev](https://pagespeed.web.dev/)
   - Benchmark mobile and desktop Core Web Vitals to verify LCP < 2.5s and CLS = 0.

---

## 5. Ongoing Monitoring Protocol

| Report in GSC | What to Check | Frequency |
| :--- | :--- | :--- |
| **Performance (Search Results)** | Total clicks, impressions, average CTR, and ranking position for "Giri OS" queries. | Weekly |
| **Pages (Indexing)** | Confirm all 12 canonical pages have status "Indexed". Check for 404s or crawl errors. | Weekly |
| **Core Web Vitals** | Verify that 100% of URLs remain categorized as "Good URLs" on mobile and desktop. | Monthly |
| **Enhancements (Structured Data)** | Check for green checkmarks on Breadcrumbs, FAQs, and Articles. | Monthly |
| **Security & Manual Actions** | Ensure status displays "No issues detected". | Monthly |
