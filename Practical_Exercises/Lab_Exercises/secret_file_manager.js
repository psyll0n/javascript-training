'use strict';

/**
 * ============================================================================
 * LAB EXERCISE: SECRET FILE MANAGER (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Passing objects into functions (Pass-by-Reference).
 * 2. Access control and password authentication simulation.
 * 3. Access tracking (incrementing an internal counter each time access is attempted).
 */

/**
 * Retrieves secret file contents if the password is valid, tracking access count.
 * @param {object} file - The file record object (passed by reference)
 * @param {number|string} secretPassword - Attempted access password
 * @returns {string} File content if authenticated, or error message
 */
function getSecret(file, secretPassword) {
  file.opened = file.opened + 1;

  if (secretPassword === file.password) {
    return file.contents;
  } else {
    return 'Invalid password! File contents locked!';
  }
}

/**
 * Updates secret file contents if authenticated, resetting access count.
 * @param {object} file - The file record object
 * @param {number|string} secretPassword - Password required to authorize change
 * @param {string} newSecret - The replacement confidential text
 */
function setSecret(file, secretPassword, newSecret) {
  if (secretPassword === file.password) {
    file.opened = 0;
    file.contents = newSecret;
    console.log('Secret file updated successfully and access counter reset.');
  } else {
    console.log('Update rejected: Unauthorized access attempt.');
  }
}

// ----------------------------------------------------------------------------
// Test Simulation
// ----------------------------------------------------------------------------
const superSecretFile = {
  level: 'classified',
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit.",
};

console.log('--- Attempting Access with Correct Password ---');
console.log('Access Result:', getSecret(superSecretFile, 2));
console.log('Times opened:', superSecretFile.opened); // 1

console.log('--- Attempting Access with Wrong Password ---');
console.log('Access Result:', getSecret(superSecretFile, 999));
console.log('Times opened:', superSecretFile.opened); // 2

console.log('--- Updating Secret Contents ---');
setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
console.log('New Content:', getSecret(superSecretFile, 2));
console.log('Times opened:', superSecretFile.opened); // 1 (reset to 0 by setSecret, then incremented by getSecret)
