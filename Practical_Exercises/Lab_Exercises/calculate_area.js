'use strict';

/**
 * ============================================================================
 * LAB EXERCISE: CALCULATE CIRCLE AREA (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Functions returning computed numerical values.
 * 2. Guard clauses and input validation (radius must be positive).
 * 3. Math.PI constant and mathematical expressions.
 */

/**
 * Calculates the geometric area of a circle.
 * @param {number} radius - The radius of the circle
 * @returns {number|string} The computed area, or an error message if invalid
 */
function calculateArea(radius) {
  if (radius <= 0) {
    return 'Radius must be greater than zero';
  }
  return Math.PI * radius * radius;
}

const testRadius = 5.2;
const circleArea = calculateArea(testRadius);

console.log(`The area of a circle with radius ${testRadius} is: ${typeof circleArea === 'number' ? circleArea.toFixed(2) : circleArea}`);
console.log('Invalid input test:', calculateArea(-1));