import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

export class TextButton extends LitElement {
  static styles = css`
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px 20px;
      border-radius: 12px;
      border: none;
      outline: none;
      cursor: pointer;
      background: white;
      color: var(--text-button-text-color, black);
    }

    .text:hover {
      background: var(--text-button-hover-color, black);
    }
    .text:disabled {
      color: #9E9E9E;
      cursor: auto;
      background: white;
    }
  `;

  @property({ type: String }) text = 'Hey there';

  @property({ type: Boolean }) disabled = false;

  @property({ type: Number }) counter = 5;

  @property()
  classes = { text: true };

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <button ?disabled=${this.disabled} class=${classMap(this.classes)} @click=${this.__increment}>${this.text}</button>
    `;
  }
}
window.customElements.define('text-button', TextButton);
