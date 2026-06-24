# 🔍 Site Checker - Browser Security Extension

A cybersecurity-focused browser extension that helps users identify potentially malicious websites by analyzing domains against known threat indicators.

## 🚀 Overview

Site Checker is a lightweight browser security extension built to help users detect suspicious or scam websites during browsing.

The extension checks the active website domain, compares it with a predefined threat blocklist, and provides a security status notification.

## 🎯 Objectives

- Detect potentially malicious websites
- Help users avoid phishing/scam pages
- Provide quick security awareness while browsing
- Demonstrate browser-based security automation

## ✨ Features

✅ Domain reputation checking  
✅ Scam/phishing domain detection  
✅ Real-time website analysis  
✅ Browser popup security status  
✅ Customizable blocklist  
✅ Lightweight browser integration  

## 🛠️ Technologies Used

- JavaScript
- HTML
- Chrome Extension APIs
- Browser Security APIs

## 🧩 Project Structure
site-checker/
│
├── manifest.json # Extension configuration
├── background.js # Background service logic
├── content.js # Website content analysis
├── popup.html # Extension interface
├── popup.js # Popup functionality
└── icons/ # Extension assets


## ⚙️ Installation

### Chrome / Edge

1. Clone the repository

bash
git clone https://github.com/rushikeshthakur25/site-checker.git

2. Open:
   chrome://extensions/
3. Enable Developer Mode
4. Click "Load unpacked"
5. Select project folder 

🧪 Usage
Open any website
Click Site Checker extension
View security status

Example:
Safe Website:

Status: Safe ✅

Suspicious Website:

Warning: Potential Risk ⚠️
