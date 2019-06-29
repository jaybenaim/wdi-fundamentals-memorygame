

var cards = [
    { 
        rank : "queen", 
        suit: "hearts", 
        cardImage: "images/queen-of-hearts.png"

},
    { 
        rank : "queen", 
        suit: "diamonds", 
        cardImage: "images/queen-of-diamonds.png"

}, 
    { 
        rank : "king", 
        suit: "hearts", 
        cardImage: "images/king-of-hearts.png"
}, 
    { 
        rank : "king", 
        suit: "diamonds", 
        cardImage: "images/king-of-diamonds.png"
}
]; 
var cardsInPlay = []; 

const checkForMatch = () => { 
    if(cardsInPlay[0] === cardsInPlay[1]) { 
        return "You found a match!"; 
    } else {  
       return "Not a match!"; 
    }
 }; 
 
// get the cards by the index number 
const flipCard = (cardId) => { 
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    var match = checkForMatch();
    
    if (cardsInPlay.length === 2) { 
        return  "User flipped " + cards[cardId].rank + " " + match;
    }  else { 
        return "User flipped " + cards[cardId].rank;
    }
    
     
};

console.log(flipCard(0)); 
console.log(flipCard(1)) ; 

// when a user flips a card add that card to array of cards in play 
// if the user flipped two cards check for a match 
