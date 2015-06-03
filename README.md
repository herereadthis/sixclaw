SixClaw
=======

[![Dependency Status](https://david-dm.org/herereadthis/sixclaw.svg)](https://david-dm.org/herereadthis/sixclaw)
[![npm version](https://badge.fury.io/js/static-loader.svg)](https://www.npmjs.com/package/static-loader)

A static loader for Webpack.

This is mostly useful for loading files into your production build dist folder. Examples include:

* robots.txt
* .htaccess
* sitemap.xml
* background images
* favicon.ico

This static loader is more relevant versus ```file-loader``` or ```url-loader``` in cases where you just need a static file, and you don't want it to be bundled because it's unlikely to change often and so the user's browser cache should have it stored instead of needing a fresh copy after every deployment.

How-to:

```javascript
require("static?!path/realFilename.ext?output=path/newFilename.ext");
// example
require("static?!./favicon.ico?output=favicon.ico");
```

You need to add ```output``` as your resource query name, the value for ```output``` is what webpack will copy to production

```javascript
// sample webpack.production.config.js file snippit,
{
    test: /\.(ico)$/,
    loader: "static-loader"
}
```
