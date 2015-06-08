// ==UserScript==
// @name           Inbox Vitamin by Jonathan Simcoe
// @namespace      http://simko.io
// @description    A skin for Gmail by Jonathan Simcoe
// @include        http*://inbox.google.com/*
// ==/UserScript==

var hal = function (){
	var css = '.nJ.s0,.jS.kl,.oa.ew,#tS8S,.fK{display:none !important;}';
	var node = document.createElement("style");
	node.innerHTML = css;
	heads[0].appendChild(node);
}

window.setTimeout(hal, 0000);
