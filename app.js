require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello("Joao");
var answer = question.asks("Whats is the meaning of life");
console.log(answer);


goodbye();
