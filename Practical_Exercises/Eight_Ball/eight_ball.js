'use strict';

/**
 * ============================================================================
 * PRACTICAL EXERCISE: MAGIC EIGHT BALL (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Object state management: tracking the internal index of advice responses.
 * 2. Cycling through arrays and handling index wrapping.
 * 3. Adding random shaking capability.
 */

const eightBall = {
  index: 0,
  advice: [
    'Yes, definitely',
    'No, absolutely not',
    'Ask again later',
    'Not a chance',
    'Outlook good',
    'Cannot predict now',
  ],

  /**
   * Advances the advice index sequentially, wrapping back to 0 at array end.
   */
  shakeSequential: function () {
    this.index = (this.index + 1) % this.advice.length;
  },

  /**
   * Selects a random piece of advice from the array.
   */
  shakeRandom: function () {
    this.index = Math.floor(Math.random() * this.advice.length);
  },

  /**
   * Reads and returns the advice currently selected by the index pointer.
   * @returns {string} The oracle advice text
   */
  look: function () {
    return this.advice[this.index];
  },
};

// ----------------------------------------------------------------------------
// Testing the Eight Ball
// ----------------------------------------------------------------------------
console.log('--- Sequential Shaking ---');
console.log('Initial reading:', eightBall.look());

eightBall.shakeSequential();
console.log('After shake 1:', eightBall.look());

eightBall.shakeSequential();
console.log('After shake 2:', eightBall.look());

console.log('--- Random Shaking ---');
eightBall.shakeRandom();
console.log('Random prediction:', eightBall.look());