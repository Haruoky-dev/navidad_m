window.addEventListener('load', ()=> {
    document.getElementById('song').play();
    document.getElementById('song').volume = 0.05;
})

const BODY = document.querySelector('body');

const crearNieve = () => {

    let copo = document.createElement('i');
    let x = innerWidth * Math.random();
    let size = (Math.random() * 8) + 2;
    let z = Math.round(Math.random()) * 100;
    let delay = Math.random() * 5;
    let animacion = (Math.random() * 10) + 5;

    copo.style.left = `${x}px`;
    copo.style.width = `${size}px`;
    copo.style.height = `${size}px`;
    copo.style.zIndex = z;
    copo.style.animationDelay = `${delay}s`;
    copo.style.animationDuration = `${animacion}s`;

    BODY.appendChild(copo);

    setTimeout(() => {
        copo.remove();
    }, animacion * 1000);
}

setInterval(crearNieve, 100); 1

function nota() {
    Swal.fire({
        title: "<h1>Hola</h1>",
        width:"50%",
        showClass: {
            popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
        `
        },
        hideClass: {
            popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
        `
        },
        showCloseButton: true,
        
        background:"#6A994E",
        html: `
        <p class="p_card">
        <span class="p_card_span">
            Aprovechando que ahora estás en este mundo de la programación, considere que era buena idea desearte feliz navidad de esta forma. 
        </span>
        <br><br>
        Mira, sé que ya no hablamos <strong>(más que todo por mi culpa)</strong>, y de por sí ya no quería hablar conmigo <strong>(también mi culpa)</strong>. Pero no está de más desearte Feliz Navidad, y más cuando sé que no estás muy bien. 
        <br><br>
        Así mismo, que sepas que, aunque no lo parezca para nada, yo te tengo bastante cariño. Por ello, lo mínimo que puedo hacer es desearte una feliz navidad y que de verdad espero que te mejore cuanto antes, ya que la última vez que te vi sí me preocupaste bastante…
        <br><br>
        Sé que no es la gran cosa. Al final no es un collar, o un poema de amor. Pero pues, no puedes negar que el hombre de nieve está bonito. 
        <br><br>
        ¡De verdad espero que hoy la pases muy bien!
        <br><br>
        Perdón por todo. 
        </p>
        `
    });
}