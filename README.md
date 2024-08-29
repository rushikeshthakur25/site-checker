# Site Checker

## Overview

Site Checker is a browser extension designed to determine whether a website is legitimate or potentially a scam. It analyzes the domain and subdomain of the current site, compares it against a blocklist, and provides a status update.

## Features

- Checks if a site is on a predefined blocklist.
- Provides a visual status update indicating whether the site is potentially a scam or appears safe.
- Supports Chrome, Firefox, and Microsoft Edge browsers.

## Installation

### Chrome

1. Download the latest version from [GitHub Releases](https://github.com/rushikeshthakur25/site-checker/releases).
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle in the top-right corner.
4. Click "Load unpacked" and select the directory where you extracted the downloaded files.

### Firefox

1. Download the latest version from [GitHub Releases](https://github.com/rushikeshthakur25/site-checker/releases).
2. Open Firefox and go to `about:debugging`.
3. Click "This Firefox" (or "This Nightly" for Firefox Nightly).
4. Click "Load Temporary Add-on" and select the `.xpi` file from the downloaded release.

### Microsoft Edge

1. Download the latest version from [GitHub Releases](https://github.com/rushikeshthakur25/site-checker/releases).
2. Open Edge and go to `edge://extensions/`.
3. Enable "Developer mode" using the toggle in the bottom-left corner.
4. Click "Load unpacked" and select the directory where you extracted the downloaded files.

## Usage

1. Open the extension popup by clicking on the Site Checker icon in the browser toolbar.
2. The extension will automatically check the current website and display a status message indicating whether the site is potentially a scam or appears safe.

## Blocklist

The blocklist used by Site Checker includes various known scam and phishing domains. You can customize the blocklist in the `content.js` file to add or remove domains as needed.

## Future Updates

This is the first version of Site Checker. Future updates will include more powerful features and improvements. Stay tuned for enhancements and additional functionality!

## Contributing

Feel free to contribute by submitting issues or pull requests on the [GitHub repository](https://github.com/rushikeshthakur25/site-checker). Your feedback and contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

