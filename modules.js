// modules.js
(function () {

  var modules = {}; // private record of module data

  // modules are functions with additional information
  function module(name,imports,mod) {

    // record module information
    window.console.log('loading module '+name);
    modules[name] = {name:name, imports: imports, mod: mod};

    // execute module code, record exports
    var exports = mod();

    // copy exports to global namespace
    for (var exp in exports)
      window[exp] = exports[exp];
  }

  // export module wrapper
  window.module = module;

})()

