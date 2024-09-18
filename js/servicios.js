const check = document.getElementById('arrow');
const container = document.getElementById('parent');
const label = document.getElementById('label')

check.addEventListener('click',()=>{
    container.classList.toggle('active')
    label.classList.toggle('active')
})