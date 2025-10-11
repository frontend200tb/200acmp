import showAcmp from '../../acmp/tasks/tasks';

const dataHeaderNav = [
  {
    url: '/acmp.html',
    text: 'acmp',
    content: '<acmp-tasks></acmp-tasks>',
    act() {
      showAcmp();
    },
  },
];

export default dataHeaderNav;
