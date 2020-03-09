# Simple Phaser with SpinePlugin Example
Phaser with SpinePlugin in the simplest form without `npm` or tooling

## Overview

This example is a simple, barebones setup with the SpinePlugin that loads SpineBoy. There is no use of `npm` or any other tooling. Scripts are included in `index.html` via `script` tags.

`phaser.min.js` was taken from https://github.com/photonstorm/phaser/tree/master/dist

`SpinePlugin.min.js` was taken from https://github.com/photonstorm/phaser/tree/master/plugins/spine/dist

The entry point is `main.js`.

This example was last checked with Phaser v3.22

[Check out this article for a more detailed set up guide.](https://blog.ourcade.co/posts/2020/how-to-get-phaser-spine-plugin-work-without-npm/)

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

## Alternative Loading Option

If you are running into errors using the example code then try loading the SpinePlugin as a PackFile. Update your `scene` config to add the `pack` key like this:

```js
const config = {
  // ...
  scene: {
    preload: preload,
    create: create,
    pack: {
      files: [
        { type: 'scenePlugin', key: 'SpinePlugin', url: 'SpinePlugin.min.js', sceneKey: 'spine' }
      ]
    }
  }
}

var game = new Phaser.Game(config)
```

And remove `<script src="SpinePlugin.min.js"></script>` from your `index.html`.
