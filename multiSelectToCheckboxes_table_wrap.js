/*

      $(function () {
            $('#selectbox_id_1').multiSelectToCheckboxes();
            $('#selectbox_id_2').multiSelectToCheckboxes();
            $('#selectbox_id_3').multiSelectToCheckboxes();
            $('#selectbox_id_4').multiSelectToCheckboxes();

        });

*/

(function ($) {
    var methods = {
        init: function () {
            var baseId = "_" + $(this).attr("id");
            var $table = $("<table>").insertAfter(this);
            var divCounter = 1;
            var $td1 = $("<td id='td1' style='width:40%;'>");
            var $td2 = $("<td id='td2' style='width:40%;'>");
            var $td3 = $("<td id='td3' style='width:1%;'>");

            $table.after($td1);
            $table.after($td3);
            $table.after($td2);


            $(this).children("option").each(function (index) {

 
                var $option = $(this);
                var id = baseId + index;
                var $checkbox = $("<input type='checkbox' id='" + id + "'/>").change(function () {

                    if ($(this).is(":checked")) {
                        $option.attr("selected", "selected");
                    } else {
                        $option.removeAttr("selected");
                    }
                });
                if ($option.is(":selected")) {
                    $checkbox.attr("checked", "checked");
                }

                $checkbox.after("<label for='" + id + "' >" + $option.text() + "</label><br>");


                if (divCounter == 1) {
                    $checkbox.appendTo($td1);
                }
                else $checkbox.appendTo($td2);

                divCounter++;
                if (divCounter == 3) divCounter = 1;
            });

            $("</table>").appendTo($td2);
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

