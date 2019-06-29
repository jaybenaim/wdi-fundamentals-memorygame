

var cards = ["queen", "queen", "king", "king"]; 
var cardsInPlay = []; 

const checkForMatch = () => { 
    if(cardsInPlay[0] === cardsInPlay[1]) { 
        return "You found a match!"; 
    } else {  
       return "Not a match!"; 
    }
 }
const flipCard = (cardId) => { 
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) { 
        var match = checkForMatch();
    }  else { 
        return "User flipped " + cards[cardId]; 
    }
    // get the cards by the index number 
    return  "User flipped " + cards[cardId] + " " + match ;
     
}
console.log(flipCard(3)); 
console.log(flipCard(1)) ; 
// when a user flips a card add that card to array of cards in play 
// if the user flipped two cards check for a match 
