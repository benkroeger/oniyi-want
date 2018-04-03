# oniyi-want
> helpers to resolve / require modules in node.js

Some of my projects are working with mechanics to resolve or require modules if they are available – and if not simply ignore it. There are a few great modules out there to support this scenario in general already (e.g. [try-require](https://www.npmjs.com/package/try-require), [resolve-from](https://www.npmjs.com/package/resolve-from#resolvefromsilentfromdir-moduleid)), however, I'd like to distinguish between `module not found` and `something is wrong with the module` errors. In the case of `module not found` it is okay to silently return a falsy value like `undefined` but when there is e.g. a syntax error that stops the module from being `eval`'d, I'd like to know – any maybe even my process to exit like node.js normally does.

# common options
- silent (swallow `MODULE_NOT_FOUND` error but re-throw all others)
- shutup (swallow all errors)
- baseDir (the (absolute) path that node should start traversing it's `node_modules` path from)

# resolve(id, options)

# require(id, options)
