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
  constructor(question, answer) {}

  // Update the text content of the uiCard element
  updateUiCard() {}

  // Toggle the text content of the uiCard element
  // Animate using the 'is-flipped' combo class
  flip() {}
}

class FlashCardDeck {
  // Create a cards array property on the instance
  // Set the activeCard property on the instance
  // Call the loadCards method
  constructor() {}

  // Get all CMS data from the page
  // Parse the JSON data
  // Create a new FlashCard instance using the question and answer from the JSON data
  // Add the new FlashCard instance to the cards array
  loadCards() {}

  // Add a card to the cards array
  addCard(card) {}

  // Get a card from the cards array at the given index
  getCard(index) {}

  // Get the active card from the cards array
  getActiveCard() {}

  // Get the number of cards in the cards array
  getCardCount() {}

  // Increment the activeCard property
  // If the activeCard is greater than or equal to the number of cards, set the activeCard to 0
  // Return the activeCard
  getNextCard() {}

  // Update the text content of the currentCount and totalCount elements
  updateGameUi() {}
}

function init() {
  // Create a new FlashCardDeck instance
  // When the user clicks the next button, get the next card and update the ui
  // Flip the active card when the user clicks on it
  // set initial card and game ui
}
init();
