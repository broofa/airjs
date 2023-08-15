```javascript --hide
runmd.onRequire = path => path.replace(/^airjs/, '..');
```

# air.js

---

The [Barometric Function](http://en.wikipedia.org/wiki/Barometric_formula) for determining air pressure &amp; density by altitude, in Javascript.

## Installation - NPM

    npm install airjs

## Installation - Browser-ready

    <script src="http://wzrd.in/standalone/airjs@latest"></script>
    <script>
    airjs.pressure(...); //  etc.
    </script>

## Usage

```javascript --run
import { pressure, density } from 'airjs';

// E.g. Air pressure (Pascals) @ 1km AMSL
pressure(1000); // RESULT

// E.g. Air density (kg/m^3) @ 2km AMSL
density(2000); // RESULT
```
