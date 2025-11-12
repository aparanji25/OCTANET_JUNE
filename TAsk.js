document.querySelector("#addBtn").onclick = function () {
  const taskInput = document.querySelector("#taskInput");
  const category = document.querySelector("#category").value;
  const taskValue = taskInput.value.trim();

  if (taskValue.length === 0) {
    alert("Please enter a task!");
    return;
  }

  const tasksContainer = document.querySelector("#tasksContainer");

  // Create task div
  const task = document.createElement("div");
  task.classList.add("task");

  task.innerHTML = `
    <input type="checkbox" class="checkTask">
    <span class="categoryTag">${category}</span>
    <span class="taskText">${taskValue}</span>
    <div class="actions">
        <button class="edit">Edit</button>
        <button class="save" style="display:none;">Save</button>
        <button class="delete">Delete</button>
    </div>
  `;

  tasksContainer.appendChild(task);
  taskInput.value = "";

  const deleteBtn = task.querySelector(".delete");
  const editBtn = task.querySelector(".edit");
  const saveBtn = task.querySelector(".save");
  const checkBox = task.querySelector(".checkTask");
  const taskText = task.querySelector(".taskText");

  // ✅ Delete Function
  deleteBtn.onclick = () => task.remove();

  // ✏️ Edit Function
  editBtn.onclick = function () {
    const currentText = taskText.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    task.replaceChild(input, taskText);
    editBtn.style.display = "none";
    saveBtn.style.display = "inline-block";

    saveBtn.onclick = function () {
      const updatedText = input.value.trim();
      if (updatedText.length === 0) {
        alert("Task cannot be empty!");
        return;
      }
      const newSpan = document.createElement("span");
      newSpan.classList.add("taskText");
      newSpan.textContent = updatedText;
      task.replaceChild(newSpan, input);
      editBtn.style.display = "inline-block";
      saveBtn.style.display = "none";
    };
  };

  // ✅ Checkbox (Mark as Done)
  checkBox.onclick = function () {
    const doneContainer = document.querySelector("#doneContainer");
    if (checkBox.checked) {
      task.classList.add("completed");
      doneContainer.appendChild(task);
    } else {
      task.classList.remove("completed");
      tasksContainer.appendChild(task);
    }
  };
};
