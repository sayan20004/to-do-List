const inputField = document.querySelector("#input");
const addTask = document.querySelector("#add");
const tasks = document.querySelector("#list");
const clearTask = document.querySelector("#clear");




function addingTask(){
    const givenInput = inputField.value;
    const newItem = document.createElement('li');
    const removeButton = document.createElement('button');
    newItem.innerHTML = `${givenInput}<button id="remove" style="width: 6vw;height: 6vh;background-color: rgba(226, 226, 226, 0.989);border: none;
    cursor: pointer;
    font-size: 1.5vw;
    border-radius: 5px;
    font-weight: 600;position:absolute;right:50px;">remove</button>`
    list.appendChild(newItem);
}
addTask.addEventListener("click", function(){
    // const givenInput = .trim();
    if (inputField.value !== "") {
        // If not empty, add the task
        addingTask();
        // Clear the input field after adding the task
        inputField.value = "";
    } else {
        // If empty, display a message or take appropriate action
        alert("Please enter a task before adding.");
    }
})

// Select the parent container to delegate event handling
tasks.addEventListener('click', function(event) {
    // Check if the clicked element is a remove button
    if (event.target && event.target.id === 'remove') {
        // Remove the parent li element of the clicked button
        event.target.parentElement.remove();
    }
});

// Add event listener to the clear button
clearTask.addEventListener('click', function() {
    // Remove all child elements of the tasks container
    tasks.innerHTML = '';
});
