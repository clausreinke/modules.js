module('main.js',[],function() {

function main() {
  var obj = new SomeObject();
  obj.hello('hi');
  message('obj says "hi"');
}

// exports
return { main : main
       };

});
