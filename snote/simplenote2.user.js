// ==UserScript==
// @name           Simplenote Faviconed by Jonathan Simcoe
// @namespace      http://jawfin.thesimcoes.net
// @description    A mod for Simplenote by Jonathan Simcoe
// @include        https://simple-note.appspot.com/*
// @include				 http://simple-note.appspot.com/*
// @include				 http://simple-note.appspot.com/index.html
// ==/UserScript==


var favvy = document.createElement('link');
favvy.setAttribute('type', 'image/ico');
favvy.setAttribute('rel', 'shortcut icon');
favvy.setAttribute('href', 'http://jawfin.thesimcoes.net/snote/favicon.ico');
var head = document.getElementsByTagName('head')[0];
head.appendChild(favvy);