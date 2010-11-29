module('module2.js',[],function() {

SomeObject.prototype.hello = function(msg) {
  this.div.appendChild(document.createTextNode(msg));
}

// no exports, we augment existing global..

});
