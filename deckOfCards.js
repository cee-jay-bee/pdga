// declare suits of cards
const suits = [`spades`, `diamonds`, `clubs`, `hearts`];
//declare values of cards
const values = [`A`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `J`, `Q`, `K`];
//declare empty array to contain the deck
let deck = [];

//function to create the deck iterating through the suits and values to combine into 52 combinations
const createDeck = () => {
    suits.map(x =>{
        values.map(y =>{
            let card = {value: y, suit: x};
            deck.push(card);
        })
    })
}
//function call creating the deck
createDeck();

// function used to shuffle the deck to randomize the deck of cards
const shuffleDeck = deckOfCards => {
    let currentCard = deckOfCards.length;
    let cardToSwitch;

    //While there are still cards to be shuffled, continue switching with other cards
    while (currentCard != 0){
        //
        cardToSwitch = Math.floor(Math.random() * currentCard);
        currentCard--;

        [deckOfCards[currentCard], deckOfCards[cardToSwitch]] = [deckOfCards[cardToSwitch], deckOfCards[currentCard]];
    }

    return deck;
}
shuffleDeck(deck);
console.log(deck);

// function to deal cards based on number of cards and players passed.
const dealCards = (cards, players) => {
    let dealtCard;
    let cardsDealt = [];


    for (let i = 1; i <= cards; i++){
        for (let j = 1; j <= players; j++){
            dealtCard = deck.unshift();
            if (deck.length != 0){
                dealtCard = deck.shift();
                console.log(dealtCard);
                cardsDealt.push(dealtCard);
            }
        }
    }
    return cardsDealt;
}

console.log(dealCards(3, 5));

