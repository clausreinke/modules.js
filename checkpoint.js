/**
 * minimalistic check for unwanted extensions/global variables,
 * (won't work in IE unless globals were explicitly added as 
 *  windows.global =..
 *  will list element ids in opera)
 * example usage:
 *
 * var before = checkpoint();
 * ..do stuff..
 * window.console.log(checkpoint(before));
 * 
 * @param before : (optional) previous checkpoint, if present
 */
function checkpoint(before) {
  var elems = {};
  if (before) {
    for (var x in window) if (!(x in before)) elems[x]=1;
  } else {
    for (var x in window) elems[x]=1;
  }
  return elems;
}

function keys(obj) {
  var keys = []; for (var x in obj) keys.push(x);
  return keys;
}

