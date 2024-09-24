const menu = document.getElementById('menu');
const burguer = document.getElementById('burguer')

menu.addEventListener('mouseenter', (e)=>{
    burguer.classList.remove('fa-bars')
    burguer.classList.add('fa-xmark')
})

menu.addEventListener('mouseleave', ()=>{
    burguer.classList.remove('fa-xmark')
    burguer.classList.add('fa-bars')
})