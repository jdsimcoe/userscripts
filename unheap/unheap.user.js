// ==UserScript==
// @name           Unheap Styled by Jonathan Simcoe
// @namespace      http://simko.io
// @description    A skin for Unheap by Jonathan Simcoe
// @include        http*://www.unheap.com
// @include        http*://www.unheap.com/*
// ==/UserScript==

var hal = function (){
	var css = 'ul.menu{padding-top:0 !important;}';
	var node = document.createElement("style");
	node.innerHTML = css;
	heads = document.getElementsByTagName("head");
	heads[0].appendChild(node);
}

window.setTimeout(hal, 0);
