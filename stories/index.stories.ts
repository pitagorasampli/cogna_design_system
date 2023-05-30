import { html, TemplateResult } from 'lit';
import '../src/contained-button.js';
import '../src/OutlinedButton.js';
import '../src/TextButton.js';

export default {
  title: 'buttons',
  component: 'contained-button',
  argTypes: {
    text: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  text?: string;
}

const ContainedA: Story<ArgTypes> = ({
  text = 'Button',
}: ArgTypes) => html`
  <div style='display: flex; justify-content: space-around'>
    <div>
      <h1>CONTAINED BUTTON</h1>
      <contained-button
        style=" --contained-button-background-color: #002871;
          --contained-button-text-color: white;
          --outlined-button-border: 1px solid rgba(0, 40, 113, 0.5);
          --outlined-button-text-color: #002871;
          --text-button-text-color: #002871;
          --text-button-hover-color: rgba(0, 40, 113, 0.08);
          --contained-button-hover-color: #001F50;
          --outlined-button-hover-color: rgba(0, 40, 113, 0.08);"
        .text=${text}
      >
      </contained-button>
      <contained-button
        style=" --contained-button-background-color: #002871;
          --contained-button-text-color: white;
          --outlined-button-border: 1px solid rgba(0, 40, 113, 0.5);
          --outlined-button-text-color: #002871;
          --text-button-text-color: #002871;
          --text-button-hover-color: rgba(0, 40, 113, 0.08);
          --contained-button-hover-color: #001F50;
          --outlined-button-hover-color: rgba(0, 40, 113, 0.08);"
        .text=${text}
        disabled
      >
      </contained-button>
    </div>
    <div>
      <h1>TEXT BUTTON</h1>
      <text-button
          style=" --contained-button-background-color: #002871;
          --contained-button-text-color: white;
          --outlined-button-border: 1px solid rgba(0, 40, 113, 0.5);
          --outlined-button-text-color: #002871;
          --text-button-text-color: #002871;
          --text-button-hover-color: rgba(0, 40, 113, 0.08);
          --contained-button-hover-color: #001F50;
          --outlined-button-hover-color: rgba(0, 40, 113, 0.08);" .text=${text}></text-button>
      <text-button
          style=" --contained-button-background-color: #002871;
          --contained-button-text-color: white;
          --outlined-button-border: 1px solid rgba(0, 40, 113, 0.5);
          --outlined-button-text-color: #002871;
          --text-button-text-color: #002871;
          --text-button-hover-color: rgba(0, 40, 113, 0.08);
          --contained-button-hover-color: #001F50;
          --outlined-button-hover-color: rgba(0, 40, 113, 0.08);" disabled .text=${text}></text-button>
    </div>
    <div>
      <h1>OUTLINED BUTTON</h1>
      <outlined-button
        style=" --contained-button-background-color: #002871;
          --contained-button-text-color: white;
          --outlined-button-border: 1px solid rgba(0, 40, 113, 0.5);
          --outlined-button-text-color: #002871;
          --text-button-text-color: #002871;
          --text-button-hover-color: rgba(0, 40, 113, 0.08);
          --contained-button-hover-color: #001F50;
          --outlined-button-hover-color: rgba(0, 40, 113, 0.08);" .text=${text}></outlined-button>
      <outlined-button
        style=" --contained-button-background-color: #002871;
          --contained-button-text-color: white;
          --outlined-button-border: 1px solid rgba(0, 40, 113, 0.5);
          --outlined-button-text-color: #002871;
          --text-button-text-color: #002871;
          --text-button-hover-color: rgba(0, 40, 113, 0.08);
          --contained-button-hover-color: #001F50;
          --outlined-button-hover-color: rgba(0, 40, 113, 0.08);" disabled .text=${text}></outlined-button>
    </div>
  </div>
`;

const ContainedB: Story<ArgTypes> = ({text = 'Button'}: ArgTypes) => html`
  <div style='display: flex; justify-content: space-around'>
    <div>
      <h1>CONTAINED BUTTON</h1>
      <contained-button
        style=" --contained-button-background-color: #624C92;
      --contained-button-text-color: white;
      --outlined-button-border: 1px solid rgba(98, 76, 146, 0.5);
      --outlined-button-text-color: #624C92;
      --text-button-text-color: #624C92;
      --text-button-hover-color: rgba(98, 76, 146, 0.12);
      --contained-button-hover-color: #4E3C74;
      --outlined-button-hover-color: rgba(98, 76, 146, 0.12);"
        .text=${text}
      >
      </contained-button>
      <contained-button
        style=" --contained-button-background-color: #624C92;
      --contained-button-text-color: white;
      --outlined-button-border: 1px solid rgba(98, 76, 146, 0.5);
      --outlined-button-text-color: #624C92;
      --text-button-text-color: #624C92;
      --text-button-hover-color: rgba(98, 76, 146, 0.12);
      --contained-button-hover-color: #4E3C74;
      --outlined-button-hover-color: rgba(98, 76, 146, 0.12);"
        .text=${text}
        disabled
      >
      </contained-button>
    </div>
    <div>
      <h1>TEXT BUTTON</h1>
      <text-button
          style=" --contained-button-background-color: #624C92;
        --contained-button-text-color: white;
        --outlined-button-border: 1px solid rgba(98, 76, 146, 0.5);
        --outlined-button-text-color: #624C92;
        --text-button-text-color: #624C92;
        --text-button-hover-color: rgba(98, 76, 146, 0.12);
        --contained-button-hover-color: #4E3C74;
        --outlined-button-hover-color: rgba(98, 76, 146, 0.12);" .text=${text}></text-button>
      <text-button
          style=" --contained-button-background-color: #624C92;
        --contained-button-text-color: white;
        --outlined-button-border: 1px solid rgba(98, 76, 146, 0.5);
        --outlined-button-text-color: #624C92;
        --text-button-text-color: #624C92;
        --text-button-hover-color: rgba(98, 76, 146, 0.12);
        --contained-button-hover-color: #4E3C74;
        --outlined-button-hover-color: rgba(98, 76, 146, 0.12);" disabled .text=${text}></text-button>
    </div>
    <div>
      <h1>OUTLINED BUTTON</h1>
      <outlined-button
        style=" --contained-button-background-color: #624C92;
        --contained-button-text-color: white;
        --outlined-button-border: 1px solid rgba(98, 76, 146, 0.5);
        --outlined-button-text-color: #624C92;
        --text-button-text-color: #624C92;
        --text-button-hover-color: rgba(98, 76, 146, 0.12);
        --contained-button-hover-color: #4E3C74;
        --outlined-button-hover-color: rgba(98, 76, 146, 0.12);" .text=${text}></outlined-button>
      <outlined-button
        style=" --contained-button-background-color: #624C92;
        --contained-button-text-color: white;
        --outlined-button-border: 1px solid rgba(98, 76, 146, 0.5);
        --outlined-button-text-color: #624C92;
        --text-button-text-color: #624C92;
        --text-button-hover-color: rgba(98, 76, 146, 0.12);
        --contained-button-hover-color: #4E3C74;
        --outlined-button-hover-color: rgba(98, 76, 146, 0.12);" disabled .text=${text}></outlined-button>
    </div>
  </div>
`;

export const BrandA = ContainedA.bind({});

export const BrandB = ContainedB.bind({});
BrandB.args = {
};

