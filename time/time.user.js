// ==UserScript==
// @name        TimesheetFaviconed
// @description Script to add a custom Favicon to Timesheet
// @include     http://oresm03/eSMLive/*
// @author      TimesheetFaviconed by Jonathan Simcoe
// ==/UserScript==


var favvy = document.createElement('link');
favvy.setAttribute('type', 'image/ico');
favvy.setAttribute('rel', 'shortcut icon');
favvy.setAttribute('href', 'http://jawfin.thesimcoes.net/extras/time/time-16.png');
var head = document.getElementsByTagName('head')[0];
head.appendChild(favvy);