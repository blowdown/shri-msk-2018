class Textbox {
  constructor(el, config) {
    this._config = config || {};
    
    el = typeof el === 'string' ? document.querySelector(el) : el;
    this._el = el;
    this._inputEl = this._el.querySelector('.textbox__input');
    
    if (this._config.showClear) {
      this._el.insertAdjacentHTML('beforeEnd', `<div class="textbox__icon" data-type="clear"></div>`);
      this._clearEl = this._el.querySelector('.textbox__icon');
      
      this._clearEl.addEventListener('click', () => this.clear());

      this._inputEl.addEventListener('input', () => this._updateClear());
      this._updateClear();
    }
  }
  
  _updateClear() {
    if (!this._config.showClear) {
      return;
    }
    
    const value = this._inputEl.value;
    this._clearEl.style.display = value ? 'inline-block' : 'none';
    this._el.classList.toggle('textbox--with-icon', value);
  }
  
  getText() {
    return this._inputEl.value;
  }
  
  clear() {
    this._inputEl.value = '';
    this._updateClear();
  }
}
