// node core modules

// 3rd party modules
import test from 'ava';

// internal modules
import wish from '../lib';

test('has `require` method', t => t.true(typeof wish.require === 'function'));
test('has `resolve` method', t => t.true(typeof wish.resolve === 'function'));
