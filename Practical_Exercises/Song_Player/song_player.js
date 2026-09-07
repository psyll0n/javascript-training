'use strict';

/**
 * ============================================================================
 * PRACTICAL EXERCISE: SONG PLAYER (HEAD FIRST JAVASCRIPT)
 * ============================================================================
 * Demonstrates:
 * 1. Object modeling: Representing a media track with metadata and playback state.
 * 2. Proper use of the `this` keyword to access and update instance properties.
 * 3. State transition validation (preventing double-play or pausing when stopped).
 */

const song = {
  name: 'Walk This Way',
  artist: 'Run-D.M.C.',
  minutes: 4,
  seconds: 3,
  genre: '80s Rock/Hip-Hop',
  playing: false,

  /**
   * Starts playback if not already playing.
   */
  play: function () {
    if (!this.playing) {
      this.playing = true;
      console.log(`▶ Now playing: "${this.name}" by ${this.artist} [${this.getDuration()}]`);
    } else {
      console.log(`ℹ "${this.name}" is already playing.`);
    }
  },

  /**
   * Pauses playback if currently active.
   */
  pause: function () {
    if (this.playing) {
      this.playing = false;
      // Uses `this` rather than referencing external variable name `song`
      console.log(`⏸ Paused: "${this.name}" by ${this.artist}`);
    } else {
      console.log(`ℹ Player is currently stopped; nothing to pause.`);
    }
  },

  /**
   * Returns formatted duration string (e.g., "4:03").
   * @returns {string} Formatted duration
   */
  getDuration: function () {
    const paddedSeconds = this.seconds < 10 ? `0${this.seconds}` : this.seconds;
    return `${this.minutes}:${paddedSeconds}`;
  },
};

// ----------------------------------------------------------------------------
// Simulating Playback Lifecycle
// ----------------------------------------------------------------------------
console.log('Track Duration:', song.getDuration());
song.play();   // Starts playing
song.play();   // Warns already playing
song.pause();  // Pauses
song.pause();  // Warns already paused