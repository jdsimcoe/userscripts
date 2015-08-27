// ==UserScript==
// @name           StackOverflow Wide by Jonathan Simcoe
// @namespace      http://simko.io
// @description    A skin for Stack Overflow by Jonathan Simcoe
// @include        http*://stackoverflow.com
// @include        http*://stackoverflow.com/*
// ==/UserScript==

var hal = function (){
	var css = '#content{width: 1000px !important;}#mainbar, .mainbar {width: 1000px !important;}.question-summary{width:1000px !important}.narrow .summary {width: 815px !important;}';
	var node = document.createElement("style");
	node.innerHTML = css;
	heads = document.getElementsByTagName("head");
	heads[0].appendChild(node);
}

window.setTimeout(hal, 0);
