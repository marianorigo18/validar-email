document.addEventListener('DOMContentLoaded', function(){
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');

    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)
    
    function validar (e){
        if(e.target.value.trim() === ''){
            mostrarAlerta()
        }else{
            console.log('bien, hay contenido')
        }
    }

    function mostrarAlerta(){
        const error = document.createElement('P');
        error.textContent = 'Hubo un Error';
        console.log(error)
    }
})