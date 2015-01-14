// ==UserScript==
// @name           Simplenote De-FusionAd(ded) by Jonathan Simcoe
// @namespace      http://jawfin.thesimcoes.net
// @description    A mod for Simplenote by Jonathan Simcoe
// @include        https://simple-note.appspot.com/*
// @include				 http://simple-note.appspot.com/*
// @include				 https://simple-note.appspot.com/
// ==/UserScript==

var hal = function (){
	var css = '@import "http://jawfin.thesimcoes.net/snote/snote-vitamin.css";';
	
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
window.setTimeout(hal, 2000);