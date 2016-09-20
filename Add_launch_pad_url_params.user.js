// ==UserScript==
// @name         Add launch pad url params
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  add cb language switcher params
// @author       Dorian Li
// @match        http://qp2wdp.nanshan.com.tw:8888/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html
// @match        http://dp2wdp.nanshan.com.tw:8888/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html
// @match        https://agsdev02.mo.sap.corp:8443/sap/bc/ui5_ui5/ui2/ushell/shells/abap/FioriLaunchpad.html
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var oldParam = window.location.search;
    var switches = ["sap-ui-xx-componentPreload=off","sap-ushell-nocb=true","sap-language=ZF"];
    var newParam = "";
    if(oldParam !== ""){
       for(var i=0; i<switches.length; i++){
           if(oldParam.indexOf(switches[i]) !== -1){
               switches.splice(i, 1);
           }
       }
       window.location.search = oldParam + "&" + switches.join("&");
    }else{
       window.location.search = "?" + switches.join("&");
    }
})();