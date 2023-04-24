
const galeria = document.querySelector('.galeria')
const button = document.querySelector('.button-proxima-foto')
const buttonVoltar = document.querySelector('.button-voltar');
const btnTopo = document.querySelector('#btnTopo');
const btnForm = document.querySelector('.btn');
const Modal = document.querySelector('dialog');
const fecharModal = document.querySelector('#fecharModal');
const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");

const maxItems = items.length;


// galeria Serviços


let arrayImg = [
  "./img/Galeria/pecas.jpg",
  "./img/Galeria/cone.jpg",
  "./img/Galeria/grades.jpg",
  "./img/Galeria/cami.jpg",
  "./img/Galeria/estrutura.jpeg",
  "./img/Galeria/abs.jpg",
  "./img/Galeria/galeria_12_mini.jpg",
  "./img/Galeria/galeria_4_mini.jpg",
];
galeria.style.gridTemplateColumns = `repeat(${arrayImg.length}, 1fr)`;
const agregarFotos = (img) => {
  for (let i = 0; i < img.length; i++) {
    let newImg = `<img class = "foto" src="${arrayImg[i]}">`;
    galeria.innerHTML += newImg;
  }
}
agregarFotos(arrayImg);

const filhosElementos = galeria.children;
let contador = 0;

function seguinte() {
  filhosElementos[contador].classList.add("seguinte");
  filhosElementos[contador].classList.remove("voltar");

  // adiciona classe para ocultar imagem anterior
  if (contador > 0) {
    filhosElementos[contador - 1].classList.add("oculto");
  }

  contador++;
  buttonVoltar.style.visibility = `visible`;

  if (contador >= arrayImg.length) {
    contador = 0;
  }

  if (contador >= arrayImg.length - 1) {
    button.style.visibility = 'hidden';
  } else {
    button.style.visibility = 'visible';
  }

  // remove classe de ocultar da imagem atual
  filhosElementos[contador].classList.remove("oculto");
};

function volta() {
  contador--;
  filhosElementos[contador].classList.add("voltar");
  filhosElementos[contador].classList.remove("seguinte");

  // adiciona classe para ocultar imagem seguinte
  if (contador < arrayImg.length - 1) {
    filhosElementos[contador + 1].classList.add("oculto");
  }

  if (contador <= 0) {
    buttonVoltar.style.visibility = 'hidden';
  }

  if (contador < arrayImg.length - 1) {
    button.style.visibility = 'visible';
  } else {
    button.style.visibility = 'hidden';
  }

  // remove classe de ocultar da imagem atual
  filhosElementos[contador].classList.remove("oculto");
};
document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowRight') {
    if (contador < arrayImg.length - 1) {
      seguinte();
    }
  } else if (event.code === 'ArrowLeft') {
    if (contador > 0) {
      volta();
    }
  }
});
// Fim da galeria Serviços
// galeria Clientes
controls.forEach((control) => {

  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");


  });
});
// $('.gallery').slick({
//   // dots: true,
//   infinite: true,
//   // speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: false,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   slidesToShow: 3,

// });

// fim galeria Clientes


function abrirModal() {
  Modal.showModal()
}

fecharModal.addEventListener('click', () => {
  Modal.close()
})

// Anima a rolagem suave ao clicar

$(document).ready(function () {
  // Anima a rolagem suave ao clicar nos links do menu com a classe "smooth-scroll"
  $('a.smooth-scroll').click(function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});

// Fim da animação suave ao clicar

//Botao para o topo

function scrollToTop() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    window.scrollTo(0, 0);
    window.requestAnimationFrame(scrollToTop);
  }
}

btnTopo.addEventListener('click', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    window.requestAnimationFrame(scrollToTop);
  }
});

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 300) {
    btnTopo.classList.add('show');

  } else {
    btnTopo.classList.remove('show');
  }
});
//menu celular
const closeBtn = document.querySelector(".close-btn");

function openNav() {
  document.querySelector('.ul').style.left = '0';
  closeBtn.style.display = 'block'

}
function closeNav() {
  document.querySelector('.ul').style.left = '-100%';
  closeBtn.style.display = 'none'
}





