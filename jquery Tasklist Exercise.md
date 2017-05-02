#jQuery Task List Exercise

In this exercise we are going to create a simple task list using jQuery. To get started on the codepen, click [here](http://codepen.io/jtklier/pen/vmZYNP).

##Goal 1
 Write the logic inside of the click function for the “appendButton” to satisfy the following conditions:

**IF** there is any text in the input field, use jQuery to create a new list item element and set its text to the value in the input field. Set the class attribute of the newly created element to “list-item”, and append the element to the list with an id of “taskList”.
**IF** there is **no** text in the input field, use window.alert() to display the following message : `“Please type a task into the input before attempting to add it to the list.”`

#Goal 2
Inside of the “add to list” click function - after creating/appending the new list item to the list, also create a button using jQuery with the text “Mark Complete” and append it to the newly created list item. Add a click handler to this button that will add the class “.complete” to the list element, and remove the button itself once clicked. Hint: use ‘$(this).parent()’ to directly access the parent element of the button being clicked. Hint: use the .remove() function on a jQuery element to remove it from the page. Ex: `$(‘.someClass’).remove();`

#Goal 3
In your HTML, add a button next to the “Add to list” button that says “Remove Completed Tasks” and has an ID of “removeComplete”

add a clickhandler to your 'Remove Completed Tasks' button that will delete all list items in the task list with the class '.complete’.
