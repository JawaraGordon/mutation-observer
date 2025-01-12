# Mutation Observer

Welcome to **Mutation Observer**, a fun way to learn how DOM changes can be observed and logged in real time! This interactive app allows you to explore the JavaScript `MutationObserver` API with buttons that mutate text, colors, and animations.

---

## Overview

**Mutation Observer** is a browser-based app designed to:

- **Track changes** in a target HTML element (`#observable`), such as:
  - Added or removed child elements.
  - Text updates.
  - Attribute modifications.
- **Log all changes** dynamically to an activity log.
- **Interact with attributes**, like adding/removing color or animations, to showcase how the DOM responds in real time.
- **Toggle Observation** dynamically to start and stop monitoring the DOM.

If you want to learn how browsers can "observe" DOM changes and take action, this app is your perfect hands-on experience!

---

## How It Works

1. **Target Element**: The app monitors the `<div id="observable">` section for changes.
2. **Mutation Observer**: The `MutationObserver` API tracks:
   - New or removed child elements.
   - Text content changes.
   - Attribute updates like `class` or `style`.
3. **User Actions**: Buttons allow you to trigger DOM mutations.
4. **Toggle Observation**: A button lets you start and stop the observer dynamically.
5. **Real-Time Logging**: All mutations are logged in a scrollable "Mutation Log" for you to see the magic unfold!

---

## How to Use

1. Clone or download the project files.
2. Open `index.html` in your favorite browser.
3. Start interacting with the buttons!

---

## Features

1. **Add Elements**

   - Adds a new paragraph inside the observable area.
   - Logs the action in real time.

2. **Change Text**

   - Updates the text of the first child in the observable area.
   - Demonstrates character data mutation.

3. **Add/Remove Color**

   - Applies or removes a green background color (`colored` class) from the observable area.
   - Logs attribute changes.

4. **Start/Stop Animation**

   - Adds or removes a pulsing animation effect (`animated` class) to/from the observable area.
   - Perfect for showcasing dynamic styling!

5. **Reset Area**

   - Clears all child elements and restores the original content of the observable area.
   - A great way to start fresh.

6. **Reset Log**

   - Clears the mutation log to declutter your screen.

7. **Toggle Observation**

   - Starts and stops the `MutationObserver` dynamically.
   - Logs whether observation is active or stopped.

---

## Instructions for Developers

### Project Structure

- `index.html`: The main HTML file with the app structure.
- `style.css`: Handles styling, animations, and layout.
- `script.js`: Contains the JavaScript logic for the `MutationObserver` and button event handlers.

---

## Key JavaScript Concepts

### MutationObserver

- An API that observes and reacts to DOM changes.

### Configuration Options

```javascript
// childList: Observes direct child nodes
// attributes: Observes changes to attributes
// subtree: Observes all descendants
// characterData: Observes changes to text nodes
// attributeOldValue: Captures old attribute values
// characterDataOldValue: Captures old text content
// attributeFilter: Observes changes to specific attributes

const config = {
  childList: true,
  attributes: true,
  subtree: true,
  characterData: true
  //   Not used with this demo:
  //   attributeOldValue: true,
  //   characterDataOldValue: true,
  //   attributeFilter: ['class', 'id']
};
```

Observer Initialization

```javascript
const observer = new MutationObserver(mutationCallbackFunc);
observer.observe(targetNode, config);

Callback Function

This function processes mutations and logs them in real time:

const mutationCallbackFunc = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      logChange(`ChildList Mutated: ${mutation.addedNodes.length} added, ${mutation.removedNodes.length} removed.`);
    } else if (mutation.type === 'attributes') {
      logChange(`Attribute Mutated: ${mutation.attributeName} modified.`);
    } else if (mutation.type === 'characterData') {
      logChange(`Text was Mutated: "${mutation.target.textContent}"`);
    }
  }
};
```

Toggle Observation

This feature allows you to dynamically start and stop the observer:

```javascript
let isObserving = true;

document.getElementById('toggleObserving').addEventListener('click', () => {
  if (isObserving) {
    observer.disconnect();
    logChange('Observation stopped.');
  } else {
    observer.observe(targetNode, config);
    logChange('Observation started.');
  }
  isObserving = !isObserving;
});
```

License

This demo is free to use for educational and fun purposes!

This project is licensed under the MIT License. See the LICENSE file for details.
