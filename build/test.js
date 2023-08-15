import test from 'node:test';
import air from '../index.js';
import assert from 'node:assert';

test('samples', () => {
  assert.deepEqual(air(0), {
    density: 1.225,
    pressure: 101325,
  });
  assert.deepEqual(air(5000), {
    density: 0.7361225674284504,
    pressure: 54020.40415271078,
  });
  assert.deepEqual(air(15000), {
    density: 0.19367152167419316,
    pressure: 12044.717775500829,
  });
  assert.deepEqual(air(25000), {
    density: 0.0394641735475323,
    pressure: 2511.0580375933637,
  });
  assert.deepEqual(air(35000), {
    density: 0.008210881819105866,
    pressure: 558.9292424358972,
  });
  assert.deepEqual(air(48000), {
    density: 0.0012604264225743334,
    pressure: 97.75796820120232,
  });
  assert.deepEqual(air(60000), {
    density: 0.0002877904026709151,
    pressure: 20.31508148438284,
  });
});
