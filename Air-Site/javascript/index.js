const navbarbtn=document.querySelector('.navbar-toggler');
const navbar=document.querySelector('.navbar');
const gallery = document.querySelector('.pics-collection');
const buttons = document.querySelectorAll('.filter-gallery .list .list-item');
const galleryImg = document.querySelectorAll('.pics-collection img');

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', ()=>{
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove('scroll-up');
    }
    if (currentScroll >= lastScroll) {
        body.classList.add('scroll-up')
    }
    lastScroll=currentScroll
})

navbarbtn.addEventListener('click', ()=>{
    const visibility=navbar.getAttribute('data-visible');
    if (visibility==='false') {
        navbar.setAttribute('data-visible','true');
    }else if(visibility==='true'){
        navbar.setAttribute('data-visible', 'false')
    }
    
});

buttons.forEach(e=>{
    e.addEventListener('click', ()=>{
        buttons.forEach(btn=>{
            btn.classList.remove('active')
        });
        e.classList.add('active');

        const filterValue=e.getAttribute('data-filter');

        if (filterValue==='all') {
            galleryImg.forEach(e=>{
                e.classList.remove('hide');
                e.classList.add('showing');
            })
        }else{
            galleryImg.forEach(e=>{
                if (!e.classList.contains(filterValue)) {
                    e.classList.add('hide');
                    e.classList.remove('showing')
                }else{
                    e.classList.remove('hide');
                    e.classList.add('showing')
                }
            })
        }
    })
})

function scrolltoTop() {
    window.scrollTo(0, 0);
}