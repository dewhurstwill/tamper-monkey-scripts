// ==UserScript==
// @name         Redirect GitHub
// @description  Redirect GitHub homepage to user overview
// @namespace    https://github.com/dewhurstwill/tamper-monkey-scripts/blob/main/Scripts/Microsoft/redirect-github-homepage.js
// @version      0.2
// @author       Will Dewhurst
// @match        https://github.com
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// ==/UserScript==

// https://github.com will redirect you to your account overview
// https://github.com/# will take you to the github homepage
(function() {
    'use strict';
    const username = 'YOUR GITHUB USERNAME'
    if (!(window.location.href.includes('/#'))) {
      window.location.href = `https://github.com/${username || '#'}`;
    }
})();

