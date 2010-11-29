module('main.js',['debug.js','module2.js']
                ,function(debug,module2) {

function main() {
  var obj = new module2.SomeObject();
  obj.hello('hi');
  debug.message('obj says "hi"');
}

// exports
return { main : main
       };

});
