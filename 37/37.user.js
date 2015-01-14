// ==UserScript==
// @name           Basecamp Favicon by Jonathan Simcoe
// @namespace      http://jawfin.thesimcoes.net
// @description    Launchpad Favicon for Basecamp by Jonathan Simcoe
// @include        http://basecamp.com/*
// @include        https://basecamp.com/*
// ==/UserScript==

var favvy = document.createElement('link');
favvy.setAttribute('type', 'image/ico');
favvy.setAttribute('rel', 'shortcut icon');
favvy.setAttribute('href', 'https://launchpad-asset0.37signals.com/favicon.ico?1339518602');
var head = document.getElementsByTagName('head')[0];
head.appendChild(favvy);
var hal = function (){
  var css = '@import "https://dl.dropboxusercontent.com/u/960204/userscripts/basecamp.css";';

  if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
  } else if (typeof addStyle != "undefined") {
    addStyle(css);
  } else {
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
      var node = document.createElement("style");
      //node.type = "text/css";
      node.innerHTML = css;
      heads[0].appendChild(node);
    }
  }
}
window.setTimeout(hal, 0000);