// ========== MATRIX ANIMATION ==========
const canvas = document.getElementById('matrix-background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const phrase = "Text";
const words = phrase.split(" ");
const fontSize = 18;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff69b4";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const word = words[Math.floor(Math.random() * words.length)];
    ctx.fillText(word, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ========== FLOATING TEXT ==========
document.addEventListener('click', (e) => {
  const text = document.createElement('div');
  text.className = 'floating-text';
  text.innerText = 'Click text';
  text.style.left = `${e.clientX}px`;
  text.style.top = `${e.clientY}px`;
  document.body.appendChild(text);
  setTimeout(() => text.remove(), 2000);
});