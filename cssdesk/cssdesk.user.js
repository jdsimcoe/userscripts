// ==UserScript==
// @name        CssDeskFaviconed
// @description Script to add a custom Favicon to Frvnt
// @include     http://*.cssdesk.com/*
// @include     http://cssdesk.com/*
// @include     http://cssdesk.com*
// @author      CssDeskFaviconed by Jonathan Simcoe
// ==/UserScript==


var favvy = document.createElement('link');
favvy.setAttribute('type', 'image/ico');
favvy.setAttribute('rel', 'shortcut icon');
favvy.setAttribute('href', 'http://jawfin.thesimcoes.net/cssdesk/favicon.ico');
var head = document.getElementsByTagName('head')[0];
head.appendChild(favvy);