window.sr = ScrollReveal();

  sr.reveal('.t', {
    duration: 4000,
    origin: 'top',
    distance: '-80px'
  });

  sr.reveal('.i', {
    duration: 4000,
    delay: 1,
    origin: 'bottom',
    distance: '-80px'
  });

  sr.reveal('.t1', {
    duration: 4000,
    origin: 'left',
    distance: '-80px'
  });

  sr.reveal('.i1', {
    duration: 4000,
    delay: 1,
    origin: 'rigth',
    distance: '-80px'
  });

  sr.reveal('.t2', {
    duration: 4000,
    origin: 'bottom',
    distance: '-80px'
  });

  sr.reveal('.i2', {
    duration: 4000,
    delay: 1,
    origin: 'top',
    distance: '-80px'
  });

  const boton = document.getElementById("boton");

  boton.addEventListener("click", ()=>{
    window.open('comprar.html')
  })