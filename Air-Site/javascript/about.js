const countBox = document.querySelector('.integer1');
const integer = document.querySelectorAll('.integer');
const speed = 200;

const observer = new IntersectionObserver(entries =>{
    entries.forEach(e=>{
      if (e.isIntersecting) {
        console.log('countdiv is visible');
        integer.forEach(e=>{
            const updateCount=() => {
                const target = +e.getAttribute('data-countInt');
                const count = +e.innerText;
                const inc = Math.ceil(target/speed);
                if (count < target) {
                    e.innerText = count + inc;
                    setTimeout(updateCount, 40);
                }else{
                    integer.innerText = target;
                }
            }
            updateCount()
            
        })
      }else{
        console.log('not visible');
      }
    })
  })
  observer.observe(countBox)

