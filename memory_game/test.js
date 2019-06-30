var gradebook = {
    scores: [51, 80, 84, 93, 99],
    getAverage: function() {
      this.scores.reduce(function(memo, element){
        return memo + element/this.scores.length;
      });
    }
  };
console.log(gradebook.getAverage());
var sayHello = function () {
    console.log('Hey!');
  };
  sayHello();
  
  	var sayHello = function () {
    console.log('Hey!');
  };
  sayHello;