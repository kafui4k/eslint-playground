var foo = 'bard';

foo;

const Task = function(title, desc, dueDate) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;

  return {
    hello: () => {
      this.title;
    }
  };

};

const newTask = new Task('test title', 'a description', 'today');
newTask.hello;
