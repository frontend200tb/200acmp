class AcmpTasks extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="main__aside">
    </section>
    `;
    this.className = 'acmp-tasks';
  }
}

customElements.define('acmp-tasks', AcmpTasks);
