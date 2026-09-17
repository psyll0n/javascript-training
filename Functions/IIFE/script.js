'use strict';

/* ==========================================================================
   Immediately Invoked Function Expressions (IIFE)
   ==========================================================================
   An IIFE (pronounced "iffy") is a JavaScript function that runs as soon as
   it is defined.

   Syntax:
   (function () {
     // code
   })();

   The surrounding parentheses around the function declaration prevent it
   from being treated as a syntax error (Function Declaration requires a name),
   converting it into a Function Expression. The trailing () immediately invokes it.

   Primary Reasons to Use an IIFE:
   1. Data Privacy & Encapsulation: Variables defined inside remain private to
      the function scope and do not leak into the global scope.
   2. Avoid Global Namespace Pollution: Keeps the global window/globalThis clean.
   3. Module Pattern: Provides public API methods while closing over private state.
   4. One-Time Setup: Code that only needs to execute once (initialization, config).
   5. Preserving State in Asynchronous Loops: The classic pre-ES6 `var` closure fix.
   ========================================================================== */



// --------------------------------------------------------------------------
// 1. Normal Function Expression vs. Classic IIFE
// --------------------------------------------------------------------------

// Normal Function Expression - Function assigned to a variable, executed later
const runOnce = function () {
  console.log('Normal function: This will only run when explicitly called');
};
runOnce();

// Classic IIFE - Function Expression is immediately invoked
(function () {
  console.log('This IIFE function will be executed immediately after it is defined');
})();

// IIFE - Arrow Function (ES6+)
(() => console.log('This is an IIFE - Arrow function which will be executed immediately after it is defined'))
();  // () at the end is used to invoke the function immediately



// --------------------------------------------------------------------------
// 2. Syntax Variations of IIFE
// --------------------------------------------------------------------------

// Variation A: Douglas Crockford's convention ("dog balls" style)
// The invoking parentheses are placed INSIDE the grouping parentheses
(function () {
  console.log('Syntax Variant A (Crockford): (function () { ... }());');
}());

// Variation B: ES6+ Arrow Function IIFE with block body
(() => {
  const localSecret = 'arrow-iife-secret';
  console.log(`Syntax Variant B (Arrow Block): Executed with local token: ${localSecret}`);
})();

// Variation C: Unary Operators as prefix (Historically used by minifiers like UglifyJS)
// The unary operator (+, -, !, ~, void) forces JavaScript to parse the function as an expression!
!function () {
  console.log('Syntax Variant C (! unary): Exclamation prefix forces expression context');
}();

+function () {
  console.log('Syntax Variant C (+ unary): Plus prefix forces expression context');
}();

void function () {
  console.log('Syntax Variant C (void unary): void operator returns undefined');
}();



// --------------------------------------------------------------------------
// 3. Passing Arguments into an IIFE (Parameter Scoping & Aliasing)
// --------------------------------------------------------------------------
// You can pass arguments into the invoking parentheses at the bottom.
// Common benefits:
// - Aliasing long global object names (e.g. `window`, `document`) into short variables (`w`, `d`).
// - Prevents global variables from being shadowed or tampered with.
// - Improves performance and allows minifiers to compress variable names.

(function (appName, version, env) {
  console.log(`[IIFE Parameter Demo] Initializing ${appName} v${version} in ${env.toUpperCase()} mode`);
})('TrainingApp', '2.4.0', 'production');

// Aliasing global scope objects safely
(function (globalScope) {
  const isBrowser = typeof window !== 'undefined' && globalScope === window;
  console.log(`[IIFE Global Check] Running in ${isBrowser ? 'Browser' : 'Node.js/Server'} environment`);
})(typeof window !== 'undefined' ? window : globalThis);



// --------------------------------------------------------------------------
// 4. Returning Values from an IIFE (One-Time Complex Computation)
// --------------------------------------------------------------------------
// An IIFE can compute a complex value or object once, return it, and clean up
// any temporary variables that were used in the calculation.

const applicationConfig = (function () {
  // Temporary calculations & private constants
  const platform = typeof window !== 'undefined' ? 'Web' : 'Server';
  const timestamp = new Date().toISOString();
  const buildId = Math.random().toString(36).substring(2, 9);

  // Return only the clean, frozen configuration object
  return Object.freeze({
    platform,
    buildId,
    timestamp,
    apiUrl: 'https://api.example.com/v1',
    features: ['data-encapsulation', 'scoped-execution', 'module-pattern']
  });
})();

console.log('[IIFE Return Value Demo] Computed frozen config:', applicationConfig);



// --------------------------------------------------------------------------
// 5. Data Privacy & The Module Pattern (Encapsulation via Closures)
// --------------------------------------------------------------------------
// Before ES6 classes with `#` private fields existed, the Revealing Module Pattern
// with IIFEs was the primary way to achieve OOP encapsulation in JavaScript.

const safeCounterModule = (function () {
  // Private variables - impossible to access directly from outer scope
  let privateCount = 0;
  const historyLog = [];

  // Private helper function
  function recordAction(actionName, value) {
    historyLog.push({ action: actionName, value, time: new Date().toLocaleTimeString() });
  }

  // Public API returned to the outer scope
  return {
    increment() {
      privateCount++;
      recordAction('increment', privateCount);
      return privateCount;
    },
    decrement() {
      privateCount--;
      recordAction('decrement', privateCount);
      return privateCount;
    },
    reset() {
      privateCount = 0;
      recordAction('reset', 0);
      return privateCount;
    },
    getCount() {
      return privateCount;
    },
    getHistory() {
      return [...historyLog]; // Return shallow copy to preserve immutability
    }
  };
})();

console.log('Module counter initial count:', safeCounterModule.getCount());
safeCounterModule.increment();
safeCounterModule.increment();
console.log('Module counter after increments:', safeCounterModule.getCount());
console.log('Attempting to access privateCount directly:', safeCounterModule.privateCount); // undefined!



// --------------------------------------------------------------------------
// 6. The Classic Pre-ES6 Loop Closure Problem: var vs. IIFE vs. let
// --------------------------------------------------------------------------
/*
   The Problem:
   When `var` was used in loops with asynchronous callbacks (like setTimeout or event listeners),
   `var` is function-scoped (or global). Only ONE shared instance of `i` existed.
   By the time callbacks executed, the loop had completed and `i` was at its final value!
*/

function demonstrateLoopProblem() {
  console.log('--- Loop Problem Demo (var without IIFE) ---');
  for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log('var callback without IIFE: i is', i); // Prints 4, 4, 4
    }, 100);
  }
}

// The Historical Solution with an IIFE:
// By wrapping the callback in an IIFE and passing `i`, we create a brand new
// lexical environment for each iteration, locking in the current value of `i`.
function demonstrateLoopIIFEFix() {
  console.log('--- Loop Fix with IIFE ---');
  for (var i = 1; i <= 3; i++) {
    (function (capturedIndex) {
      setTimeout(function () {
        console.log('IIFE callback: capturedIndex is', capturedIndex); // Prints 1, 2, 3
      }, 100);
    })(i);
  }
}

// The Modern ES6 Solution:
// `let` is block-scoped! In ES6, a new binding of `i` is created for every loop iteration.
function demonstrateLoopES6Let() {
  console.log('--- Modern ES6 Loop with let ---');
  for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
      console.log('ES6 let callback: i is', i); // Prints 1, 2, 3
    }, 100);
  }
}



// --------------------------------------------------------------------------
// 7. Async IIFE (Top-Level Await Pattern)
// --------------------------------------------------------------------------
// Async IIFE allows using `await` at the top level of scripts, providing clean
// asynchronous execution with error handling.

(async () => {
  try {
    const simulateAsyncFetch = () =>
      new Promise((resolve) => {
        setTimeout(() => resolve({ status: 200, message: 'Async IIFE execution succeeded' }), 50);
      });

    const response = await simulateAsyncFetch();
    console.log('[Async IIFE] Fetched payload:', response);
  } catch (error) {
    console.error('[Async IIFE Error]', error);
  }
})();



// --------------------------------------------------------------------------
// 8. Review: Scope & Variable Declarations (Preserved Reference)
// --------------------------------------------------------------------------
/* 
   Review: What is a Scope?

   Scope is the context in which a variable is declared.
   - Global Scope: Variables declared outside any function or block are accessible anywhere.
   - Function Scope: Variables declared with `var` or inside a function are accessible only within that function.
   - Block Scope: Variables declared with `let`, `const`, `class` are strictly bounded by `{ ... }`.

   Example:
   const name = "John";  // Global scope

   function sayHello() {
     console.log(name);  // Accessible
   }
   sayHello();

   function sayGoodbye() {
     const name = "Jane";  // Function scope
     console.log(name);  // Accessible
   }

   Block Scope vs. Function Scope:
   {
     const isPrivate = 23;    // Block scope
     var notPrivate = 24;     // Function scope - because of var
   }

   sayGoodbye();
   // console.log(isPrivate);  // ReferenceError: isPrivate is not defined
   // console.log(notPrivate);  // Accessible if in non-strict function/global scope
*/



// --------------------------------------------------------------------------
// 9. Interactive UI & Live Terminal Binding (Browser Execution)
// --------------------------------------------------------------------------

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // UI Elements - Terminal
    const terminalOutput = document.getElementById('terminalOutput');
    const btnClearTerminal = document.getElementById('btnClearTerminal');

    // Logging helper to display output in on-page terminal as well as DevTools console
    function logToTerminal(message, type = 'default') {
      if (!terminalOutput) return;

      const line = document.createElement('div');
      line.className = `terminal-line ${type ? `${type}-line` : ''}`;

      const time = document.createElement('span');
      time.className = 'terminal-time';
      const now = new Date();
      time.textContent = `[${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;

      const text = document.createElement('span');
      text.className = 'terminal-text';
      text.textContent = typeof message === 'object' ? JSON.stringify(message, null, 2) : String(message);

      line.appendChild(time);
      line.appendChild(text);
      terminalOutput.appendChild(line);

      // Auto-scroll to bottom of terminal
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    if (btnClearTerminal) {
      btnClearTerminal.addEventListener('click', () => {
        if (terminalOutput) {
          terminalOutput.innerHTML = `
            <div class="terminal-line info-line">
              <span class="terminal-time">[CLEARED]</span>
              <span class="terminal-text">Terminal cleared. Ready for next executions.</span>
            </div>
          `;
        }
      });
    }

    // --- Card 1: Module Pattern / Counter Demo ---
    const counterDisplay = document.getElementById('counterDisplay');
    const counterStatusText = document.getElementById('counterStatusText');
    const statusIndicator = document.querySelector('.status-indicator');
    const btnIncrement = document.getElementById('btnIncrement');
    const btnDecrement = document.getElementById('btnDecrement');
    const btnReset = document.getElementById('btnReset');
    const btnInspect = document.getElementById('btnInspect');

    function updateCounterUI(val, statusMsg, isAlert = false) {
      if (counterDisplay) {
        counterDisplay.textContent = val;
        counterDisplay.classList.remove('pop');
        // Trigger reflow to restart CSS animation
        void counterDisplay.offsetWidth;
        counterDisplay.classList.add('pop');
      }
      if (counterStatusText) counterStatusText.textContent = statusMsg;
      if (statusIndicator) {
        if (isAlert) statusIndicator.classList.add('alert');
        else statusIndicator.classList.remove('alert');
      }
    }

    if (btnIncrement) {
      btnIncrement.addEventListener('click', () => {
        const val = safeCounterModule.increment();
        updateCounterUI(val, `Incremented to ${val}`);
        logToTerminal(`safeCounterModule.increment() -> ${val}`, 'success');
      });
    }

    if (btnDecrement) {
      btnDecrement.addEventListener('click', () => {
        const val = safeCounterModule.decrement();
        updateCounterUI(val, `Decremented to ${val}`);
        logToTerminal(`safeCounterModule.decrement() -> ${val}`, 'info');
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        const val = safeCounterModule.reset();
        updateCounterUI(val, 'Counter reset to 0');
        logToTerminal(`safeCounterModule.reset() -> ${val}`, 'warn');
      });
    }

    if (btnInspect) {
      btnInspect.addEventListener('click', () => {
        const attemptedVar = safeCounterModule.privateCount;
        updateCounterUI(
          safeCounterModule.getCount(),
          `safeCounterModule.privateCount is ${attemptedVar} (Strictly Encapsulated!)`,
          true
        );
        logToTerminal(
          `Inspecting: safeCounterModule.privateCount is ${attemptedVar} — Private variable cannot be accessed outside the IIFE!`,
          'warn'
        );
      });
    }

    // --- Card 2: Loop Closure Comparison Demo ---
    const loopResults = document.getElementById('loopResults');
    const btnLoopVar = document.getElementById('btnLoopVar');
    const btnLoopIIFE = document.getElementById('btnLoopIIFE');
    const btnLoopLet = document.getElementById('btnLoopLet');

    function renderLoopBadges(badges, title, badgeClass) {
      if (!loopResults) return;
      loopResults.innerHTML = `
        <div style="font-size:0.8rem; font-weight:600; color:var(--text-secondary); margin-bottom:4px;">${title}:</div>
        <div class="loop-step-badge-group">
          ${badges.map(b => `<span class="loop-step-badge ${badgeClass}">${b}</span>`).join('')}
        </div>
      `;
    }

    if (btnLoopVar) {
      btnLoopVar.addEventListener('click', () => {
        logToTerminal('Running async loop with var (Bug Demonstration)...', 'error');
        const badges = [];
        for (var i = 1; i <= 3; i++) {
          setTimeout(function () {
            badges.push(`Callback: i = ${i}`);
            logToTerminal(`[var Loop] Callback received i = ${i} (Expected 1, 2, or 3)`, 'error');
            renderLoopBadges(badges, 'Shared mutable binding (var)', 'loop-badge-danger');
          }, 60);
        }
      });
    }

    if (btnLoopIIFE) {
      btnLoopIIFE.addEventListener('click', () => {
        logToTerminal('Running async loop with IIFE scope fix...', 'info');
        const badges = [];
        for (var i = 1; i <= 3; i++) {
          (function (capturedIndex) {
            setTimeout(function () {
              badges.push(`Iteration ${capturedIndex}: index = ${capturedIndex}`);
              logToTerminal(`[IIFE Loop Fix] Captured scope parameter = ${capturedIndex}`, 'info');
              renderLoopBadges(badges, 'Captured IIFE scope per iteration', 'loop-badge-success');
            }, 60);
          })(i);
        }
      });
    }

    if (btnLoopLet) {
      btnLoopLet.addEventListener('click', () => {
        logToTerminal('Running async loop with modern ES6 let...', 'success');
        const badges = [];
        for (let i = 1; i <= 3; i++) {
          setTimeout(function () {
            badges.push(`Iteration ${i}: i = ${i}`);
            logToTerminal(`[ES6 let] Block-scoped binding per iteration = ${i}`, 'success');
            renderLoopBadges(badges, 'Modern block-scoped let', 'loop-badge-success');
          }, 60);
        }
      });
    }

    // --- Card 3: Async IIFE Simulation ---
    const btnAsyncIIFE = document.getElementById('btnAsyncIIFE');
    const asyncPreview = document.getElementById('asyncPreview');

    if (btnAsyncIIFE && asyncPreview) {
      btnAsyncIIFE.addEventListener('click', () => {
        asyncPreview.innerHTML = `
          <div class="async-spinner-wrapper">
            <div class="spinner"></div>
            <span>Executing Async IIFE with await...</span>
          </div>
        `;
        logToTerminal('Triggered Async IIFE routine...', 'info');

        // Execute Async IIFE
        (async () => {
          try {
            await new Promise(r => setTimeout(r, 600));
            const mockData = {
              status: 200,
              runtime: 'ES6+ Async IIFE',
              authenticated: true,
              timestamp: new Date().toLocaleTimeString(),
              featuresLoaded: 3
            };

            asyncPreview.innerHTML = `
              <div class="async-result-box">
                <div>⚡ <strong>Async IIFE Resolved Successfully</strong></div>
                <div>Status: ${mockData.status} OK | Runtime: ${mockData.runtime}</div>
                <div>Session Authenticated: ${mockData.authenticated} (${mockData.timestamp})</div>
              </div>
            `;
            logToTerminal(`Async IIFE resolved with payload: ${JSON.stringify(mockData)}`, 'success');
          } catch (err) {
            asyncPreview.innerHTML = `<div style="color:var(--rose-400);">Execution error: ${err.message}</div>`;
            logToTerminal(`Async IIFE failed: ${err.message}`, 'error');
          }
        })();
      });
    }

    // --- Card 4: Load Config Demo ---
    const btnLoadConfig = document.getElementById('btnLoadConfig');
    const configCode = document.getElementById('configCode');

    if (btnLoadConfig && configCode) {
      btnLoadConfig.addEventListener('click', () => {
        configCode.textContent = JSON.stringify(applicationConfig, null, 2);
        logToTerminal('Inspecting applicationConfig (frozen IIFE return object):', 'info');
        logToTerminal(applicationConfig, 'default');
      });
    }
  });
}
