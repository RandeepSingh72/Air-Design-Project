const toggle = document.querySelector('.togglle');
        var count = 0;
        function updateButton() {
          if (count==0) {
            count=1;
             toggle.innerHTML='&#9609'
          }else {
          count=0;
           toggle.innerHTML='&#9655';
          } 
        }
toggle.addEventListener('click', updateButton)