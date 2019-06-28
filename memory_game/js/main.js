

var cards = ["queen", "queen", "king", "king"]; 
var cardsInPlay = []; 
var cardOne = cards[0]; 
var cardTwo = cards[2]; 


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo); 



if(cardsInPlay.length === 2) { 
    if(cardsInPlay[0] === cardsInPlay[1]) { 
        alert("you found a match"); 
        console.log("User flipped" + cardsInPlay); 
    } else {  
        console.log("not a match"); 
    }
}