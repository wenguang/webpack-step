require("./style.css");

//引用sub模块
var sub = require('./sub');

var app=document.getElementById('app');
app.innerHTML="hello world";
app.appendChild(sub());