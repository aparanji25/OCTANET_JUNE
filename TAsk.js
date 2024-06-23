document.querySelector('#push').onclick = function() {
    const taskInput = document.querySelector('#newtask input');
    const taskValue = taskInput.value.trim();

    if (taskValue.length == 0) {
        alert("Enter Task");
    } else {
        const taskContainer = document.querySelector('#tasks');
        const taskHTML = `
            <div class="task">
                <span id="taskname">${taskValue}</span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;
        taskContainer.innerHTML += taskHTML;

        // Clear the input field after adding the task
        taskInput.value = '';

        const currentTasks = document.querySelectorAll(".delete");
        currentTasks.forEach(task => {
            task.onclick = function() {
                this.parentNode.remove();
            };
        });
    }
};
