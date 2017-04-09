//我们这里使用CommonJS的风格
function getText(){
  var element = document.createElement('h2');
  element.innerHTML = "Hello me";
  return element;
}

module.exports = getText;