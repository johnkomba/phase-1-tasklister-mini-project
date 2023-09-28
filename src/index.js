document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById('new-task-description').value;

    if (taskDescription) {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;

      taskList.appendChild(taskItem);

      document.getElementById('new-task-description').value = '';
    }
  });
});
