'use strict';

/**
 * ============================================================================
 * OBJECT-ORIENTED PROGRAMMING: OBJECT LITERALS & METHODS
 * ============================================================================
 * Objects are collections of key-value pairs used to represent real-world entities.
 * In JavaScript, objects can contain:
 * 1. Properties: Primitive or reference values representing attributes/state.
 * 2. Methods: Functions defined on the object representing behaviors/actions.
 *
 * THE `this` KEYWORD:
 * Inside a regular object method, `this` points to the object that called the method,
 * providing direct access to the object's properties.
 */

/**
 * Renders HTML markup for an object and injects it into the DOM.
 * @param {string} updateMessage - Informational message about what changed
 */
const updateBackpackUI = (updateMessage) => {
  // Guard for Node.js environments where `document` is not present
  if (typeof document === 'undefined') {
    console.log(`[UI Update - Headless]: ${updateMessage}`);
    return;
  }

  let main = document.querySelector('main');
  if (!main) {
    main = document.createElement('main');
    document.body.appendChild(main);
  }
  main.innerHTML = createBackpackMarkup(backpack);
  console.info(updateMessage);
};

// ----------------------------------------------------------------------------
// 1. Object Literal Definition
// ----------------------------------------------------------------------------
const backpack = {
  // Properties
  name: 'Everyday Backpack',
  volume: 30,
  color: 'grey',
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,

  // Methods
  toggleLid: function (lidStatus) {
    // `this` refers to the backpack object
    this.lidOpen = lidStatus;
    updateBackpackUI(`Lid status updated to: ${this.lidOpen ? 'Open' : 'Closed'}`);
  },

  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpackUI(`Strap lengths updated to L: ${lengthLeft}, R: ${lengthRight}`);
  },
};

// ----------------------------------------------------------------------------
// 2. Generating Dynamic Markup with Template Literals
// ----------------------------------------------------------------------------
const createBackpackMarkup = (item) => {
  return `
    <article class="backpack-card">
      <h3>${item.name}</h3>
      <ul>
        <li><strong>Volume:</strong> ${item.volume} Liters</li>
        <li><strong>Color:</strong> ${item.color}</li>
        <li><strong>Pockets:</strong> ${item.pocketNum}</li>
        <li><strong>Strap lengths:</strong> Left: ${item.strapLength.left}", Right: ${item.strapLength.right}"</li>
        <li><strong>Lid:</strong> ${item.lidOpen ? 'Open' : 'Closed'}</li>
      </ul>
    </article>
  `;
};

// Initial render
updateBackpackUI('Initial backpack state rendered.');

// ----------------------------------------------------------------------------
// 3. Accessing & Modifying Properties
// ----------------------------------------------------------------------------
// Dot notation:
backpack.color = 'blue';
backpack.volume = 40;

// Bracket notation:
backpack['pocketNum'] = 18;

// Invoking methods:
backpack.toggleLid(true);
backpack.newStrapLength(28, 28);

console.log('Final Backpack State:', backpack);