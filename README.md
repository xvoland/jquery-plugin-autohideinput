# Auto Show/Hide Input (jQuery/Zepto Plugin)

**AutoHideInput** is a simple [jQuery](http://jquery.com) and [Zepto](http://zeptojs.com) plugin for hiding and showing secure fields.

When a HTML-designer sets the password field as `type="password"`, thus not letting the user see what’s written inside the form field. This plugin helps the user to see what he input into this field. Once a field loses focus, all the typed symbols will be hidden.

## Online Demo

[See a demo here](http://xvoland.github.io/jquery-plugin-autohideinput)

![Screenshot](https://rawgithub.com/xvoland/jquery-plugin-autohideinput/master/demo/autohideinput.gif)

## Features
- show/hide important information when you enter
- additional security for secure fields when you enter
- full support touch devices
- simple installation
- easy of use and setup
- taking care of your customers
- fast and lightweight (<1Kb)


## Dependencies
**jquery.autohideinput.js** requires either [jQuery](http://jquery.com/) or [Zepto](http://zeptojs.com/)


## Benefits
Additional ways to ensure greater protection of your users (hidding secure fields). Once you start using **jquery.autohideinput.js**, your users will feel cared about them.


## AMD support
The plugin supports [AMD](http://requirejs.org/docs/whyamd.html).

If you plan on using **jquery.autohideinput.js** as an asynchronous module with Zepto, you'll want to map Zepto to the name jquery in your path config:

```javascript
require.config({
  paths: {
    jquery: 'path/to/zepto'
  }
});
```


## How To Use

To use it, simply. Select the form `<input>` element or elements. It works with any `<input>` field on the page, it can replace a single element, each element with a specific class/id/name, or property, or every `<input>` element.

You can control the plugin using javascript or directly in the HTML-code using the tag `data-hide`


## Installation

### Flow #1 Installing with Bower
If [Bower](http://bower.io/)'s your thing, you can install this plugin by running `bower install AutoHideInput` in your project directory.


### Flow #2 (controlled via JS)

1.Add to your page load jQuery and plugin:

```html
	<head>
	… 
	<script src='//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js'></script>
	<script type="text/javascript" src="jquery.autohideinput.min.js"></script>
	…
	</head>
```

2.Use the plugin:

```javascript
	// to enable the plugin
	$('#id').hideinput('hide', true);
	
	// to disable the plugin
	$('#id').hideinput('hide', false);	
```

3.Enjoy


### Flow #3 (controlled by using the HTML tag **data-hide**)

1.Add to your page load jQuery and plugin:

```html
	<head>
	… 
	<script src='//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js'></script>
	<script type="text/javascript" src="jquery.autohideinput.min.js"></script>
	…
	</head>
```

2.In your HTML-code:

```html
<input type="text" name="loginname" id="loginname" placeholder="login" data-hide="true">
```

* `data-hide="true"` - can take two values `true` or `false`, respectively on/off plugin for the current field


# Known issues
### Competing control in IE10 (Windows 8)

Internet Explorer 10 includes its own control for toggling password visibility that can compete with this plugin when enabled.

You can disable this control for any element by specifying a style for the `::ms-reveal` pseudo-class:

```css
::-ms-reveal { display: none !important; }
```

More info [on MSDN](http://msdn.microsoft.com/en-us/library/windows/apps/hh465773.aspx).


# Contributing
If you'd like to contribute to this project, create a branch and send a pull request for that branch. Lint and test your code.


#Funding
I’ll continue to work and improve the script features regardless of the outcome of funding, because it's rewarding to see that people are using it and it does the job for them. Still I would appreciate your support in covering some of the expenses with the domain hosting and programming hours which are taken from my family time.

[Ping me](adv@dotoca.net) if you want to finance the project.


# License
Copyright © 2013 Vitalii Tereshchuk. Licensed under the MIT and GPL licenses.


#### About me and welcome
I'm an independent developer and researcher in web development. Many of you I'll be happy to see on [my website](http://dotoca.net)
