//cada etiqueta tiene su propia clase HTML...

class SaludoBasicoElement extends HTMLElement{

    constructor(){
        //es necesaria llamar a super()
        super();
        //seria como una variable q tiene esta clase
        this.saludo = "hola q tal";
        //agrgeo un atributo mas 
        this.pintado = false;
    }
    //evento mas basico
    /*  cuando este elemento se pone en la pag
        se activa este codigo. 
    */
    connectedCallback(){
        //alert('se conecto');
        //strong texto mas grueso/fuerte.
        let bold = document.createElement("strong");
        //this hace referencia a SaludoBasico
        bold.innerHTML = this.saludo;
        //agregamos al final de nuestra propio tag saludo-basico 
        this.appendChild(bold);

        this.pintado=true;
    } 
    /*  para enterarnos de una asignacion/cambio de un atributo
        este se acciona si se cambia un atributo.
    */
    attributeChangedCallback(nombre, viejoValor, nuevoValor){
        console.log(`${nombre} ha cambiado de ${viejoValor} a nuevo valor ${nuevoValor}`);
        // === comparacion estricta: son del mismo tipo y contenido.
        if(nombre==="nombre"){
            // usando las comillas torcidas
            this.saludo=`hola, ${nuevoValor}`;
        }
        if (this.pintado) {
            this.innerHTML=this.saludo;
        }
    }
    //necesitamo un metodo al propio navegador q queremos obserbar
    //geter Estatico es un Atributo
    //para eso:
    static get observedAttributes(){
        //array de los atributos q nos q remos fijar
        return ['nombre'];
    }

    

}

//declaramos nuestra etiqeta para poder usarla en el html
//el tag tiene q contener un guion con dos palabras
window.customElements.define('saludo-basico',SaludoBasicoElement);