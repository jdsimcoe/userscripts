// ==UserScript==
// @name        Coolors: Internal Links
// @description Script to make all Coolors links internal
// @include     https://coolors.co
// @include     https://coolors.co/*
// @author      Jonathan Simcoe
// ==/UserScript==


var anchors = document.getElementsByTagName('a');
for ( var i in anchors )
  anchors[i].onclick = function () { return this.target = '_self'; };
