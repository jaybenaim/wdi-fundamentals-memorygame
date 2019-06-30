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
var score = 0; 
 

function storeScore() {
    localStorage.setItem('score', Number(score) );
    let currentScore = localStorage.getItem('score');
    // display score  
    $('#score').html(''); 
    $('#score').append(currentScore); 
}
const checkForMatch = () => { 
    //&& cardsInPlay.length === 2 || cardsInPlay.length === 4
    if(cardsInPlay[0] === cardsInPlay[1]) { 
        // delay the alert 
        setTimeout(function(){
             alert("You found a match!"); 
            }, 200);
        // add 1 to the score when a match is made 
        Number(score++);
       storeScore(); 
       cardsInPlay = []; 
    } else if (cardsInPlay[0] !== cardsInPlay[1] ) {  
        setTimeout(function(){
            alert("Not a match!");
         }, 200);
         storeScore(); 
         Number(score) = 0;   
         cardsInPlay = [];
    } else if (cardsInPlay.length === 2 || cardsInPlay.length === 4) { 
        score.replace(score, currentScore); 

    } else { 
        setTimeout(function(){
            alert("Not a match!");
         }, 200);
         storeScore(); 
         $('#score').hide(); 

    }
 }; 

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	if(cardsInPlay.length === 2 ) {
        checkForMatch();
    } 
}

const createBoard = () => { 
    for(let i = 0; i < cards.length; i++) { 
        var cardElement = document.createElement("img"); 
        cardElement.setAttribute('src', "images/back.png"); 
        cardElement.setAttribute('data-id', i); 
        document.getElementById('game-board').appendChild(cardElement); 
        cardElement.addEventListener('click', flipCard);
    }
}

// refresh the page on reset button click 
function Refresh() {
     window.parent.location = window.parent.location.href;
}

createBoard(); 