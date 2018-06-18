import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first} {this.last}

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quas ipsa, at voluptatum non quod corrupti assumenda omnis repellat minima. Molestias doloribus ea exercitationem ab incidunt, quas sint excepturi, ad impedit quae aliquid assumenda blanditiis deserunt enim, harum dicta eligendi!
        </p>
      </div>
    );
  }
}
