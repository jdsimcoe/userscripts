// ==UserScript==
// @name           DuckDuckGo Restyled by Jonathan Simcoe
// @namespace      http://simko.io
// @description    A skin for the new DuckDuckGo by Jonathan Simcoe
// @include        http*://*duckduckgo.com/*
// ==/UserScript==

var hal = function (){
	var css = '@import "https://dl.dropboxusercontent.com/u/960204/userscripts/ddg.css";';

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
