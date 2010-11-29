
function SomeObject() { 
  this.div = element('div');
  var text = document.createTextNode('SomeObject('+(++this.count)+')');
  this.div.appendChild(element('h3',[],[text]));
  document.body.appendChild(this.div);
}
SomeObject.prototype.count = 0;
