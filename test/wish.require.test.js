// node core modules

// 3rd party modules
import test from 'ava';

// internal modules
import wish from '../lib';

test('throws `MODULE_NOT_FOUND` error when ignoreNotFoundError and ignoreAllErrors options are false', (t) => {
  const options = { ignoreNotFoundError: false, ignoreAllErrors: false };
  const error = t.throws(() => wish.require('does-not-exist', options), Error);
  t.is(error.code, 'MODULE_NOT_FOUND');
});

test('re-throws error from module-id when ignoreNotFoundError and ignoreAllErrors options are false', (t) => {
  const options = { ignoreNotFoundError: false, ignoreAllErrors: false };
  t.throws(() => wish.require('./fixtures/module-02', options));
});

test('hides all errors when ignoreAllErrors option is true', (t) => {
  const options = { ignoreAllErrors: true };
  t.notThrows(() => wish.require('./fixtures/module-02', options));
});
