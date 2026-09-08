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
├── Functions/                          # Function declarations, expressions, arrow functions, composition
│   ├── index.html                      # HTML test runner
│   └── js_functions.js                 # Complete function paradigms and multi-tier oven controller
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
│   ├── Sets/                           # ES6 Set collection: uniqueness, operations, and deduplication
│   └── README.md                       # Comprehensive guide: primitive & non-primitive data structures
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
| **`Compound_Conditionals/`** | Logical AND (`&&`), OR (`||`), NOT (`!`), operator precedence, double-negation (`!!`) | `compound_conditionals.js`, `index.html` |
| **`For_Loops/`** | Loop initialization, condition, increment/decrement, nested loops, multiplication table | `for_loops.js`, `index.html` |
| **`While_Loops/`** | `while` loop condition evaluation, avoiding infinite loops, random events, `do...while` | `while_loops.js`, `index.html` |

---

### 2. Functions (`Functions/`)
Covers the three ways to declare functions in JavaScript, parameter handling, return statements, and calling functions within functions.

- **Function Declarations**: Hoisted functions that can be called before their definition line.
- **Function Expressions**: Anonymous functions stored in variables (not hoisted).
- **Arrow Functions (ES6)**: Concise syntax with implicit returns and lexical `this` binding.
- **Function Composition**: Demonstrates modular decomposition where high-level functions (`bake`) orchestrate low-level hardware controllers (`setOvenMode`, `setOvenTemperature`).

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
| **`Short_Circuiting/`** | Truthy & falsy values, short-circuit evaluation with `||` (first truthy) and `&&` (first falsy). | `const val = input \|\| 'Fallback';` |
| **`Nullish_Coalescing/`** | ES2020 `??` operator evaluating only `null` and `undefined`, preserving valid `0`, `""`, and `false`. | `const guests = input ?? 10;` |
| **`Logical_Assignments/`** | ES2021 combined assignment operators: `\|\|=`, `??=`, and `&&=` for clean state updates. | `obj.guests ??= 10; user &&= anonymize();` |
| **`Shallow_And_Deep_Copy/`** | Primitive values (call stack) vs reference objects (heap), spread shallow copy vs `structuredClone()`. | `const deep = structuredClone(obj);` |
| **`Enhanced_Object_Literals/`** | ES6 object enhancements: property shorthand, concise method syntax, and dynamically computed property keys. | `const obj = { [key]: val, prop, method() {} };` |
| **`Optional_Chaining/`** | ES2020 `?.` operator to safely read deeply nested object properties, invoke optional methods, and access array elements. | `obj?.prop?.subprop; obj.fn?.(); arr?.[0]` |
| **`Modern_Operators/`** | Looping over object keys, values, and entries via `Object.keys()`, `Object.values()`, and `Object.entries()` with destructuring. | `for (const [key, { open, close }] of Object.entries(obj))` |
| **`Sets/`** | ES6 `Set` collection for unique values: `.add()`, `.has()`, `.delete()`, `.clear()`, array deduplication with spread, and string analysis. | `const s = new Set(arr); [...new Set(arr)]` |

#### 📚 Data Structures Theory & CS Reference Guide (`Data_Structures/README.md`)
The `Data_Structures/` directory also houses an extensive, in-depth guide (980+ lines) detailing both built-in and abstract computer science data structures with JavaScript implementations:
- **Primitive & Built-in Structures**: Arrays, Objects (Hash Tables), Sets, Maps, and operational complexity tradeoffs.
- **Linear Abstract Data Types**: Stacks (LIFO), Queues (FIFO), Singly Linked Lists, and Doubly Linked Lists with pointer traversal logic.
- **Non-Linear & Hierarchical Structures**: Trees, Binary Search Trees (BST), Heaps (Min/Max Heap implementations), and Graphs (directed/undirected, weighted/unweighted) represented via Adjacency Lists and Matrices.

---

### 4. Object-Oriented Programming (`OOP/`)
Focuses on object modeling, state encapsulation, method definition, and the `this` execution context.

- **`Objects/`**: Models a real-world entity (`backpack`) with internal state (`volume`, `color`, `lidOpen`, `strapLength`) and methods that manipulate properties using `this`. Includes template literal DOM generation to visually reflect state updates in the browser.

---

### 5. Practical Exercises (`Practical_Exercises/`)
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
2. Functions                    ──> Declarations ➔ Expressions ➔ Arrow Functions ➔ Function Composition
3. Fundamental Data Structures  ──> Arrays ➔ Modifying Arrays ➔ Loops & Arrays ➔ Objects ➔ CS Guide (Stacks, Queues, Lists, Trees)
4. Modern ES6+ Operators        ──> Destructuring (Array/Object) ➔ Spread ➔ Rest ➔ Short-Circuiting ➔ Nullish Coalescing ➔ Logical Assignment
5. Advanced ES6+ Features       ──> For...of Iteration ➔ Enhanced Object Literals ➔ Optional Chaining ➔ Object Entries/Keys/Values ➔ Sets
6. Memory Model & OOP           ──> Shallow vs. Deep Copy (Call Stack vs Heap) ➔ Object-Oriented Methods & `this` Context
7. Practical Application        ──> Battleship ➔ Car Factory ➔ Bubble Factory ➔ Football Betting Challenges
```

---

## 📝 License & Attribution

This project is maintained for educational and training purposes. Code examples draw inspiration from *The Complete JavaScript Course* by Jonas Schmedtmann and *Head First JavaScript Programming* by Eric Freeman & Elisabeth Robson.
