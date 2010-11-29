// modules.js
(function () {

  var modules = {}; // private record of module data

  // modules are functions with additional information
  function module(name,imports,mod) {

    // record module information
    window.console.log('loading module '+name);
    modules[name] = {name:name, imports: imports, mod: mod};

    // collect import dependencies
    var deps = []; 
    for (var i in imports)
      deps.push(modules[imports[i]].linked);

    // execute module code, pass imports, record exports
    modules[name].linked = mod.apply(null,deps);

    // stop copying exports to global namespace
    // var exports = modules[name].linked;
    // for (var exp in exports)
    //   window[exp] = exports[exp];
  }

  // export module wrapper
  window.module = module;

})()

