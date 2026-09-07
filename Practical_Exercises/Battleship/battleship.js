'use strict';

/**
 * ============================================================================
 * PRACTICAL EXERCISE: 1D BATTLESHIP GAME (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * A simple browser-based game where the user attempts to locate and sink a
 * 3-cell virtual battleship hidden along a 7-cell grid (locations 0 through 6).
 *
 * MECHANICS:
 * 1. Ship is placed randomly at 3 consecutive cells.
 * 2. The player enters a guess between 0 and 6 using `prompt()`.
 * 3. Game loops until the ship is hit 3 times (`hits === 3`).
 * 4. Statistics and accuracy are computed and shown via `alert()`.
 */

// If running in Node.js / headless mode without window.prompt:
if (typeof prompt === 'undefined') {
  console.log('[Battleship]: Interactive browser game loaded. Run in a browser to play!');
} else {
  // 1. Generate random location for the 3-cell ship (starting point: 0, 1, 2, 3, or 4)
  const randomLoc = Math.floor(Math.random() * 5);
  const location1 = randomLoc;
  const location2 = location1 + 1;
  const location3 = location2 + 1;

  let guess;
  let hits = 0;
  let guesses = 0;
  let isSunk = false;

  // 2. Main Game Loop
  while (!isSunk) {
    guess = prompt('Ready, aim, fire! (enter a number from 0-6):');

    // Handle user pressing Cancel
    if (guess === null) {
      alert('Game ended by player.');
      break;
    }

    const numericGuess = Number(guess);

    // Input validation
    if (guess === '' || isNaN(numericGuess) || numericGuess < 0 || numericGuess > 6) {
      alert('Please enter a valid cell number between 0 and 6!');
    } else {
      guesses++;

      // Check for hit
      if (numericGuess === location1 || numericGuess === location2 || numericGuess === location3) {
        alert('HIT!');
        hits++;

        // Check win condition
        if (hits === 3) {
          isSunk = true;
          alert('You sank my battleship!');
        }
      } else {
        alert('MISS!');
      }
    }
  }

  // 3. Display Final Game Statistics
  if (isSunk) {
    const accuracy = ((3 / guesses) * 100).toFixed(1);
    const stats = `You took ${guesses} guesses to sink the battleship. Shooting accuracy: ${accuracy}%.`;
    alert(stats);
  }
}