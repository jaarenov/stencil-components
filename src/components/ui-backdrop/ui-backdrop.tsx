import { Component } from '@stencil/core';

@Component({
  tag: 'ui-backdrop',
  styleUrl: 'ui-backdrop.scss',
  shadow: true
})
export class UiBackdrop {

  render() {
    return (
      <div class="ui-backdrop"></div>
    );
  }
}
