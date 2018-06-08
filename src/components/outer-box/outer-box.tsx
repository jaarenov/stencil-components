import { Component } from '@stencil/core';

@Component({
  tag: 'outer-box',
  styleUrl: 'outer-box.css',
  shadow: true
})
export class OuterBox {

  render() {
    return (
      <div>
        Hello, World! I'm the man
      </div>
    );
  }
}
