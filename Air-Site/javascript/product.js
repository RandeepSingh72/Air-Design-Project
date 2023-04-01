document.addEventListener('click', (e)=>{
    if (e.target.classList.contains('gallery-item')) {
        const src = e.target.getAttribute('src')
        document.querySelector('.modal-img').src=src;
        const myModal = new bootstrap.Modal(document.querySelector('#gallery-modal'))
        myModal.show();
    }
})