// ==UserScript==
// @name           Demandware LiveReload
// @namespace      http://simko.io/
// @description    Auto-add in the LiveReload script on Demandware Sandbox isntances
// @include        http://*web.deckers.demandware.net/*
// @include        https://*web.deckers.demandware.net/*
// ==/UserScript==

var favvy = document.createElement('script');
favvy.setAttribute('src', '//localhost:35729/livereload.js');
var head = document.getElementsByTagName('head')[0];
head.appendChild(favvy);