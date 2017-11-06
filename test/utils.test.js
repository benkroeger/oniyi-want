// node core modules

// 3rd party modules
import test from 'ava';

// internal modules
import utils from '../lib/utils';

test('getDirectoryPath resolves from filepath', t => t.is(utils.getDirectoryPath(__filename), __dirname));
test('getDirectoryPath resolves from directorypath', t => t.is(utils.getDirectoryPath(__dirname), __dirname));
