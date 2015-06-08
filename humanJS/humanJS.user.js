// ==UserScript==
// @name        HumanJS Faviconed
// @description Script to add a custom Favicon to HumanJavascript.com
// @include     http*://humanjavascript.com/*
// @include     http*://*.humanjavascript.com/*
// @author      Jonathan Simcoe
// ==/UserScript==

var favvy = document.createElement('link');
favvy.setAttribute('type', 'image/ico');
favvy.setAttribute('rel', 'shortcut icon');
favvy.setAttribute('href', 'http://ampersandjs.com/favicon.ico');
var head = document.getElementsByTagName('head')[0];
head.appendChild(favvy);
