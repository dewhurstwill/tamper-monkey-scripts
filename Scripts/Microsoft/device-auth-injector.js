// ==UserScript==
// @name         Inject Device Auth OTP
// @description  Injects the query parameter value of otp into the field with the ID of otc
// @namespace    http://tampermonkey.net/
// @version      0.3
// @author       Will Dewhurst
// @include      https://login.microsoftonline.com/common/oauth2/deviceauth?otp=*
// @icon         https://www.google.com/s2/favicons?domain=microsoftonline.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
        document.getElementById('otc').value = window.location.search.split('=')[1];
        setTimeout(function(){
            document.getElementById('i5528').submit();
        }, 500);
    }, 500);

})();
