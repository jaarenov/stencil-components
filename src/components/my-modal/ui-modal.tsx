import { Component, Method, Element, Prop } from '@stencil/core';

@Component({
  tag: 'ui-modal',
  styleUrl: 'ui-modal.scss',
  shadow: true
})
export class UiModal {
  @Element() modalEl: HTMLElement; 

  @Prop() size: string;
  @Prop() theme: string;
  @Prop({ mutable: true }) showBackdrop: true;

  @Method()
  open() {
    this.modalEl.style.display = 'block';
  }

  closeModalHandler () {
    this.modalEl.style.display = 'none';
    // this.showBackdrop = false;
  }

  
  hostData() {
    return {
      showBackdrop: true
    }
  }

  render() {    
    let uiBackdrop = document.querySelector('ui-backdrop');
    const showBackdrop = true ? uiBackdrop.classList.add('backdrop-hide') : 'false';

    <ui-backdrop></ui-backdrop>

    return (
      <div class={
        ('modal') + ' ' +
        (this.size) + ' ' +
        (this.theme)
      }>

      <div class="modal-header"></div>
      <div class="modal-body"></div>
      <button class="close" onClick={this.closeModalHandler.bind(this)}>&#10006;</button>

      </div>
    );
  }
}
