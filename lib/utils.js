'use strict';

// node core modules
const path = require('path');
const Module = require('module');

// 3rd party modules

// internal modules

const getDirectoryPath = baseDir => (path.extname(baseDir) ? path.parse(baseDir).dir : baseDir);

const resolveFileName = (moduleId, baseDir, paths) => {
  const baseFile = path.resolve(baseDir, 'noop.js');

  // eslint-disable-next-line no-underscore-dangle
  const modulePaths = Array.isArray(paths) ? paths : Module._nodeModulePaths(baseDir);

  // eslint-disable-next-line no-underscore-dangle
  return Module._resolveFilename(moduleId, {
    id: baseFile,
    filename: baseFile,
    paths: modulePaths,
  });
};

// eslint-disable-next-line handle-callback-err
const handleError = (error, options) => {
  const { ignoreNotFoundError, ignoreAllErrors } = options;

  if (ignoreAllErrors) {
    return undefined;
  }

  if (ignoreNotFoundError) {
    if (error.code !== 'MODULE_NOT_FOUND') {
      throw error;
    }

    return undefined;
  }

  throw error;
};

module.exports = { getDirectoryPath, resolveFileName, handleError };
