// ==UserScript==
// @name           Inbox Vitamin by Jonathan Simcoe
// @namespace      http://simko.io
// @description    A skin for Gmail by Jonathan Simcoe
// @include        http*://inbox.google.com/*
// ==/UserScript==

var hal = function (){
	var css = '.nJ.s0,.jS.kl,.oa.ew,.tS8S,.fK(display:none !important;)';

	if (typeof GM_addStyle != "undefined") {
		GM_addStyle(css);
	} else if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {
			var node = document.createElement("style");
			//node.type = "text/css";
			node.innerHTML = css;
			heads[0].appendChild(node);
		}
	}
}

window.setTimeout(hal, 0000);
