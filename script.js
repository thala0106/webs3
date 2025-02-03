const validTasks = [
    "walking", "sleeping", "exercising", "reading", "cooking", "cleaning", "studying", "working", "meditating", "jogging","eating"
];

document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim().toLowerCase();
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous error message
    errorMessage.textContent = '';

    if (taskText) {
        if (validTasks.includes(taskText)) {
            const li = document.createElement('li');
            li.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                li.remove();
            });

            li.appendChild(deleteButton);
            document.getElementById('taskList').appendChild(li);
            taskInput.value = '';
        } else {
            errorMessage.textContent = 'Please enter a valid task (e.g., walking, sleeping).';
        }
    } else {
        errorMessage.textContent = 'Task cannot be empty.';
    }
});