import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';

export class ContainedButton extends LitElement {
  static styles = css`
    .contained {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px 20px;
      border-radius: 8px;
      outline: auto;
      cursor: pointer;
      background: var(--contained-button-background-color, #624C92);
      color: var(--contained-button-text-color, white);
    }

    .contained:hover {
      background: var(--contained-button-hover-color, black);
    }

    .contained:disabled {
      background: #F5F5F5;
      color: #9E9E9E;
      cursor: auto;
    }
  `;

  @property({ type: String }) text = 'Hey there';

  @property({ type: Boolean }) disabled = false;

  @property({ type: Number }) counter = 5;

  @property()
  classes = { contained: true };

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <button ?disabled=${this.disabled} class=${classMap(this.classes)}  @click=${this.__increment}>${this.text}</button>
    `;
  }
}
