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
    // Check if two cards matched 
    if(cardsInPlay[0] === cardsInPlay[1]) { 
        // delay the alert 
        setTimeout(function(){
             alert("You found a match!"); 
            }, 200);
        // add 1 to the score when a match is made 
        Number(score++);
       storeScore(); 
       // clear clicked cards array 
       cardsInPlay = []; 
    } else { 
        setTimeout(function(){
            alert("Not a match!");
         }, 200);
        storeScore(); 
        cardsInPlay = [];
    }
 }; 

var flipCard = function() {
    
    // set cards[cardId] using index number 
    var cardId = this.getAttribute('data-id');
    // add clicked cards image 
    this.setAttribute('src', cards[cardId].cardImage);
    // add clicked cards rank
    cardsInPlay.push(cards[cardId].rank);
    // check if there are two cards selected 
	if(cardsInPlay.length === 2 ) {
        // check if the cards match 
        checkForMatch();
    } 
}

function flipBack() { 
        this.setAttribute('src', "images/back.png");
}

const createBoard = () => { 
    for(let i = 0; i < cards.length; i++) { 
        // create card images 
        var cardElement = document.createElement("img"); 
        // set each cards image src to back.png image 
        cardElement.setAttribute('src', "images/back.png"); 
        // set each cards data-id attribute 
        cardElement.setAttribute('data-id', i); 
        // draw each image card onto the html in the game board div 
        document.getElementById('game-board').appendChild(cardElement); 
        // add click event to each card 
        cardElement.addEventListener('mousedown', flipCard);
        cardElement.addEventListener('mouseup', flipBack); 
    }
}

function storeScore() {
    // set a local storage with a score variable 
    localStorage.setItem('score', Number(score));
    // get the stored score and store it to a variable 
    let currentScore = localStorage.getItem('score');
    // clear previous score  
    $('#score').html(''); 
    // add new score to score id <p> in index.html
    $('#score').append(currentScore); 
}

// refresh the page on reset button click 
function Refresh() {
    // refresh the page when clicking the reset button 
    window.parent.location = window.parent.location.href;
}
// create the cards and display them on the webpage
createBoard(); 