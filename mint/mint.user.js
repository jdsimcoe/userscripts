// ==UserScript==
// @name           Mint.com Faviconed by Jonathan Simcoe
// @namespace      http://jawfin.thesimcoes.net
// @description    A mod for Mint.com by Jonathan Simcoe
// @include        https://wwws.mint.com/*
// ==/UserScript==

var favvy = document.createElement('link');
favvy.setAttribute('type', 'image/ico');
favvy.setAttribute('rel', 'shortcut icon');
favvy.setAttribute('href', 'http://jawfin.thesimcoes.net/mint/favicon.ico');
var head = document.getElementsByTagName('head')[0];
head.appendChild(favvy);