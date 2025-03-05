document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    const taskHeading = document.getElementById("taskHeading");

    function updateHeadingVisibility() {
        taskHeading.style.display = taskList.children.length > 0 ? "block" : "none";
        updateTaskNumbers();
    }

    function updateTaskNumbers() {
        Array.from(taskList.children).forEach((item, index) => {
            item.firstChild.textContent = `${index + 1}. ${item.dataset.taskText}`;
        });
    }

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.classList.add("task-item");
        listItem.dataset.taskText = taskText;
        listItem.textContent = `${taskList.children.length + 1}. ${taskText}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Task";
        removeButton.classList.add("remove-btn");
        removeButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
            updateHeadingVisibility();
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        taskInput.value = "";
        updateHeadingVisibility();
    });

    updateHeadingVisibility();
});
