(function($) {
	var methods = {
		init : function(options, css) {
			options = $.extend({
				timeout : 1000,
				colWidth : 1
			}, options);

			//var settings = $.extend({
			//	overflow : 'hidden',
			//	border : '1px solid #ddd',
			//	width : '100px',
			//	height : '100px'
			//}, css);

			//Эти параметры не переопределяем
			//settings = $.extend(settings, {
			//	verticalAlign : 'bottom',
			//	lineHeight : settings.height
			//});
			
			
			return this.each(function() {
				var $this = $(this);

				//$this.css(settings);
				$this.css({
					verticalAlign : 'bottom',
					lineHeight : $this.height()
				});

				//количество столбиков
				var colQuantity = Math.ceil($this.width() / options.colWidth);
				for (var i = 0; i < colQuantity; i++) {
					var span = $('<span/>').appendTo($this);
					span.css({
						verticalAlign : 'bottom',
						display : 'inline-block',

						fontSize : 0,
						lineHeight : 0,

						width : options.colWidth,
						background : 'pink',
						borderTop : '2px solid red',
						
						//height : $this.height() / 2
					});
				}

			});
		},

		run : function(timeout) {
			console.log("run");
			return this.each(function() {
				
				console.log("EACH");
				var $this = $(this);

				var spans = $this.children('span'), 
				    spanSizeUp = spanSizeDown = spans.size();

				spans.each(function() {
					$(this).animate(
						{height : Math.round($this.height() * Math.random())}, 
						timeout, 
						'linear', 
						function() {
							console.log(spanSizeUp);
							if (0 == (--spanSizeUp)) {
								spans.animate(
									{height : $this.height() / 2}, 
									timeout, 
									'linear', 
									function() {
										if (0 == (--spanSizeDown)) {
											console.log('callback');
											$this.equalizer('run', timeout);
										}
									}
								);
							}
						}
					);
				});
			});
		}
	};

	$.fn.equalizer = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if ( typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Метод ' + method + ' не существует в jQuery.equalizer');
		}
	};
})(jQuery);
