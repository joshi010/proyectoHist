//galería
document.querySelector('.gal').onclick = () => {
    console.log('Josué Venegas ©2022');
}

document.querySelectorAll('.gal').forEach(item => {
    item.addEventListener('click', func => {
        item.classList.toggle("big");

    })
})
