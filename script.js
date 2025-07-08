const allBlocs = document.querySelectorAll('.bloc');


allBlocs.forEach(bloc => {
    bloc.addEventListener('click', (e) => {

        // console.log(e.target);
        e.target.classList.add('active');

        for(let i = 0; i < allBlocs.length; i++ ){
            if(allBlocs[i] !== e.target){
                allBlocs[i].classList.remove('active');
            }
        }
        

    })
})
/*pour gérer le pointer events grâce à stop propagation:
juste activer sur le button et non sur l'ens du bloc*/
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
    })
})

/*document.querySelectorAll('.gallery').forEach(gallery => {
    gallery.addEventListener('click', () => {
      document.querySelectorAll('.gallery').forEach(g => g.classList.remove('active'));
      gallery.classList.add('active');
    });
  });*/
