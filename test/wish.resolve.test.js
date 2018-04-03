// node core modules

// 3rd party modules
import test from 'ava';

// internal modules
import { resolve } from '../lib';

test('resolves relative module-id from caller module', (t) => {
  const actual = resolve('./fixtures/module-01');
  const expected = require.resolve('./fixtures/module-01');
  t.is(actual, expected);
});

test('resolves relative module-id from baseDir option', (t) => {
  const options = {
    baseDir: require.resolve('../lib/utils'),
  };
  const actual = resolve('../test/fixtures/module-01', options);
  const expected = require.resolve('./fixtures/module-01');
  t.is(actual, expected);
});

test('resolves absolute module-id', (t) => {
  const actual = resolve('ava');
  const expected = require.resolve('ava');
  t.is(actual, expected);
});

test('throws `MODULE_NOT_FOUND` error when silent and shutup options are false', (t) => {
  const options = { silent: false, shutup: false };
  t.throws(() => resolve('does-not-exist', options));
});

test('hides `MODULE_NOT_FOUND` error when silent option is true', (t) => {
  const options = { silent: true };
  const actual = resolve('does-not-exist', options);
  const expected = undefined;
  t.is(actual, expected);
});
