// entry.js
require("./js/module1"); // 使用CommonJs来加载模块

let People = require('./js/es6-module');
let p = new People("Yika");
p.sayHi();

// css
//require('./css/main.scss');

