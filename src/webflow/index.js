// Globals
const uiCard = document.querySelector("[data-flashcard='ui-card']");
const currentCount = document.querySelector("[data-flashcard='current-count']");
const totalCount = document.querySelector("[data-flashcard='total-count']");
const nextButton = document.querySelector("[data-flashcard='next-button']");

// Get the animation duration from the CSS
const transitionDuration = getComputedStyle(uiCard).transitionDuration; // returns format '0.5s'
const animationDurationInMs = parseFloat(transitionDuration) * 1000;

/**
 *
 * FlashCard
 *
 */
class FlashCard {
  // Set the question and answer properties on the instance
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }

  // Update the text content of the uiCard element
  updateUiCard() {
    uiCard.textContent = this.question;
  }

  // Toggle the text content of the uiCard element
  // Animate using the 'is-flipped' combo class
  flip() {
    uiCard.classList.toggle("is-flipped");
    setTimeout(()=> {
      uiCard.textContent =
      uiCard.textContent === this.question ? this.answer : this.question;
      uiCard.classList.toggle("is-flipped");
    }, animationDurationInMs);
}

class FlashCardDeck {
  // Create a cards array property on the instance
  // Set the activeCard property on the instance
  // Call the loadCards method
  constructor() {
    this._cards = [];
    this.activeCard = 0;
    this.loadCards();
  }

  // Get all CMS data from the page
  // Parse the JSON data
  // Create a new FlashCard instance using the question and answer from the JSON data
  // Add the new FlashCard instance to the cards array
  loadCards() {
    const cmsData = document.querySelectorAll('[data-flashcard="info"]');
    cmsData.forEach((card)=> {
      const jsonData = JSON.parse(card.innerHTML);
      const question = jsonData.question;
      const answer = jsonData.answer;
      this.addCard(new FlashCard(question, answer));
    });
      
    
  }

  // Add a card to the cards array
  addCard(card) {
    this._cards.push(card);
  }

  // Get a card from the cards array at the given index
  getCard(index) {
    return this._cards[index];
  }

  // Get the active card from the cards array
  getActiveCard() {
    return this.getCard(this.activeCard);
  }

  // Get the number of cards in the cards array
  getCardCount() {
    return this._cards.length;
  }

  // Increment the activeCard property
  // If the activeCard is greater than or equal to the number of cards, set the activeCard to 0
  // Return the activeCard
  getNextCard() {
    this.activeCard++;
    if(this._cards >= this.getCardCount()) {
      this.activeCard = 0;
    }
    return this._cards[this.activeCard];
  }

  // Update the text content of the currentCount and totalCount elements
  updateGameUi() {
    currentCount.textContent = this.activeCard + 1;
    totalCount.textContent = this.getCardCount();
  }
}

function init() {
  // Create a new FlashCardDeck instance
  const deck = new FlashCardDeck();
  // When the user clicks the next button, get the next card and update the ui
  nextButton.addEventListener("click", ()=> {
    const nextCard = deck.getNextCard();
    nextCard.updateUiCard();
    deck.updateGameUi();
  });
  // Flip the active card when the user clicks on it
  uiCard.addEventListener("click", ()=> {
    const card = deck.getActiveCard();
    card.flip();
  });
  // set initial card and game ui
  const card = deck.getActiveCard();
  card.updateUiCard();
  deck.updateGameUi();
}
init();
