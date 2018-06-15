import { Component } from '@stencil/core';

@Component({
  tag: 'modal',
  styleUrl: 'modal.scss',
  scoped: true
})
export class MyModal {

  render() {
    return (
      <div class="my-modal">
        Hello, World! I'm the man
      </div>
    );
  }
}
