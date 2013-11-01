/**
 * Compute air pressure (pascals) or density (kg/m^3) at a given altitude using
 * the barometric formula, http://en.wikipedia.org/wiki/Barometric_formula
 */
var PRESSURE = 0;
var DENSITY = 1;

var G = 9.80665; // Gravitational constant (m/s/s)
var R = 8.31432; // Universal gas constant (N*m/(mol*K))
var M = 0.0289644; // Molar mass of earth's air (kg/mol)

var GMR = G * M / R; // pre-multiply this stuff together

/**
  * The calculations for density and pressure air very similar so we capture
  * the logic for both here.
  */
function _calc(wat, h) {
  var hb, // Standard height
      lb, // Standard lapse rate
      rb, // Standard density
      pb, // Standard pressure
      tb, // Standard temperature
      c,  // interim value (standard density or pressure);
      m,  // interim value (mantissa of result)
      e;  // interim value (exponent of result)

  // Set constants based on what 'layer' (b) of the atmosphere we're in
  if (h < 11000) { // b = 0
    hb = 0; lb = -0.0065; pb = 101325.00; rb = 1.2250; tb = 288.15;
  } else if (h < 20000) { // b = 1
    hb = 11000; lb = 0.0; pb = 22632.10; rb = 0.36391; tb = 216.65;
  } else if (h < 32000) { // b = 2
    hb = 20000; lb = 0.001; pb = 5474.89; rb = 0.08803; tb = 216.65;
  } else if (h < 47000) { // b = 3
    hb = 32000; lb = 0.0028; pb = 868.02; rb = 0.01322; tb = 228.65;
  } else if (h < 51000) { // b = 4
    hb = 47000; lb = 0.0; pb = 110.91; rb = 0.00143; tb = 270.65;
  } else if (h < 71000) { // b = 5
    hb = 51000; lb = -0.0028; pb = 66.94; rb = 0.00086; tb = 270.65;
  } else { // b = 6
    hb = 71000; lb = -0.002; pb = 3.96; rb = 0.000064; tb = 214.65;
  }

  c = wat == PRESSURE ? pb : rb;
  if (lb === 0) {
    m = Math.E;
    e = -GMR * (h - hb) / tb;
  } else if (wat == PRESSURE) {
    m = tb / (tb + lb * (h - hb));
    e = GMR / lb;
  } else if (wat == DENSITY) {
    m = (tb + lb * (h - hb)) / tb;
    e = -GMR / lb - 1;
  }

  return c * Math.pow(m, e);
}

// Public API
module.exports = {
  /**
    * Get air pressure (pascals) at the given height (h) in meters.
    */
  pressure: function(h) {
    return _calc(PRESSURE, h);
  },

  /**
    * Get air density (kg/m^3) at the given height (h) in meters.
    */
  density: function(h) {
    return _calc(DENSITY, h);
  }
};
