# Auto Hide Input (jQuery Plugin)

**AutoHideInput** is a simple jQuery plugin that hides and shows the information entered by the user.

When a HTML-designer sets the password field as `type="password"`, thus not letting the user see what’s written inside the form field. This plugin helps the user to see what he input into this field. Once a field loses focus, all the typed symbols will be hidden.


## Online Demo

See demo [here](http://xvoland.github.io/jquery-plugin-autohideinput)


## Features

- Show or hide important information when you enter it
- Additional security for secure fields when you enter
- Simple installation
- Easy of use and setup
- Taking care of your customers
- Fast and lightweight (<1Kb)


## Benefits
Additional ways to ensure greater protection of your users.
Once you start using this plugin, your users will feel cared about them.


## How To Use

To use it, simply. Select the form `<input>` element or elements. It works with any `<input>` field on the page, it can replace a single element, each element with a specific class/id/name, or property, or every `<input>` element.

You can control the plugin using javascript or directly in the HTML-code using the tag `data-hide`


## Installation

### Flow #1 (controlled via JS)

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

```js
	// to enable the plugin
	$('#id').hideinput('hide', true);
	
	// to disable the plugin
	$('#id').hideinput('hide', false);	
```

3.Enjoy



### Flow #2 (controlled by using the HTML tag **data-hide**)

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


# Contributing

If you'd like to contribute to this project, create a branch and send a pull request for that branch. Lint and test your code.


# License

Copyright © 2013 Vitalii Tereshchuk. Licensed under the MIT and GPL licenses.

#### About me and welcome
I'm an independent developer and researcher in web development. Many of you I'll be happy to see on [my website](http://dotoca.net)
