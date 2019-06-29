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


const checkForMatch = () => { 
    if(cardsInPlay[0] === cardsInPlay[1]) { 
        // make the alert appear after the second card is clicked
        setTimeout(function(){
             alert("You found a match!"); 
            }, 200);
            // add 1 to the score when a match is made 
        localStorage.setItem('score', score += 1);
        let currentScore = localStorage.getItem('score');
        // display score 
        $('#score').append(currentScore); 
    } else {  
        setTimeout(function(){
            alert("Not a match!");
         }, 200);
         localStorage.setItem('score', score = 0); 
         let currentScore = localStorage.getItem('score'); 
         $('#score').append(currentScore); 
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