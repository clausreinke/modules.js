module('module2.js',[],function() {

SomeObject.prototype.hello = function(msg) {
  this.div.appendChild(document.createTextNode(msg));
}

// exports, re-export augmented existing global..
return { SomeObject : SomeObject
       };

});
