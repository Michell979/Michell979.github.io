import "./regSw.js";
import "/lib/movil.js";
import "/lib/campo-dinamico.js";
class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<a href="index.html">
        <span
          class="material-icons">
          home
        </span>
        Inicio
      </a>
      <a href="index2.html">
        <span
          class="material-icons">
		  help
          fact_check
        </span>
      lock 
      </a>`;
  }
}
customElements.define(
  "mi-nav", MiNav);