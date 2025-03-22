// script.js

// Change Text Content
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('myDiv').textContent = 'Text Changed!';
});

// Change CSS Styles
document.getElementById('changeStyleButton').addEventListener('click', function() {
    const div = document.getElementById('myDiv');
    div.style.backgroundColor = 'lightgreen';
    div.style.color = 'white';
});

// Add Element
document.getElementById('addElementButton').addEventListener('click', function() {
    const newListItem = document.createElement('li');
    newListItem.textContent = 'New Item';
    document.getElementById('myList').appendChild(newListItem);
});

// Remove Element
document.getElementById('removeElementButton').addEventListener('click', function() {
    const list = document.getElementById('myList');
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
    }
});

// Example of changing other content.
document.getElementById('myParagraph').textContent = "The Paragraph text has also been changed.";