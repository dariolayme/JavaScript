
class NotificacionElementShadow extends HTMLElement{
    constructor(){
        super();

        // registramos un shadowDom 
        // es una funcion q sirve para pedirle al navegador 
        // nos de un ShadowDOm 

        this.atributoTitle="";
        this.attachShadow({mode:"open"});
        this.template = document.getElementById("notificacion");
        this.notificacion = document.importNode(this.template.content, true);
        

    }

    render(){
        this.shadowRoot.appendChild(this.notificacion);
        this.shadowRoot.querySelector(".title").innerHTML = this.atributoTitle;
    }
    connectedCallback(){
        this.render();
        
    }
    attributeChangedCallback(atributo, viejoAtr, nuevoAtr){
        if (atributo == "title") {
            this.atributoTitle = nuevoAtr;
            this.render();           
        }
    }
    static get observedAttributes(){
        return ['title'];
    }
}
window.customElements.define('x-noti',NotificacionElementShadow);