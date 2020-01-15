class NotificacionElement extends HTMLElement{
    constructor(){
        super();

        
        this.plantilla = document.getElementById("notificacion");
        //agregamos un atributo para q podamos reutilizar este cartel de error
        this.notificacion = document.importNode(this.plantilla.content,true);

    }
    connectedCallback(){
        // importNode() para clonar el contenido de lo q tenga nuestro template.
        //let nodoClonado = document.importNode(this.plantilla.content,true);
        // agregamoos el clonado como hijos de nuestro tag.
        //this.appendChild(this.nodoClonado);
        this.appendChild(this.notificacion);
    }
    attributeChangedCallback(atributo, viejoAtr, nuevoAtr){
        //SI el atributo title es el q cambia:
        if (atributo == "title") {
            //entonces el nuevo atributo(contenido) pasa a ser actualizado por nuevoAtr.
            this.notificacion.querySelector(".error__title").innerText = nuevoAtr;
            
        }
    }
    static get observedAttributes(){
        return ['title'];
    }
}
window.customElements.define('x-notificacion',NotificacionElement);