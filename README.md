<!--
  -- This file is auto-generated from README_js.md. Changes should be made there.
  -->

# air.js
----

The [Barometric Function](http://en.wikipedia.org/wiki/Barometric_formula) for determining air pressure &amp; density by altitude, in Javascript.

## Installation - NPM

    npm install airjs

## Installation - Browser-ready

    <script src="http://wzrd.in/standalone/airjs@latest"></script>
    <script>
    airjs.pressure(...); //  etc.
    </script>

## Usage

```javascript

// E.g. Air pressure (Pascals) @ 1km AMSL
airjs.pressure(1000); // ⇨ 89874.57050221058

// E.g. Air density (kg/m^3) @ 2km AMSL
airjs.density(2000);  // ⇨ 1.0064902544633867
```

----
Markdown generated from [README_js.md](README_js.md) by [![RunMD Logo](http://i.imgur.com/h0FVyzU.png)](https://github.com/broofa/runmd)