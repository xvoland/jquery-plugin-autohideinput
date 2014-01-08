/**
 * If you create a derivative, please leave this text intact:
 *
 * jquery.autohideinput.js
 *
 * Copyright (c) 2013, Vitalii Tereshchuk http://dotoca.net/
 *
 * @modified  2013/09/27
 * @requires  jQuery 1.9.x or later
 * @version   2.0.0
 * @author    Vitalii Tereshchuk
 * @link      http://dotoca.net/jquery.hideinput
 * @license
 *
 * Thanks to Vitalii Tereshchuk (http://dotoca.net/)
 */


(function (factory, global) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    // To use Zepto, map Zepto to the the name 'jquery' in your paths config
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(global.jQuery || global.Zepto);
  }
}(function($) {

    autohideinput = function() {
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
            return this.each(autohideinput);
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

}, this));