module('module2.js',['module1.js']
                   ,function(module1) {

module1.SomeObject.prototype.hello = function(msg) {
  this.div.appendChild(document.createTextNode(msg));
}

// exports, re-export augmented import
return { SomeObject : module1.SomeObject
       };

});
