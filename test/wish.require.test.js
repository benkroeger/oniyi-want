// node core modules

// 3rd party modules
import test from 'ava';

// internal modules
import wish from '../lib';

test('throws `MODULE_NOT_FOUND` error when silent and shutup options are false', (t) => {
  const options = { silent: false, shutup: false };
  t.throws(() => wish.require('does-not-exist', options));
});

test('re-throws error from module-id when silent and shutup options are false', (t) => {
  const options = { silent: false, shutup: false };
  t.throws(() => wish.require('./fixtures/module-02', options));
});

test('hides all errors when shutup option is true', (t) => {
  const options = { shutup: true };
  t.notThrows(() => wish.require('./fixtures/module-02', options));
});
