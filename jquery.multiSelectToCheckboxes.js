/*

multiSelectToCheckboxes

*/

(function($) {
	var methods = {
		init: function() {
			var $div = $("<div/>").insertAfter(this);
			var $ul = $("<ul/>").appendTo($div);
			$ul.css({'list-style-type': 'none', 'padding': '0'})
			var baseId = "_" + $(this).attr("id");
			var maxWidth = 0;
			$(this).children("option").each(function(index) {
				var $option = $(this);
				var id = baseId + index;
				var $li = $("<li/>").appendTo($ul);
				var $checkbox = $("<input type='checkbox' id='" + id + "'/>").appendTo($li).change(function() {
					if ($(this).is(":checked")) {
						$option.attr("selected", "selected");
					} else {
						$option.removeAttr("selected");
					}
				});
				if ($option.is(":selected")) {
					$checkbox.attr("checked", "checked");
				}
				$checkbox.after("<label for='" + id + "'>" + $option.text() + "</label>");
				maxWidth = (parseInt($li.css('width') > maxWidth)) ? $li.css('width') : maxWidth;
			});
			
			var divWidth = maxWidth + 100;
			
			$div.css({'width':divWidth + 'px', 'height': '100px', 'overflow-y': 'scroll', 'overflow-x': 'hidden', 'border': '1px solid #979797'});
			
			$(this).hide();
		}
	};
 
	$.fn.multiSelectToCheckboxes = function(method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.multiSelectToCheckboxes');
		}
	};
})(jQuery);