(function($){
	
	var swfPath = 'swf/almostaudio.swf';
	
	if (navigator.userAgent.indexOf('MSIE') > -1) {
		swfPath+= '?=' + Number(new Date());
	}
	
	$.almostAudio = {
		// SWF Options
		swf: {
			swf: swfPath,
			width: 1,
			height: 1,
			wmode: 'transparent',
			flashvars: {
				callback: '$.almostAudio._callback'
			}
		},
		// Player styles
		style: {
			width: '1px', 
			height: '1px', 
			left: '0', 
			top: '0',
			position: 'absolute'
		},
		// Autocreate (set to false to disable)
		autocreate: _useFlash(),
		// Native attributes
		autoplay: false,
		loop: false,
		preload: true,
		src: null,
		// Optional user-defined events
		onPlay: null,
		onPause: null,
		onStopped: null,
		onEnded: null,
		onLoadedData: null,
		onLoadError: null,
		// Player states
		paused: null,
		ended: null,
		loadeddata: null,
		// Storage
		lastSrc: null,
		$player: null,
		player: null,
		// Feature tests
		hasFlash: _hasFlash(),
		useFlash: _useFlash(),
		available: !(_useFlash() && !_hasFlash())
	};
	
	// Check for Flash and SWFObject
	function _hasFlash(){
		if (typeof($.flash) === 'undefined') return false;
		return $.flash.available && $.flash.hasVersion(10);
	}
	
	// Check for codec support
	function _useFlash(){
		var a = document.createElement('audio');
		return !(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
	}
	
	// Create player object
	function _create(){
		if (!$.almostAudio.available) {
			return false;
		}
		if (!$.almostAudio.$player) {
			if ($.almostAudio.useFlash) {
				$.almostAudio.$player = $('<div />').css($.almostAudio.style).appendTo('body');
				$.almostAudio.$player.flash($.almostAudio.swf);
			} else {
				$.almostAudio.$player = $('<audio />').css($.almostAudio.style).appendTo('body');
				$.almostAudio.$player.bind('ended',function(){
					$.almostAudio._callback('ended');
				}).bind('loadeddata',function(){
					$.almostAudio._callback('loadeddata');
				}).bind('error',function(){
					$.almostAudio._callback('error');
				});
				$.almostAudio.player = $.almostAudio.$player.get(0);
			}
		}
		return true;
	}
	
	// Initialize player on DOM readiness (for Flash's sake)
	$(document).ready(function(){
		if ($.almostAudio.autocreate) {
			_create();
		}
	});
	
	$.almostAudio.init = function(options){
		if (!_create()) {
			return false;
		}
		if (typeof options !== 'object') {
			options = {src:options};
		}
		$.almostAudio = $.extend({},$.almostAudio, options);
		if ($.almostAudio.src !== $.almostAudio.lastSrc || $.almostAudio.lastSrc === null) {
			$.almostAudio.loadeddata = false;
			$.almostAudio.paused = $.almostAudio.ended = null;
			if ($.almostAudio.useFlash) {
				$.almostAudio.$player.flash(function(){
					this.setSrc($.almostAudio.src);
				});
				if ($.almostAudio.preload) {
					$.almostAudio.$player.flash(function(){
						this.loadSound();
					});
				}
			} else {
				$.almostAudio.$player.attr('src',$.almostAudio.src);
				$.almostAudio.$player.attr('preload', $.almostAudio.preload ? 'auto' : 'none');
			}
		}
		return $.almostAudio.src ? true : false;
	}
	
	$.almostAudio.play = function(options){
		if (!$.almostAudio.init(options) && !$.almostAudio.paused) {
			return false;
		}
		if ($.almostAudio.useFlash) {
			$.almostAudio.$player.flash(function(){
				this.playSound();
			});
		} else {
			//setTimeout('$.almostAudio.player.play()',100);
			$.almostAudio.player.play();
		}
		$.almostAudio.lastSrc = $.almostAudio.src;
		$.almostAudio.paused = $.almostAudio.ended = false;
		if ($.almostAudio.onPlay) {
			$.almostAudio.onPlay();
		}
		return true;
	}
	
	$.almostAudio.pause = function(options){
		if (!$.almostAudio.init(options) || $.almostAudio.paused) {
			return false;
		}
		if ($.almostAudio.useFlash) {
			$.almostAudio.$player.flash(function(){
				this.pauseSound();
			});
		} else {
			$.almostAudio.player.pause();
		}
		$.almostAudio.paused = true;
		if ($.almostAudio.onPause) {
			$.almostAudio.onPause();
		}
		return true;
	}
	
	$.almostAudio.playPause = function(options){
		if ($.almostAudio.paused !== false) {
			return $.almostAudio.play(options);
		} else {
			return $.almostAudio.pause(options);
		}
	}
	
	$.almostAudio.stop = function(options) {
		if (!$.almostAudio.init(options)) {
			return false;
		}
		if ($.almostAudio.useFlash) {
			$.almostAudio.$player.flash(function(){
				this.stopSound();
			});
		} else {
			$.almostAudio.player.pause();
			$.almostAudio.player.currentTime = 0;
		}
		$.almostAudio.paused = $.almostAudio.ended = null;
		if ($.almostAudio.onStopped) {
			$.almostAudio.onStopped();
		}
		return true;
	}
	
	$.almostAudio._callback = function(str,msg) {
		switch(str) {
			case 'ended':
				if ($.almostAudio.onEnded) {
					$.almostAudio.onEnded();
				}
				if ($.almostAudio.loop) {
					$.almostAudio.play();
				}
				break;
			case 'error':
				if ($.almostAudio.onLoadError) {
					$.almostAudio.onLoadError(msg);
				}
				break;
			case 'loadeddata':
				$.almostAudio.loadeddata = true;
				if ($.almostAudio.autoplay) {
					$.almostAudio.play();
				}
				if ($.almostAudio.onLoadedData) {
					$.almostAudio.onLoadedData();
				}
				break;
		}
	}
	
})(jQuery);