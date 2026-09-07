'use strict';

/**
 * ============================================================================
 * LAB EXERCISE: WHAT SHALL I WEAR? (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Multi-way conditional branching (`if...else if...else`).
 * 2. Evaluating numerical temperature ranges.
 */

/**
 * Recommends clothing based on ambient temperature in Fahrenheit.
 * @param {number} temp - Current temperature
 */
function whatShallIWear(temp) {
  if (temp < 60) {
    console.log(`Temp ${temp}°F: Wear a jacket`);
  } else if (temp < 70) {
    console.log(`Temp ${temp}°F: Wear a sweater`);
  } else {
    // Fixed bug: cleanly output recommendation without malformed assignment block
    console.log(`Temp ${temp}°F: Wear a t-shirt`);
  }
}

// Test cases
whatShallIWear(50);
whatShallIWear(60);
whatShallIWear(80);