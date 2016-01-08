/*jslint indent: 2, plusplus: false, browser: true*/
function assert(message, expr) {
  if (!expr) {
    throw new Error(message);
  }
  console.log('message=' + message);
  console.log('expr=' + expr);
  assert.count++;

  return true;
}

assert.count = 0;

function output(text, color) {
  var p = document.createElement("p");
  p.innerHTML = text;
  p.style.color = color;
  document.body.appendChild(p);
}
