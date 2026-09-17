# JavaScript Training

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Environment](https://img.shields.io/badge/Environment-Browser%20%7C%20Node.js-blue.svg)](https://nodejs.org)
[![Status](https://img.shields.io/badge/Status-Active%20Training-brightgreen.svg)](#)

A comprehensive, modular JavaScript training repository covering modern ECMAScript fundamentals, control flow, functions, ES6+ data structures & operators, object-oriented concepts, and hands-on practical exercises.

---

## 📚 Course & Curriculum References

The materials in this repository are structured around industry-leading JavaScript curricula:
1. **[The Complete JavaScript Course 2025: From Zero to Expert!](https://www.udemy.com/share/101Wfe3@jwF-V7DO4p3LtHdKn7NYb4wDoHXR68v7rjv25pYr2D24iwZYaruLq2-YTwxvUTEX/)** by Jonas Schmedtmann (Udemy)
2. **[Head First JavaScript Programming](https://www.oreilly.com/library/view/head-first-javascript/9781449340124/)** by Eric Freeman & Elisabeth Robson (O'Reilly)

---

## 🧭 Repository Architecture

```text
javascript-training/
├── Control_Flow/                       # Conditional branching and iteration mechanics
│   ├── Conditionals/                   # if, else if, else, strict equality (===)
│   ├── Compound_Conditionals/          # Boolean logic, AND (&&), OR (||), NOT (!)
│   ├── For_Loops/                      # Counter loops, countdowns, nested multiplication tables
│   └── While_Loops/                    # while conditions, dynamic dice roll simulations, do...while
├── Functions/                          # Function paradigms, parameters, closures, HOFs, execution contexts & IIFEs
│   ├── Functions_Intro/                # Declarations, expressions, arrow functions, composition & oven controller
│   ├── Default_Parameters/             # ES6 default parameter initializers, pass-by-value vs pass-by-reference
│   ├── Higher_Order_Functions/         # First-class vs higher-order functions, callback abstraction & transformers
│   ├── Functions_Returning_Functions/  # Closures, lexical scope retention, currying & nested arrow functions
│   ├── Function_Methods/               # Explicit `this` binding (call, apply, bind), partial application & Poll app
│   └── IIFE/                           # Immediately Invoked Function Expressions, module pattern, loop closure & async IIFE
├── Data_Structures/                    # Core data structures, modern ES6+ operators & reference guide
│   ├── Arrays/                         # Array literals, indexing, .length, ES2022 .at()
│   ├── Modifying_Arrays/               # Mutating (push, pop, splice) vs non-mutating (slice, includes)
│   ├── Loops_And_Arrays/               # Iteration, for...of, entries(), destructuring, break/continue
│   ├── For_Of_Loop_And_Arrays/         # ES6 for...of loop over iterables (arrays, strings) & entries()
│   ├── Array_Destructuring/            # Positional unpacking, variable swapping, defaults
│   ├── Object_Destructuring/           # Key matching, renaming, defaults, parameter destructuring
│   ├── Spread_Operator/                # Iterable expansion (...), shallow cloning, merging, object spread
│   ├── Rest_Pattern/                   # Condensing elements (...), variadic functions, rest parameters
│   ├── Short_Circuiting/               # Logical evaluation with && and ||, falsy pitfalls
│   ├── Nullish_Coalescing/             # ES2020 ?? operator vs ||, preserving 0, "", and false
│   ├── Logical_Assignments/            # ES2021 ||=, ??=, &&= combined assignment operators
│   ├── Shallow_And_Deep_Copy/          # Reference types in memory, spread vs structuredClone()
│   ├── Enhanced_Object_Literals/       # ES6 property/method shorthand and computed property names
│   ├── Optional_Chaining/              # ES2020 ?. operator for nested properties, methods, and arrays
│   ├── Modern_Operators/               # Object iteration with Object.keys(), values(), and entries()
│   ├── Sets/                           # ES6 Set collection: uniqueness, operations, deduplication & Set methods
│   ├── Maps/                           # Key-value hash maps with arbitrary keys, chaining, iteration & object conversion
│   └── README.md                       # Comprehensive guide: primitive & non-primitive data structures
├── Working_with_Strings/               # Strings, boxing, slicing, casing, regex, padding, split/join & flight parser
│   ├── index.html                      # HTML test runner
│   └── script.js                       # String indexing, slicing, casing, regex replace, padding, masking, split/join & flight parser
├── OOP/                                # Object-Oriented Programming concepts
│   └── Objects/                        # Object literals, methods, `this` context, DOM rendering
├── Practical_Exercises/                # Project labs & interactive mini-apps
│   ├── Battleship/                     # 1D battleship guessing game with input validation
│   ├── Car_Factory/                    # Aut-o-matic factory function & vehicle state machine
│   ├── Phrase_O_Matic/                 # Randomized corporate buzzword generator
│   ├── Eight_Ball/                     # Magic Eight Ball state machine with sequential & random shaking
│   ├── Song_Player/                    # Audio track metadata model with duration calculation
│   ├── Bottles_Of_Beer/                # 99 Bottles loop with singular/plural grammatical handling
│   ├── Bubble_Factory/                 # Bubble score analysis, peak score filtering & while-loop iteration
│   ├── Football_Betting/               # Real-world match betting app: destructuring, maps, odds & scorers
│   └── Lab_Exercises/                  # Standalone focused programming exercises
│       ├── bark_function.js            # Weight-based branching logic
│       ├── boolean_expressions.js      # Complex truth table evaluations
│       ├── calculate_area.js           # Circle area calculation with input validation
│       ├── has_bubble_gum.js           # Synchronized parallel array searching
│       ├── secret_file_manager.js      # Pass-by-reference object mutation & access tracking
│       └── what_shall_i_wear.js        # Multi-branch temperature recommendations
└── README.md                           # Repository documentation and study guide
```

---

## 📖 Section-by-Section Overview

### 1. Control Flow (`Control_Flow/`)
Deals with decision-making and repetitive execution in JavaScript programs.

| Directory | Key Concepts | Key Files |
| :--- | :--- | :--- |
| **`Conditionals/`** | `if`, `else if`, `else`, block scoping, strict (`===`) vs loose (`==`) equality | `js_conditionals.js`, `index.html` |
| **`Compound_Conditionals/`** | Logical AND (`&&`), OR (`\|\|`), NOT (`!`), operator precedence, double-negation (`!!`) | `compound_conditionals.js`, `index.html` |
| **`For_Loops/`** | Loop initialization, condition, increment/decrement, nested loops, multiplication table | `for_loops.js`, `index.html` |
| **`While_Loops/`** | `while` loop condition evaluation, avoiding infinite loops, random events, `do...while` | `while_loops.js`, `index.html` |

---

### 2. Functions (`Functions/`)
Covers the complete JavaScript function ecosystem—from basic definitions, parameter defaults, and execution mechanics to advanced runtime contexts (`this`), higher-order functional patterns, lexical closures, currying, and encapsulation paradigms.

| Module | Description | Key Concepts & Syntax |
| :--- | :--- | :--- |
| **`Functions_Intro/`** | Core definitions, hoisting semantics, and functional decomposition. | Function declarations (hoisted), expressions (`const fn = function()`), arrow functions (`=>`), functional composition (`cutFruitPieces` ➔ `fruitProcessor`, multi-tier oven controller). |
| **`Default_Parameters/`** | ES6 default parameters, dynamic expressions, and memory semantics. | Call-time evaluation (`price = 199 * num`), skipping with `undefined`, pass-by-value (primitives) vs pass-by-reference (heap objects), mutable argument side effects. |
| **`Higher_Order_Functions/`** | First-class functions, higher-order abstractions, and callbacks. | First-class citizenship (functions as data), callback abstraction (`transformer`, `upperFirstWord`, `oneWord`), built-in HOFs (`addEventListener`, `forEach`), function `.name` property. |
| **`Functions_Returning_Functions/`** | Inner functions, lexical scope preservation, and currying. | Closures retaining outer variable environment, curried function calls (`greet('Hi')('Alex')`), concise arrow currying (`greeting => name => ...`). |
| **`Function_Methods/`** | Explicit `this` binding, method borrowing, and partial application. | Explicit context invocation with `call()` and `apply()`, modern `call(thisArg, ...args)`, `bind()` for delayed execution & DOM events, partial application (`addTax.bind(null, 0.23)`), interactive Poll app challenge. |
| **`IIFE/`** | Immediately Invoked Function Expressions, data privacy, and modern patterns. | Grouping parentheses `(function() {})()`, Crockford syntax, unary operators (`!`, `+`, `void`), parameter passing & scope aliasing, returning frozen objects (`Object.freeze`), Revealing Module Pattern (`safeCounterModule`), solving pre-ES6 loop closure bug (`var` vs IIFE vs block-scoped `let`), top-level async IIFE with `await`, interactive UI dashboard. |

#### Detailed Topic Breakdown:

- **Functions Intro (`Functions_Intro/`)**:
  - **Function Declarations**: Hoisted functions that can be called before their definition line in the code.
  - **Function Expressions**: Anonymous or named functions stored inside variables; not hoisted and bound to runtime evaluation.
  - **Arrow Functions (ES6)**: Concise syntax with implicit returns for one-liners and lexical `this` binding (inheriting `this` from the surrounding parent scope).
  - **Function Composition**: Modular decomposition where high-level orchestration functions (e.g., `bake`, `fruitProcessor`) call low-level specialized helpers (`setOvenMode`, `setOvenTemperature`, `cutFruitPieces`).

- **Default Parameters & Memory Model (`Default_Parameters/`)**:
  - **ES6 Default Parameters**: Specifying fallback values directly in parameter lists (`numOfPassengers = 10`), evaluated sequentially at runtime.
  - **Dynamic Default Expressions**: Computing defaults based on earlier parameters (`price = 199 * numOfPassengers`).
  - **Skipping with `undefined`**: Passing `undefined` to preserve default values without manual fallback logic.
  - **Pass-by-Value vs. Pass-by-Reference**:
    - **Primitives**: Passed by value (copied on the call stack); modifying them inside a function does not affect the original variable.
    - **Reference Types**: Objects and arrays are passed by reference (pointers to memory heap addresses); modifying object properties inside a function mutates the original object. Demonstrated through real-world passenger check-in and passport number reissuance (`checkIn`, `newPassport`).

- **Higher-Order Functions & Callbacks (`Higher_Order_Functions/`)**:
  - **First-Class Functions**: JavaScript treats functions as first-class citizens (functions are values that can be stored in variables, passed into other functions, or returned from functions).
  - **Higher-Order Functions (HOF)**: Functions that accept callback functions as arguments (e.g., `transformer(str, fn)`, `document.body.addEventListener('click', fn)`, `[...].forEach(fn)`) or return functions.
  - **Callback Abstraction**: Separating generic workflow logic from domain-specific transformations (e.g., passing `upperFirstWord` or `oneWord` into a higher-order string `transformer`).
  - **Function Introspection**: Accessing built-in function properties such as `fn.name` to track and log execution paths dynamically.

- **Closures & Functions Returning Functions (`Functions_Returning_Functions/`)**:
  - **Lexical Closures**: An inner function permanently remembers and maintains access to all variables from its parent lexical environment, even long after the outer function has executed and popped off the call stack.
  - **Function Factories & Currying**: Creating specialized functions configured with pre-set context (`const greeting = greet('Hello'); greeting('Alex');`).
  - **Arrow Function Currying**: Clean, expressive chained arrow syntax for multi-tier functions:
    ```javascript
    const greetArrow = greeting => name => console.log(`${greeting}, ${name}`);
    greetArrow('Good Morning')('Alex');
    ```

- **Function Methods & Explicit Context (`Function_Methods/`)**:
  - **Explicit `this` Binding**: Overriding default `this` resolution using `.call()`, `.apply()`, and `.bind()`.
  - **Method Borrowing**: Reusing methods defined in one object across other objects without code duplication (borrowing `lufthansa.book` for `eurowings` and `swiss`).
  - **`call` vs `apply` vs Spread**: `.call(thisArg, arg1, arg2)` takes arguments individually; `.apply(thisArg, [arg1, arg2])` takes an array. In modern ES6+, `.call(thisArg, ...args)` replaces `.apply()` entirely.
  - **The `bind` Method**: Returns a new function with `this` permanently bound to a given object without immediate execution. Essential for DOM event handlers (`button.addEventListener('click', lufthansa.buyPlane.bind(lufthansa))`).
  - **Partial Application**: Pre-specifying initial arguments using `.bind(null, fixedArg)` to produce specialized utilities (e.g., generating fixed 23% VAT calculators: `const addVAT = addTax.bind(null, 0.23)` vs higher-order factory `addTaxRate(0.23)`).
  - **Coding Challenge (Interactive Poll Application)**: Full-featured challenge storing questions, options, and vote tallies, utilizing `prompt()` validation, answer registration, dynamic result rendering, and method borrowing for external test datasets via `poll.displayResults.call({ answers: [5, 2, 3] })`.

- **Immediately Invoked Function Expressions (`IIFE/`)**:
  - **Execution Mechanics**: Functions wrapped in grouping parentheses `(function () { ... })();` or arrow format `(() => { ... })();` that execute immediately upon definition.
  - **Syntax Variations**: Douglas Crockford convention `(function () { ... }());` and unary operator prefixes (`!function(){}()`, `+function(){}()`, `void function(){}()`) that force expression context.
  - **Parameter Passing & Global Aliasing**: Injecting parameters (`(function(appName, env){ ... })('App', 'prod')`) and safely aliasing globals (`window`/`globalThis`) for performance, security, and minification.
  - **One-Time Calculation & Immutability**: Executing complex initialization code once and returning sealed/frozen configuration objects (`Object.freeze(...)`).
  - **The Revealing Module Pattern**: Classical data privacy and encapsulation in JavaScript prior to private class fields (`#`), creating private variables (`let privateCount`) closed over by an exported public API object (`safeCounterModule`).
  - **Asynchronous Loop Closure Problem**: In-depth analysis of the classic loop bug:
    - `var`: Single shared mutable variable binding across iterations causing delayed callbacks (`setTimeout`) to log the terminal loop value (`4, 4, 4`).
    - `IIFE`: Passing `i` into an immediately invoked closure to lock in each iteration's value in a distinct lexical environment (`1, 2, 3`).
    - `let`: Modern ES6 block-scoping where JavaScript automatically creates a fresh binding for each loop iteration.
  - **Async IIFE**: Leveraging top-level asynchronous workflows with `await` and comprehensive `try...catch` error handling:
    ```javascript
    (async () => {
      try {
        const res = await fetchData();
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    })();
    ```
  - **Interactive Browser UI & Dashboard**: Accompanied by a dedicated dark-mode interactive test harness (`index.html` & `style.css`) featuring a live simulated terminal log, animated counter module, async execution simulator, and loop execution visualizer.

---

### 3. Data Structures & Modern ES6+ Operators (`Data_Structures/`)
A deep dive into JavaScript's data structures and modern language syntax introduced from ES6 (ES2015) through ES2022.

| Module | Description | Core Syntax |
| :--- | :--- | :--- |
| **`Arrays/`** | Creation via literal and constructor, zero-indexing, dynamic sizing, `.length`, and ES2022 `.at(-1)`. | `const arr = [1, 2]; arr.at(-1);` |
| **`Modifying_Arrays/`** | Mutating methods (`push`, `pop`, `shift`, `unshift`, `splice`) vs non-mutating (`slice`, `includes`). | `arr.push(x)`, `arr.splice(i, n)` |
| **`Loops_And_Arrays/`** | Forward/reverse loops, `for...of`, `array.entries()` with destructuring, `continue`, and `break`. | `for (const [i, el] of arr.entries())` |
| **`For_Of_Loop_And_Arrays/`** | Iterating over iterables (arrays, strings) with `for...of`, destructuring index-value pairs with `.entries()`. | `for (const [i, el] of arr.entries())` |
| **`Array_Destructuring/`** | Unpacking elements into variables, skipping values, swapping variables without temp variables. | `const [a, , b] = arr; [x, y] = [y, x];` |
| **`Object_Destructuring/`** | Unpacking object keys, variable renaming, default fallback values, nested unpacking, parameter destructuring. | `const { name: title = 'Default' } = obj;` |
| **`Spread_Operator/`** | Unpacking iterables on the RHS (`=`), shallow copying arrays/objects, merging, expanding function arguments. | `const copy = [...arr]; Math.max(...nums);` |
| **`Rest_Pattern/`** | Packing multiple elements on the LHS (`=`), collecting remaining items, variadic functions (`...args`). | `const [first, ...rest] = arr; fn(...args)` |
| **`Short_Circuiting/`** | Truthy & falsy values, short-circuit evaluation with `\|\|` (first truthy) and `&&` (first falsy). | `const val = input \|\| 'Fallback';` |
| **`Nullish_Coalescing/`** | ES2020 `??` operator evaluating only `null` and `undefined`, preserving valid `0`, `""`, and `false`. | `const guests = input ?? 10;` |
| **`Logical_Assignments/`** | ES2021 combined assignment operators: `\|\|=`, `??=`, and `&&=` for clean state updates. | `obj.guests ??= 10; user &&= anonymize();` |
| **`Shallow_And_Deep_Copy/`** | Primitive values (call stack) vs reference objects (heap), spread shallow copy vs `structuredClone()`. | `const deep = structuredClone(obj);` |
| **`Enhanced_Object_Literals/`** | ES6 object enhancements: property shorthand, concise method syntax, and dynamically computed property keys. | `const obj = { [key]: val, prop, method() {} };` |
| **`Optional_Chaining/`** | ES2020 `?.` operator to safely read deeply nested object properties, invoke optional methods, and access array elements. | `obj?.prop?.subprop; obj.fn?.(); arr?.[0]` |
| **`Modern_Operators/`** | Looping over object keys, values, and entries via `Object.keys()`, `Object.values()`, and `Object.entries()` with destructuring. | `for (const [key, { open, close }] of Object.entries(obj))` |
| **`Sets/`** | ES6 `Set` collection for unique values: `.add()`, `.has()`, `.delete()`, `.clear()`, array deduplication with spread, string analysis, and ES2024 Set methods (`intersection()`, `union()`, `difference()`, `symmetricDifference()`, `isDisjointFrom()`). | `const s = new Set(arr); s.union(b); s.intersection(b);` |
| **`Maps/`** | Key-value pairs allowing any data type as key (primitives, objects, arrays, DOM nodes). Chainable `.set()`, `.get()`, `.has()`, `.delete()`, `.size`, `.clear()`, conversion via `new Map(Object.entries(obj))`, and iteration. | `map.set('k', 'v').get('k'); new Map(Object.entries(obj)); [...map]` |

#### 📚 Data Structures Theory & CS Reference Guide (`Data_Structures/README.md`)
The `Data_Structures/` directory also houses an extensive, in-depth guide (980+ lines) detailing both built-in and abstract computer science data structures with JavaScript implementations:
- **Primitive & Built-in Structures**: Arrays, Objects (Hash Tables), Sets, Maps, and operational complexity tradeoffs.
- **Linear Abstract Data Types**: Stacks (LIFO), Queues (FIFO), Singly Linked Lists, and Doubly Linked Lists with pointer traversal logic.
- **Non-Linear & Hierarchical Structures**: Trees, Binary Search Trees (BST), Heaps (Min/Max Heap implementations), and Graphs (directed/undirected, weighted/unweighted) represented via Adjacency Lists and Matrices.

---

### 4. Working with Strings (`Working_with_Strings/`)
Covers string primitives, internal boxing mechanics, search algorithms, substring extraction, transformations, regular expression pattern replacement, character padding, masking, and real-world table parsing.

- **String Boxing & Indexing**: How JavaScript automatically wraps primitive strings in temporary `String` objects behind the scenes to expose methods and properties (`.length`, bracket indexing `str[0]`).
- **Searching & Substrings**: Finding indices with `.indexOf()` and `.lastIndexOf()`, plus extracting segments with `.slice()` using positive offsets, negative indices (`str.slice(-2)`), and dynamic boundaries (`airline.slice(0, airline.indexOf(' '))`). Includes seat assignment classification logic (`checkMiddleSeat`).
- **Transformations & Normalization**: Case conversion via `.toLowerCase()` and `.toUpperCase()`, multi-word capitalization routines, and sanitizing user inputs using `.trim()` for authentication workflows.
- **String Replacement & Regular Expressions**: Single-match replacements with `.replace()`, global replacement with `.replaceAll()`, and regular expressions with global flags (`/door/g`), applied to currency conversion and flight boarding announcements.
- **Boolean Guard Checks & Inspection**: Substring inspection using `.includes()`, `.startsWith()`, and `.endsWith()`, demonstrated in practical security guard routines such as baggage contraband inspection (`checkBaggage`).
- **String Splitting & Joining**: Converting between strings and arrays via `.split(delimiter)` and `.join(separator)`, array destructuring with split (`const [firstName, lastName] = str.split(' ')`), reversing words, and proper capitalization pipelines (`capitalizeName`).
- **Padding & Data Masking**: Aligning output and formatting fixed-length text with `.padStart()` and `.padEnd()`, including a real-world credit card masking algorithm (`maskCreditCard`) that hides sensitive digits except the last 4.
- **Pattern Repetition**: Repeating string sequences with `.repeat()` for visual dividers and message broadcasts.
- **Real-World Challenge: Flight Data Formatter**: Parsing unstructured, multi-delimited flight schedule strings (`Delayed_Departure;fao93766109;...`), extracting uppercase 3-letter airport codes (`getCode`), attaching status icons (`⚠`), and generating clean, right-aligned tabular console output via `.padStart()`.

---

### 5. Object-Oriented Programming (`OOP/`)
Focuses on object modeling, state encapsulation, method definition, and the `this` execution context.

- **`Objects/`**: Models a real-world entity (`backpack`) with internal state (`volume`, `color`, `lidOpen`, `strapLength`) and methods that manipulate properties using `this`. Includes template literal DOM generation to visually reflect state updates in the browser.

---

### 6. Practical Exercises (`Practical_Exercises/`)
Hands-on interactive projects, laboratory exercises, and real-world coding challenges adapted from *Head First JavaScript Programming* and *The Complete JavaScript Course*.

- **`Battleship/`**: Classic browser guessing game where the user enters cell coordinates via `prompt()` to hunt and sink a 3-cell hidden ship on a 7-cell grid.
- **`Car_Factory/`**: The "Aut-o-matic" procedural factory generating randomized cars, combined with an engine state machine managing starting, driving, fuel consumption, and stopping.
- **`Phrase_O_Matic/`**: Marketing jargon generator combining random word matrices into corporate slogans.
- **`Eight_Ball/`**: Magic Eight Ball oracle object tracking internal advice indices with both sequential cycling (modulo arithmetic) and random predictions.
- **`Song_Player/`**: Digital music track state machine tracking audio play/pause states and formatting duration strings (`m:ss`).
- **`Bottles_Of_Beer/`**: Algorithmic implementation of the 99 Bottles countdown with accurate English singular/plural grammar transitions.
- **`Bubble_Factory/`**: Industrial bubble solution test analysis finding peak scores and filtering top-performing solutions (`bubble_scores.js`), plus explicit index-counter `while` loop array iteration (`array_iteration.js`).
- **`Football_Betting/`**: Comprehensive three-part football betting application coding challenges applying modern ES6+ constructs:
  - **Challenge 1**: Player array destructuring, goalkeeper extraction with rest parameters (`[gk, ...fieldPlayers]`), squad merging with the spread operator, and conditional-free match likelihood evaluation.
  - **Challenge 2**: Real-time match event logging with ES6 `Map` (`gameEvents`), unfair event removal, average event frequency calculation, and half-time demarcation.
  - **Challenge 3**: Iteration over array entries with `game.scored.entries()`, average odds calculation across dynamic keys, formatted odd reporting using `Object.entries()`, and building a goal scoring frequency distribution object (`scorers`).
- **`Lab_Exercises/`**: Focused standalone scripts:
  - `bark_function.js`: Parameter handling and weight classification.
  - `boolean_expressions.js`: Complex truth table conditions and precedence.
  - `calculate_area.js`: Pure functions with input guard clauses.
  - `has_bubble_gum.js`: Synchronized parallel array traversal and flag matching.
  - `secret_file_manager.js`: Pass-by-reference mutation and password authentication simulation.
  - `what_shall_i_wear.js`: Temperature range classification.

---

## 🚀 How to Run the Code

All exercises are built to run both in the **Browser** and in **Node.js** (headless mode).

### Method 1: In the Browser
1. Open any topic's `index.html` file in your preferred web browser (e.g. Chrome, Firefox, Edge).
2. Right-click anywhere on the page and select **Inspect** (or press `F12`) to open the **Developer Tools**.
3. Navigate to the **Console** tab to see the logged outputs and interact with live objects.

> [!TIP]
> If using **VS Code**, install the **Live Server** extension, right-click any `index.html` file, and select **"Open with Live Server"** for hot-reloading.

### Method 2: Using Node.js (CLI)
You can run any `.js` file directly from your terminal using `node`:

```bash
# Run Control Flow exercises
node Control_Flow/Conditionals/js_conditionals.js
node Control_Flow/For_Loops/for_loops.js

# Run Functions exercises
node Functions/Functions_Intro/script.js
node Functions/Functions_Returning_Functions/script.js
node Functions/IIFE/script.js
# Note: Functions/Default_Parameters/script.js, Functions/Higher_Order_Functions/script.js,
# Functions/Function_Methods/script.js, and Functions/IIFE/index.html include interactive DOM features,
# prompts, alerts, and live terminals; open their index.html in a browser or launch with Live Server.

# Run Data Structures & Modern Operators
node Data_Structures/Arrays/arrays.js
node Data_Structures/Spread_Operator/spread_operator.js
node Data_Structures/Nullish_Coalescing/nullish_coalescing.js
node Data_Structures/Logical_Assignments/logical_assignments.js
node Data_Structures/Shallow_And_Deep_Copy/script.js
node Data_Structures/For_Of_Loop_And_Arrays/script.js
node Data_Structures/Enhanced_Object_Literals/script.js
node Data_Structures/Optional_Chaining/script.js
node Data_Structures/Modern_Operators/script.js
node Data_Structures/Sets/script.js
# Note: Data_Structures/Maps/index.html demonstrates DOM node keys; open in browser or view with Live Server

# Run String Manipulation exercises & Flight Data Formatter
node Working_with_Strings/script.js

# Run Practical Exercises
node Practical_Exercises/Car_Factory/aut_o_matic.js
node Practical_Exercises/Bubble_Factory/bubble_scores.js
node Practical_Exercises/Bubble_Factory/array_iteration.js
node Practical_Exercises/Football_Betting/script.js
node Practical_Exercises/Lab_Exercises/secret_file_manager.js
```

---

## 🎓 Recommended Learning Progression

For the best conceptual build-up, follow this sequential path:

```text
1. Control Flow & Operators     ──> Conditionals ➔ Compound Conditionals ➔ For Loops ➔ While Loops
2. Functions & Execution Model  ──> Declarations & Expressions ➔ Arrow Functions ➔ Default Parameters ➔ First-Class & Higher-Order ➔ Closures & Currying ➔ call, apply, bind ➔ IIFE & Module Pattern
3. Fundamental Data Structures  ──> Arrays ➔ Modifying Arrays ➔ Loops & Arrays ➔ Objects ➔ CS Guide (Stacks, Queues, Lists, Trees)
4. Modern ES6+ Operators        ──> Destructuring (Array/Object) ➔ Spread ➔ Rest ➔ Short-Circuiting ➔ Nullish Coalescing ➔ Logical Assignment
5. Advanced ES6+ Collections    ──> For...of Iteration ➔ Enhanced Object Literals ➔ Optional Chaining ➔ Object Iteration ➔ Sets & Maps
6. Strings & Text Processing    ──> Boxing & Indexing ➔ Slicing & Searching ➔ Casing & Trimming ➔ Regex & ReplaceAll ➔ Split & Join ➔ Padding & Masking ➔ Flight Data Formatter
7. Memory Model & OOP           ──> Pass-by-Value vs. Pass-by-Reference (Call Stack vs Heap) ➔ Object-Oriented Methods & `this` Context
8. Practical Application        ──> Battleship ➔ Car Factory ➔ Bubble Factory ➔ Football Betting Challenges ➔ Interactive Poll App & IIFE Dashboard
```

---

## 📝 License & Attribution

This project is maintained for educational and training purposes. Code examples draw inspiration from *The Complete JavaScript Course* by Jonas Schmedtmann and *Head First JavaScript Programming* by Eric Freeman & Elisabeth Robson.
