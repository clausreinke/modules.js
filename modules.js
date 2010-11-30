// modules.js
(function () {

  var modules = {}, // private record of module data
      order   = []; // private record of module load order

  // modules are functions with additional information
  function module(name,imports,mod) {

    // record module information
    window.console.log('found module '+name);
    modules[name] = {name:name, imports: imports, mod: mod};

    // allow for inline modules, which do not come via loadModule
    if (!(name in order)) order.push(name);

    // check whether this was the last module to be loaded
    // in a given dependency group
    loadedModule(name);
  }

  // trigger module loading by adding script element
  function loadModule(mod) {

    if (modules[mod])
      return;             // don't load the same module twice
    else
      modules[mod] = {};  // mark module as currently loading

    // add a script element to document head, with module as src
    var element = document.createElement('script');
    element.setAttribute('type','text/javascript');
    element.setAttribute('src',mod);
    document.getElementsByTagName('head')[0].appendChild(element);

    // keep record of loading order
    order.push(mod);
  }

  // check whether this was the last module to be loaded
  // in a given dependency group;
  // if yes, start linking and running modules
  function loadedModule(mod) {
    window.console.log('finished loading: '+mod);

    // collect modules marked as currently loading
    var pending=[];
    for (var m in modules)
      if (!modules[m].name) pending.push(m);

    // if no more modules need to be loaded, we can start 
    // linking the modules together
    if (pending.length===0) {
      window.console.log('all done loading');
      linkModules();
    } else {
      window.console.log('loads pending: '+pending.join(', '));
    }
  }

  // link and run loaded modules, keep record of results
  function linkModules() {
    window.console.log('linking modules');

    // link modules in loading order
    for (var nextName in order) {
      var name    = order[nextName];
      var module  = modules[name];
      var imports = module.imports;

      if (module.linked) {
        window.console.log('already linked '+name);
        continue;
      } 
      window.console.log('linking module '+name);

      // collect import dependencies
      var deps = []; 
      for (var i in imports)
        deps.push(modules[imports[i]].linked);

      // execute module code, pass imports, record exports
      modules[name].linked = module.mod.apply(null,deps);
    }
  }

  // export module wrapper
  window.module = module;

  // trigger module loading for our project
  // NOTE: we assume that all these loadModule calls are executed
  //       before any of the script elements they create; otherwise,
  //       we have a possible race condition (linkModules could be 
  //       called early, because not all dependencies are marked as
  //       currently loading yet)
  loadModule("utils.js");
  loadModule("debug.js");
  loadModule("module1.js");
  loadModule("module2.js");
  loadModule("main.js");

  // just calling linkModules here would not work, as we have only 
  // added the script elements, the scripts could still be loading;

  // calling linkModules in document onload would not work
  // in browsers which do not stop parsing while script-inserted
  // external scripts are loading;

  // therefore, we call linkModules when all modules in a dependency
  // group have been loaded, as checked by loadedModule;

})()

