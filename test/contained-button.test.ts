import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { ContainedButton } from '../src/ContainedButton.js';
import '../src/contained-button.js';

describe('ContainedButton', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<ContainedButton>(html`<contained-button></contained-button>`);

    expect(el.text).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<ContainedButton>(html`<contained-button></contained-button>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<ContainedButton>(html`<contained-button header="attribute header"></contained-button>`);

    expect(el.text).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<ContainedButton>(html`<contained-button></contained-button>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
