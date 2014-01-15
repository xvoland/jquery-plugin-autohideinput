/**
 * If you create a derivative, please leave this text intact:
 *
 * jquery.autohideinput.js
 *
 * Copyright (c) 2013, Vitalii Tereshchuk http://dotoca.net/
 *
 * @modified  2013/01/15
 * @requires  jQuery 1.7.x or later
 * @version   2.0.2
 * @author    Vitalii Tereshchuk
 * @link      http://dotoca.net/jquery-autohideinput/
 * @license
 *
 * Thanks to Vitalii Tereshchuk (http://dotoca.net/)
 */
;(function($) {

    var defaults = "text";

    autoHideInput = function(params) {
        // context
        var $this = $(this);

        // blur
        $this.on("blur", function() {
            $this.attr("type", "password");
        });

        // focusin
        $this.on("focusin", function() {
            $this.attr("type", "text");
        });
    };

    var methods = {
        init: function(params) {
            // default for each element
            return this.each(autoHideInput);
        },
        hide: function(isHide) {
            // context
            var $this = $(this);

            // change attribute
            $this.data("hide", isHide);

            if (isHide) {
                $this.attr("type", "password");
                $this.hideinput();
            } else {
                $this.attr("type", "text");
                $this.off("focusin blur");
            }
        },
        destroy: function() {
            $(this).off('blur focusin');
        }

    };

    $.fn.hideinput = function(method) {
        if (methods[method]) {
            // run sub-function
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            // run init() function
            return methods.init.apply(this, arguments);
        } else {
            // method not found
            $.error("Method '" + method + "' not found in jQuery.AutoHideInput");
        }
    };


    $(document).ready(function() {
        $('input[data-hide="true"]').hideinput();
    });

})(window.jQuery || window.Zepto || window.$);