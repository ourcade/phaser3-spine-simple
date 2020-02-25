# phaser3-spine-simple
Phaser with SpinePlugin in the simplest form without `npm` or tooling

## Overview

This example is a simple, barebones setup with the SpinePlugin that loads SpineBoy. There is no use of `npm` or any other tooling. Scripts are included in `index.html` via `script` tags.

`SpinePlugin.min.js` was taken from https://github.com/photonstorm/phaser/tree/master/plugins/spine/dist

## Running the Example

You will need to run a local web server to run this example. If you have `python` installed:

```
python -m SimpleHTTPServer 8080
```

Or if you have `node` and the `http-server` package:

```
http-server
```

Both commands need to be run on the directory containing the example code. If you clone or download this example then it will be something like:

```
cd phaser3-spine-simple
http-server
```

For more information on local server options, including from VSCode or Brackets, [check out this article](https://blog.ourcade.co/posts/2020/5-local-web-server-get-started-phaser-3/).
