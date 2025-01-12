// Choose and element to target and observe
const targetNode = document.getElementById('observable');

// MutationObserver Configuration

// Toggle true/false:

// childList: Observes direct child nodes
// attributes: Observes changes to attributes
// subtree: Observes all descendants
// characterData: Observes changes to text nodes

const config = {
  childList: true,
  attributes: true,
  subtree: true,
  characterData: true
};

// Mutation log target node
const activityLog = document.getElementById('log');

// Update the mutation log
const logChange = (message) => {
  const logItem = document.createElement('li');
  logItem.textContent = message;
  activityLog.appendChild(logItem);

  // Show the latest log
  activityLog.scrollTop = activityLog.scrollHeight;
};

// Callback function that triggers when mutation is observed
const mutationCallbackFunc = (mutationsList, observer) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      logChange(
        `ChildList Mutated: ${mutation.addedNodes.length} added, ${mutation.removedNodes.length} removed.`
      );
    } else if (mutation.type === 'attributes') {
      logChange(`Attribute Mutated: ${mutation.attributeName} modified.`);
    } else if (mutation.type === 'characterData') {
      logChange(`Text was Mutated: "${mutation.target.textContent}"`);
    }
  }
};

// Makes an "Observable" instance
const observer = new MutationObserver(mutationCallbackFunc);

// Start the Observer
observer.observe(targetNode, config);

// Save the initial state
const initialContent = Array.from(targetNode.childNodes);

// Button EventListeners to trigger changes
document.getElementById('addElement').addEventListener('click', () => {
  const newElement = document.createElement('p');
  newElement.textContent = 'Some text was added!';
  targetNode.appendChild(newElement);
});

document.getElementById('changeText').addEventListener('click', () => {
  if (targetNode.firstChild) {
    targetNode.firstChild.textContent = 'The text has been changed!';
  } else {
    logChange('No text was found...');
  }
});

// Reset mutation demo
document.getElementById('resetBtn').addEventListener('click', () => {
  while (targetNode.firstChild) {
    targetNode.removeChild(targetNode.firstChild);
  }

  initialContent.forEach((node) => {
    targetNode.appendChild(node.cloneNode(true));
  });
});

// Add and remove attributes

// Add color
document.getElementById('addColor').addEventListener('click', () => {
  targetNode.classList.add('colored');
  logChange('Mutated the color!');
});

// Remove color
document.getElementById('removeColor').addEventListener('click', () => {
  targetNode.classList.remove('colored');
  logChange('Mutated the color back.');
});

// Start animation
document.getElementById('startAnimation').addEventListener('click', () => {
  targetNode.classList.add('animated');
  logChange('Animation started!');
});

// Stop animation
document.getElementById('stopAnimation').addEventListener('click', () => {
  targetNode.classList.remove('animated');
  logChange('Animation stopped.');
});

// Reset log
document.getElementById('resetLogBtn').addEventListener('click', () => {
  activityLog.replaceChildren();
});
