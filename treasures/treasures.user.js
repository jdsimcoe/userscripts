// ==UserScript==
// @name        GreatTreasures Faviconed
// @description Script to add a custom Favicon to GreatTreasures.org
// @include     http://greattreasures.org/*
// @author      GreatTreasures Faviconed by Jonathan Simcoe
// ==/UserScript==

var favvy = document.createElement('link');
favvy.setAttribute('type', 'image/ico');
favvy.setAttribute('rel', 'shortcut icon');
favvy.setAttribute('href', 'http://jawfin.thesimcoes.net/extras/treasures/bible.png');
var head = document.getElementsByTagName('head')[0];
head.appendChild(favvy);