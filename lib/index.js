'use strict';

// node core modules

// 3rd party modules
const caller = require('caller');

// internal modules
const { getDirectoryPath, resolveFileName, handleError } = require('./utils');

const maybeResolve = (id, options = {}) => {
  const { callerDepth = 1 } = options;
  const baseDir = getDirectoryPath(options.baseDir || caller(callerDepth));
  try {
    return resolveFileName(id, baseDir);
  } catch (error) {
    return handleError(error, options);
  }
};

const maybeRequire = (id, options = {}) => {
  // resolve `baseDir` here because invoking `caller()` in `maybeResolve` would
  // require the `depth` arg to be increased by 1
  const { baseDir = caller() } = options;
  const resolved = maybeResolve(id, Object.assign({}, options, { baseDir, callerDepth: 2 }));

  // [bk] @TODO: do we need to handle shutup and silent separately
  if (resolved === undefined) {
    return resolved;
  }

  try {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    return require(resolved);
  } catch (error) {
    return handleError(error, options);
  }
};

module.exports = { require: maybeRequire, resolve: maybeResolve };
