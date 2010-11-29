// modules.js
(function () {

  var modules = {}; // private record of module data

  // modules are functions with additional information
  function module(name,imports,mod) {

    // record module information
    window.console.log('loading module '+name);
    modules[name] = {name:name, imports: imports, mod: mod};

    // just execute module code right away, no imports/exports yet
    mod();
  }

  // export module wrapper
  window.module = module;

})()

