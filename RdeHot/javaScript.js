var btn = document.getElementById('home'),
    arriba = document.getElementById('arriba'),
    abajo = document.getElementById('abajo'),
    centro = document.getElementById('centro'),
    contador = 0;

    function cambio()
    {
        if(contador == 0)
        (
            arriba.classList.add('none')
            contador = 1;
        )
        else
        {
            arriba.classList.remove('none');
            contador = 0;
        }


    }

    btn.addEventListener('click',cambio,true);