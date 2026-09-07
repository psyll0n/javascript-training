'use strict';

/**
 * ============================================================================
 * PRACTICAL EXERCISE: PHRASE-O-MATIC (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Generates entertaining corporate buzzword phrases by randomly combining
 * adjectives, buzzwords, and nouns from three separate word lists.
 */

/**
 * Generates and returns a randomized corporate slogan phrase.
 * @returns {string} The generated buzzword phrase
 */
function makePhrases() {
  const words1 = ['24/7', 'multi-tier', '30,000 foot', 'B-to-B', 'win-win', 'cloud-native', 'AI-driven'];
  const words2 = ['empowered', 'value-added', 'oriented', 'focused', 'aligned', 'synergistic', 'scalable'];
  const words3 = ['process', 'solution', 'tipping-point', 'strategy', 'vision', 'paradigm', 'pipeline'];

  const rand1 = Math.floor(Math.random() * words1.length);
  const rand2 = Math.floor(Math.random() * words2.length);
  const rand3 = Math.floor(Math.random() * words3.length);

  const phrase = `${words1[rand1]} ${words2[rand2]} ${words3[rand3]}`;

  if (typeof alert !== 'undefined') {
    alert(phrase);
  } else {
    console.log(`Generated Buzzword Phrase: "${phrase}"`);
  }

  return phrase;
}

// Generate phrases
makePhrases();
makePhrases();
makePhrases();