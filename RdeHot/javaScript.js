var btn = document.getElementById('btn'),
    arriba = document.getElementById('arriba'),
    abajo = document.getElementById('abajo'),
    centro = document.getElementById('centro');

    function cambio()
    {
        
            arriba.classList.add('efecto');
            
          
       
    }

    btn.addEventListener('click',cambio);