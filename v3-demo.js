import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `v3-demo`
 * v3 demo
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class V3Demo extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'v3-demo',
      },
    };
  }
}

window.customElements.define('v3-demo', V3Demo);
