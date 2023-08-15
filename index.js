// Constants for different layers of atmosphere, provided in wikipedia article tables.
const LAYER_CONSTS = [
  [0, 101_325.0, 1.225, 288.15, 0.0065, 5.2558],
  [11_000, 22_632.1, 0.36391, 216.65, 0.0, 0],
  [20_000, 5_474.89, 0.08803, 216.65, -0.001, -34.1626],
  [32_000, 868.02, 0.01322, 228.65, -0.0028, -12.2009],
  [47_000, 110.91, 0.00143, 270.65, 0.0, 0],
  [51_000, 66.94, 0.00086, 270.65, 0.0028, 12.2009],
  [71_000, 3.96, 0.000064, 214.65, 0.002, 17.0813],
];

// Premultiply gas constant * gravitational constant / * molar mass
const GMR = (9.80665 * 0.0289644) / 8.3144598;

/**
 * Compute air pressure (pascals) or density (kg/m^3) at a given altitude using
 * the barometric formula.  Ref: http://en.wikipedia.org/wiki/Barometric_formula
 */
export default function air(h) {
  let b;
  if (h < 11_000) {
    b = 0;
  } else if (h < 20_000) {
    b = 1;
  } else if (h < 32_000) {
    b = 2;
  } else if (h < 47_000) {
    b = 3;
  } else if (h < 51_000) {
    b = 4;
  } else if (h < 71_000) {
    b = 5;
  } else {
    b = 6;
  }

  const [hb, pb, rb, tb, lb, gmrl] = LAYER_CONSTS[b];

  let pressure;
  let density;

  if (lb !== 0) {
    // Use standard troposphere model (temp varies by height)
    pressure = pb * Math.pow((tb - (h - hb) * lb) / tb, gmrl);
    density = rb * Math.pow((tb - (h - hb) * lb) / tb, gmrl - 1);
  } else {
    // Use standard stratosphere model (temp does not vary by height)
    pressure = pb * Math.exp((-GMR * (h - hb)) / tb);
    density = rb * Math.exp((-GMR * (h - hb)) / tb);
  }

  return { pressure, density };
}
