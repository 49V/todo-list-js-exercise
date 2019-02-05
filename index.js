// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
  
      // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    markCompleted : function () {
      this.complete = true;
    },

    // Print the state of a task to the console in a nice readable way
    logState : function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "TAKE SHIT OUT");
const task2 = newTask("DO LAUNDRY", "LAUNDERED");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();
