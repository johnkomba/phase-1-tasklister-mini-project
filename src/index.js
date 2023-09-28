document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById('new-task-description').value;
    const priority = document.getElementById('priority').value;

    if (taskDescription) {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;
      taskItem.dataset.priority = priority;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        taskItem.remove();
      });

      taskItem.appendChild(deleteButton);

      taskList.appendChild(taskItem);

      document.getElementById('new-task-description').value = '';
    }
  });

  document.addEventListener('click', function(event) {
    if (event.target && event.target.matches('li')) {
      const taskItem = event.target;
      const priority = taskItem.dataset.priority;

      switch(priority) {
        case 'high':
          taskItem.style.color = 'red';
          break;
        case 'medium':
          taskItem.style.color = 'yellow';
          break;
        case 'low':
          taskItem.style.color = 'green';
          break;
      }
    }
  });

  const sortButton = document.createElement('button');
  sortButton.textContent = 'Sort Tasks';
  sortButton.addEventListener('click', function() {
    const taskItems = Array.from(taskList.children);

    taskItems.sort(function(a, b) {
      return a.dataset.priority.localeCompare(b.dataset.priority);
    });

    taskItems.forEach(function(taskItem) {
      taskList.appendChild(taskItem);
    });
  });

  document.getElementById('main-content').appendChild(sortButton);
});
