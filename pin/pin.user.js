// ==UserScript==
// @name           PinboardFaviconed by Jonathan Simcoe
// @namespace      http://jawfin.thesimcoes.net
// @description    Pinboard.in Favicon Mod by Jonathan Simcoe
// @include        http*://pinboard.in/*
// ==/UserScript==

var favvy = document.createElement('link');
favvy.setAttribute('type', 'image/ico');
favvy.setAttribute('rel', 'shortcut icon');
favvy.setAttribute('href', 'http://jawfin.thesimcoes.net/extras/pin/favicon.ico');
var head = document.getElementsByTagName('head')[0];
head.appendChild(favvy);