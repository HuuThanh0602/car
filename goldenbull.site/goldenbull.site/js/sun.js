var WebFontConfig = WebFontConfig || {};
			WebFontConfig['active'] = function() {
				if ( typeof ( window.jQuery ) !== 'undefined' ) {
					jQuery(window).trigger('liquid_async_fonts_active');
				}
			};
			WebFontConfig['inactive'] = function() {
				if ( typeof ( window.jQuery ) !== 'undefined' ) {
					jQuery(window).trigger('liquid_async_fonts_inactive');
				}
			};
			
	window.liquidParams = {
		currentZIndex: 10,
		lazyLoadOffset: 500,
		ccOuterSize: 35,
		ccActiveCircleBg: 1,
		ccActiveCircleBc: 1,
	};
	window.liquidIsElementor = true;