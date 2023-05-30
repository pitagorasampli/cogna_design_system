import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

export class OutlinedButton extends LitElement {
  static styles = css`
    .outlined {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px 20px;
      border-radius: 8px;
      outline: none;
      cursor: pointer;
      background: white;
      border: var(--outlined-button-border);
      color: var(--outlined-button-text-color, white);
    }

    .outlined:hover {
      background: var(--outlined-button-hover-color, black);
    }

    .outlined:disabled {
      color: #9E9E9E;
      background: white;
      cursor: auto;
    }
  `;

  @property({ type: String }) text = 'Hey there';

  @property({ type: Boolean }) disabled = false;

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  @property()
  classes = { outlined: true };

  render() {
    return html`
      <button ?disabled=${this.disabled} class=${classMap(this.classes)} @click=${this.__increment}>${this.text}</button>
    `;
  }
}
window.customElements.define('outlined-button', OutlinedButton);
