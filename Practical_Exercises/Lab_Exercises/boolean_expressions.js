'use strict';

/**
 * ============================================================================
 * LAB EXERCISE: BOOLEAN EXPRESSIONS (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Evaluating logical expressions with comparison (`>`, `<=`, `===`) and logical (`&&`, `||`) operators.
 * 2. Short-circuit evaluation and operator precedence.
 */

// ----------------------------------------------------------------------------
// Expression 1: Weather Check (AND Logic)
// ----------------------------------------------------------------------------
const temp = 81;
const willRain = true;
// True only if BOTH temp > 80 and willRain is true
const humid = temp > 80 && willRain;
console.log('Expression #1 (Humid):', humid); // true

// ----------------------------------------------------------------------------
// Expression 2: Range Validation
// ----------------------------------------------------------------------------
const guess = 6;
// True if guess is within inclusive bounds [0, 6]
const isValid = guess >= 0 && guess <= 6;
console.log('Expression #2 (Is Valid Guess [0-6]):', isValid); // true

// ----------------------------------------------------------------------------
// Expression 3: File Transmission Decision (OR Logic)
// ----------------------------------------------------------------------------
const fileSizeKB = 1287;
const isTooBig = fileSizeKB > 1000;
const isUrgent = true;

// Send if urgent regardless of size, OR if file is not too big
const shouldSendFile = isUrgent || !isTooBig;
console.log('Expression #3 (Should Send File):', shouldSendFile); // true

// ----------------------------------------------------------------------------
// Expression 4: Game Level Progression
// ----------------------------------------------------------------------------
const keyPressed = 'N';
const playerPoints = 142;
let currentLevel;

// Advance to Level 2 if player pressed 'Y' OR has between 101 and 199 points
if (keyPressed === 'Y' || (playerPoints > 100 && playerPoints < 200)) {
  currentLevel = 2;
} else {
  currentLevel = 1;
}

console.log('Expression #4 (Calculated Level):', currentLevel); // 2