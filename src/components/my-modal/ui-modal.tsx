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
  @Prop() backdrop: boolean = true;

  @Method()
  open() {
    this.modalEl.style.display = 'block';
  }

  closeModalHandler () {
    this.modalEl.style.display = 'none';
  }

  
  render() {    
    
    return [
      <ui-backdrop visible={this.backdrop}></ui-backdrop>,
      <div class={
        ('modal') + ' ' +
        (this.size) + ' ' +
        (this.theme)
      }>
        <div class="modal-header"></div>
        <div class="modal-body"></div>
        <button class="close" onClick={this.closeModalHandler.bind(this)}>&#10006;</button>
      </div>
    ];
 

    
  }
}
