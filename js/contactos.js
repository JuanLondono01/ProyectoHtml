const subBtn = document.getElementById('sub-btn');
const form = document.getElementById('contactForm');

subBtn.addEventListener('click', (event) => {
    event.preventDefault();
    Swal.fire({
        title: 'Correo enviado exitosamente',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
    });

    form.submit(); 
});
