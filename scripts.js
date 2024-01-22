const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

// Efeitos da Página

const elements = document.querySelectorAll('.container__abilidades')

elements.forEach((element) => myObserver.observe(element))

window.sr = ScrollReveal({ reset: true});

sr.reveal('.container__principal',{ duration: 2000});

sr.reveal('.container__apresentacao',{
    rotate:{ x: 0, y: 80, z: 0},
    duration: 4000
});

sr.reveal('.projetos', {duration: 5000});

sr.reveal('.rodape');

sr.reveal('.linha-decoration',{
    rotate:{ x: 0, y: 80, z: 0},
    duration: 2200
});