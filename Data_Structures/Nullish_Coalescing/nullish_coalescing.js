'use strict';

/**
 * ============================================================================
 * NULLISH COALESCING OPERATOR (??) - ES2020
 * ============================================================================
 * The Nullish Coalescing Operator (`??`) is a logical operator that returns its
 * right-hand side operand when its left-hand side operand is NULLISH (`null` or `undefined`).
 * Otherwise, it returns its left-hand side operand.
 *
 * CRUCIAL DIFFERENCE FROM THE OR (||) OPERATOR:
 * - `||` checks for FALSY values: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
 * - `??` checks ONLY for NULLISH values: `null` and `undefined`.
 *
 * This means values like `0`, `""` (empty string), and `false` are considered
 * TRUTHFUL / VALID values by `??` and will NOT be overwritten by the fallback!
 */

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
};

// ----------------------------------------------------------------------------
// 1. Solving the "Zero is Falsy" Default Bug
// ----------------------------------------------------------------------------
restaurant.numGuests = 0; // Exactly 0 guests are currently seated

// Using the OR operator (||):
// Since 0 is falsy, || mistakenly falls back to 10:
const guestsWithOr = restaurant.numGuests || 10;
console.log('Guests with OR (||):', guestsWithOr); // 10 (INCORRECT!)

// Using the Nullish Coalescing operator (??):
// Since 0 is NOT null or undefined, ?? correctly preserves 0:
const guestsWithNullish = restaurant.numGuests ?? 10;
console.log('Guests with Nullish (??):', guestsWithNullish); // 0 (CORRECT!)

// ----------------------------------------------------------------------------
// 2. Behavior with Other Falsy Values: Empty Strings & Booleans
// ----------------------------------------------------------------------------
const userInputText = ''; // User deliberately submitted an empty string
const defaultPlaceholder = 'Default search term';

console.log('Empty string with OR (||):', userInputText || defaultPlaceholder); // "Default search term"
console.log('Empty string with Nullish (??):', userInputText ?? defaultPlaceholder); // "" (Preserved!)

const isAnimationEnabled = false; // User turned off animation
console.log('Boolean false with OR (||):', isAnimationEnabled || true); // true (Overridden!)
console.log('Boolean false with Nullish (??):', isAnimationEnabled ?? true); // false (Preserved!)

// ----------------------------------------------------------------------------
// 3. When Nullish Coalescing (??) DOES Fall Back
// ----------------------------------------------------------------------------
// When the left-hand operand is explicitly `null` or `undefined`:
console.log('null ?? "Alex":', null ?? 'Alex');               // "Alex"
console.log('undefined ?? "Alex":', undefined ?? 'Alex');     // "Alex"
console.log('null ?? undefined:', null ?? undefined);         // undefined
console.log('undefined ?? null:', undefined ?? null);         // null
console.log('null ?? undefined ?? "Fallback":', null ?? undefined ?? 'Fallback'); // "Fallback"

// ----------------------------------------------------------------------------
// 4. Comparison Summary Table
// ----------------------------------------------------------------------------
/*
 | Value        | Value || 'Default'  | Value ?? 'Default' |
 |--------------|---------------------|--------------------|
 | 0            | 'Default'           | 0                  |
 | ""           | 'Default'           | ""                 |
 | false        | 'Default'           | false              |
 | null         | 'Default'           | 'Default'          |
 | undefined    | 'Default'           | 'Default'          |
 | 'Hello'      | 'Hello'             | 'Hello'            |
*/