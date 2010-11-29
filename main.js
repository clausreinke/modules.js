module('main.js',[],function() {

function main() {
  var obj = new SomeObject();
  obj.hello('hi');
  message('obj says "hi"');
}

// export
window.main = main;

});
