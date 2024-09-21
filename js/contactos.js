const subBtn = document.getElementById('sub-btn');
const form = document.getElementById('contactForm');

const nombre = document.getElementById('nombre')
const telefono = document.getElementById('telefono')
const correo = document.getElementById('correo')
const empresa = document.getElementById('empresa')
const aunto = document.getElementById('asunto')
const pregunta = document.getElementById('pregunta')


subBtn.addEventListener('click', (event) => {
    event.preventDefault();
    Swal.fire({
        title: 'Correo enviado exitosamente',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
    });
    nombre.value = ''
    telefono.value = ''
    correo.value = ''
    empresa.value = ''
    aunto.value = ''
    pregunta.value = ''
    
    form.submit(); 
});
