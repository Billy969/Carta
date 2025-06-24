// Rutas corregidas para imágenes
const images = [
  'sonidos%20y%20fotos/img1.jpg',
  'sonidos%20y%20fotos/img2.jpg',
  'sonidos%20y%20fotos/img3.jpg'
];

// Animación de lluvia de corazones y flores
const rainContainer = document.querySelector('.rain');
const icons = ['💖', '🌸', '🌷', '💗', '🌺', '💞'];
const rainCount = 25;

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

for (let i = 0; i < rainCount; i++) {
  const isHeart = Math.random() > 0.4;
  const el = document.createElement('div');
  el.className = isHeart ? 'heart' : 'flower';
  el.innerText = icons[Math.floor(randomBetween(0, icons.length))];
  el.style.left = randomBetween(0, 100) + 'vw';
  el.style.animationDelay = randomBetween(0, 3) + 's';
  el.style.fontSize = randomBetween(26, 38) + 'px';
  rainContainer.appendChild(el);
}

// Mostrar mensaje oculto al presionar el botón y cargar galería
document.getElementById('show-message').addEventListener('click', () => {
  const msg = document.getElementById('hidden-message');
  msg.style.display = 'block';
  msg.scrollIntoView({ behavior: "smooth", block: "center" });

  // Cargar galería (solo la primera vez)
  const gallery = document.getElementById('gallery');
  if (!gallery.hasChildNodes()) {
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = "Foto de los dos";
      gallery.appendChild(img);
    });
  }
});

// Música de fondo
const audio = document.getElementById('bg-music');
document.getElementById('play-music').addEventListener('click', () => {
  audio.play();
});