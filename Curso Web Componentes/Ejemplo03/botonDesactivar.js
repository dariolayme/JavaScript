class DesactivableButton extends HTMLButtonElement{

    constructor(){
        super();
        this._onButtonClicked= this._onButtonClicked.bind(this);
    }
    _onButtonClicked(){
        this.setAttribute('disabled','disabled');
        this.innerText = this.busytext;
    }
    connectedCallback(){
        this.addEventListener('click',this._onButtonClicked);
    }
    disconnectedCallback(){
        this.removeEventListener('click',this._onButtonClicked);
    }
    static get observedAttributes(){
        return ['busytext'];
    }
    attributeChangedCallback(attr, old, newAtr){
        if (attr =="busytext") {
            this.busytext = newAtr;
        }
    }
}

window.customElements.define('desactivar-boton',DesactivableButton, {
    extends: "button",
});