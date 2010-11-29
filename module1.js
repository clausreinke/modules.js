module('module1.js',['utils.js']
                   ,function(utils) {

function SomeObject() { 
  this.div = utils.element('div');
  var text = document.createTextNode('SomeObject('+(++this.count)+')');
  this.div.appendChild(utils.element('h3',[],[text]));
  document.body.appendChild(this.div);
}
SomeObject.prototype.count = 0;

// export
return { SomeObject : SomeObject
       };

});
