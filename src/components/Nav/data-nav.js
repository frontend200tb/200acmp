import showTasks      from '../acmp/tasks/tasks';

export const dataNavAcmp = [
  {
    url: 'tasks.html',
    text: 'Задачи',
    content: '<acmp-tasks></acmp-tasks>',
    act() {
      showTasks();
    },
  },
];
