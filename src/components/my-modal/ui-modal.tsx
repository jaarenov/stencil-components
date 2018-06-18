import { Component, Method, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'ui-modal',
  styleUrl: 'ui-modal.scss',
  shadow: true
})
export class UiModal {
  buttons = ['Okay', 'Cancel'];

  @Element() modalEl: HTMLElement; 

  @Prop() title: string;
  @Prop() content: string;

  @State() showOptions = false;

  @Method()
  open() {
    this.modalEl.style.display = 'block';
  }

  showOptionsHandler() {
    this.showOptions = true;
  } 

  closeModalHandler () {
    this.modalEl.style.display = 'none';
    this.showOptions = false;
  }

  render() {
    let options = null;
    if (this.showOptions) {
      options = (
        this.buttons.map(btn => (
          <button onClick={this.closeModalHandler.bind(this)}>{btn}</button>
        ))
      );
    }

    return (
      <div class="ui-modal">
        <h3>{this.title}</h3>
        <p>{this.content}</p>

        <button onClick={this.showOptionsHandler.bind(this)}>Show options</button>

        {options}
      </div>
    );
  }
}
