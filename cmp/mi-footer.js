class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Medina Andrade Pamela Michell.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);