module('utils.js',[],function() {

function element(tag,attributes,children) {
   var e = document.createElement(tag);
   for (var a in attributes) e.setAttribute(a,attributes[a]);
   for (var c in children) e.appendChild(children[c]);
   return e;
}

// exports
window.element = element;

});
