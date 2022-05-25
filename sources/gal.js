//galería
document.querySelector('.gal').onclick = () => {
    console.log('nigger')
}

document.querySelectorAll('.gal').forEach(item => {
    item.addEventListener('click', func => {
        item.classList.toggle("big");

    })
})