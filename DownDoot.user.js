// ==UserScript==
// @supports     TamperMonkey
// @name         DownDootJS Speedier
// @namespace    tools.steem.downdootjs
// @version      2.1.5
// @description  Downdoot Everything!
// @author       Professional DownDooters™ (@cadawg)
// @match        http*://*/*
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

 function toDoot(dootable) {
   return dootable.replace(/flagg|flag|downvote/gi, function(x) {
            var xss = x.substring(0,1);
            if (xss.toUpperCase() == xss) {
                return "Downdoot";
            } else {
               return "downdoot";
            }
        });
}

 function checkDootable() {
     $('[href*=downdoot_challenge]').replaceWith("DownDootJS is installed and active!")
    if ((/flagg|flag|downvote/gi.test(document.body.innerHTML))) {
    var paras = document.getElementsByTagName('*');
        for (var i = 0; i < paras.length; i++) {
            console.log($(paras[i]));
            try {
            if (/flagg|flag|downvote/gi.test($(paras[i]).contents().filter(function(){return this.nodeType == 3;})[0].nodeValue)) {
                $(paras[i]).contents().filter(function(){
                    return this.nodeType == 3;
                })[0].nodeValue = toDoot($(paras[i]).contents().filter(function(){
                    return this.nodeType == 3;
                })[0].nodeValue);
            }
            } catch (err) {}
            /*if (/flag|downvote/gi.test($(paras[i]).text())) {
               paras[i].textContent = toDoot(paras[i].textContent);
            }*/
        };
 }
}

 (function() {
    'use strict';
    window.addEventListener("load", function(event) {
        checkDootable();
    });
    setInterval(checkDootable, 1000);
})();
