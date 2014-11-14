(function ($) {
    var methods = {
        init: function () {
            var baseId = "_" + $(this).attr("id");
            var $div = $("<div>").insertAfter(this);
            var maxWidth = 100;
            var divCounter = 1;
            var divstyle = "width:" + maxWidth;

            $(this).children("option").each(function (index) {
                if (divCounter == 1) {
                    divstyle = "width:" + maxWidth + ";float:left";
                }				
                else divstyle = "";
				
                var $option = $(this);
                var id = baseId + index;
                var $checkbox = $("<input type='checkbox' id='" + id + "'/>").appendTo($div).change(function () {

                    if ($(this).is(":checked")) {
                        $option.attr("selected", "selected");
                    } else {
                        $option.removeAttr("selected");
                    }
                });
                if ($option.is(":selected")) {
                    $checkbox.attr("checked", "checked");
                }

                $checkbox.wrap("<div style='" + divstyle + "' >");
                $checkbox.after("<label for='" + id + "' >" + $option.text() + "</label></div>");

                divCounter++;
                if (divCounter == 3) divCounter = 1;
            });

            $(this).hide();

        }
    };

    $.fn.multiSelectToCheckboxes = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.multiSelectToCheckboxes');
        }
    };
})(jQuery);

