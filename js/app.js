document.addEventListener('DOMContentLoaded', function(){
    const formulario = document.querySelector('#formulario');
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)
    
    function validar (e){
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
        }else{
            console.log('bien, hay contenido')
        }
    }

    function mostrarAlerta(mensaje, referencia){
        const alerta = referencia.querySelector('.alerta');
        if(alerta){
            alerta.remove();
        }
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'alerta')

        referencia.appendChild(error)
    }
})