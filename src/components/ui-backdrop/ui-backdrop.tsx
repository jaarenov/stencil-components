import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ui-backdrop',
  styleUrl: 'ui-backdrop.scss',
  shadow: true
})

export class UiBackdrop {
  @Prop() visible: boolean;

  render() {
    let backdropState = this.visible ? '' : 'backdrop-hide';

    return (
      <div class={
        'ui-backdrop' + ' ' +
        (backdropState)
        }>
        </div>
      );
    }
  }


