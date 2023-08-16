<!--
  -- This file is auto-generated from README_js.md. Changes should be made there.
  -->

# air.js

---

The [Barometric Function](http://en.wikipedia.org/wiki/Barometric_formula) for determining air pressure &amp; density by altitude, in Javascript.

## Installation - NPM

    npm install airjs

## Usage

```javascript
import air from 'airjs';

// E.g. Air pressure (Pascals) @ 1km AMSL
air(1000).pressure; // ⇨ 89874.57050221058

// E.g. Air density (kg/m^3) @ 2km AMSL
air(2000).density; // ⇨ 1.0064902544633867
```
