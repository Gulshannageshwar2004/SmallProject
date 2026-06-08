/* ── STARS ── */
(function () {
  const c = document.getElementById('stars-canvas');
  const ctx = c.getContext('2d');
  let stars = [];

  function resize() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 220; i++) {
    stars.push({
      x: Math.random(), y: Math.random(),
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      s: (Math.random() * 0.004 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
      color: Math.random() < 0.15 ? '#e8c97a' : '#ffffff'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    stars.forEach(s => {
      s.a += s.s;
      if (s.a > 1 || s.a < 0) s.s *= -1;
      ctx.beginPath();
      ctx.arc(s.x * c.width, s.y * c.height, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.a;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── FAIRY LIGHTS ── */
(function () {
  const container = document.getElementById('light-string');
  const colors = ['#ffe680', '#ffb3c6', '#b3d9ff', '#c8f7c5', '#ffc8a2', '#e8b4ff'];
  const count = Math.floor(window.innerWidth / 38) + 4;
  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.className = 'bulb';
    b.style.left = (i * (100 / count)) + '%';
    b.style.top = Math.sin(i * 0.6) * 14 + 10 + 'px';
    b.style.background = colors[i % colors.length];
    b.style.boxShadow = `0 0 8px 3px ${colors[i % colors.length]}88`;
    b.style.animationDelay = (i * 0.12) + 's';
    b.style.animationDuration = (1.5 + Math.random()) + 's';
    container.appendChild(b);
  }
})();

/* ── OPENING CURTAIN ON LOAD ── */
window.addEventListener('load', () => {
  const wrap = document.getElementById('curtain-wrap');
  wrap.classList.add('active');
  setTimeout(() => {
    document.querySelectorAll('.curtain').forEach(c => c.classList.add('open'));
    setTimeout(() => { wrap.style.display = 'none'; }, 1800);
  }, 600);
});

/* ── STEP 0: START JOURNEY ── */
function startJourney() {
  const landing = document.getElementById('landing');
  const panel = document.getElementById('step-panel');
  landing.classList.add('hidden');
  setTimeout(() => {
    landing.style.display = 'none';
    panel.classList.add('visible');
  }, 800);
}

/* ── STEP 1: LIGHTS ── */
function doLights(btn) {
  document.getElementById('fairy-lights').classList.add('lit');
  btn.classList.add('done');
  btn.innerHTML = '<span class="btn-icon">✓</span> Lights are on';
  spawnPetals(6);
}

/* ── STEP 2: MUSIC ── */
function doMusic(btn) {
  const audio = document.getElementById('bg-music');
  audio.volume = 0.35;
  audio.play().catch(() => {});
  btn.classList.add('done');
  btn.innerHTML = '<span class="btn-icon">🎵</span> Playing…';
  spawnPetals(8);
}

/* ── STEP 3: BALLOONS ── */
function doBalloons(btn) {
  const colors = [
    '#ff6b9d', '#ff4d6d', '#c77dff', '#72efdd',
    '#ffd166', '#06d6a0', '#f72585', '#4cc9f0', '#ff9a3c'
  ];
  for (let i = 0; i < 32; i++) {
    setTimeout(() => {
      const b = document.createElement('div');
      b.className = 'balloon';
      const col = colors[Math.floor(Math.random() * colors.length)];
      b.style.left = (Math.random() * 95) + '%';
      b.style.background = col;
      b.style.boxShadow = `0 0 12px ${col}88`;
      b.style.width = (32 + Math.random() * 18) + 'px';
      b.style.height = (42 + Math.random() * 20) + 'px';
      b.style.animationDuration = (5 + Math.random() * 6) + 's';
      document.body.appendChild(b);
      setTimeout(() => b.remove(), 12000);
    }, i * 160);
  }
  btn.classList.add('done');
  btn.innerHTML = '<span class="btn-icon">🎈</span> Balloons flying!';
  spawnPetals(10);
}

/* ── STEP 4: REVEAL MESSAGE ── */
function doReveal(btn) {
  btn.classList.add('done');
  btn.innerHTML = '<span class="btn-icon">💌</span> Opening…';

  const panel = document.getElementById('step-panel');
  const wrap  = document.getElementById('curtain-wrap');
  const card  = document.getElementById('main-card');

  document.querySelectorAll('.curtain').forEach(c => c.classList.remove('open'));
  wrap.style.display = 'block';
  wrap.style.pointerEvents = 'none';

  setTimeout(() => {
    card.classList.add('revealed');
    panel.style.display = 'none';
    setTimeout(() => {
      document.querySelectorAll('.curtain').forEach(c => c.classList.add('open'));
      setTimeout(() => {
        card.classList.add('visible');
        wrap.style.display = 'none';
        launchConfetti();
        spawnPetals(20);
      }, 1700);
    }, 400);
  }, 600);
}

/* ── ROSE PETALS ── */
function spawnPetals(n) {
  const petals = ['🌸', '🌹', '🌺', '✿', '❀', '💮'];
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      const p = document.createElement('div');
      p.className = 'petal';
      p.textContent = petals[Math.floor(Math.random() * petals.length)];
      p.style.left = (Math.random() * 100) + 'vw';
      p.style.top = '-30px';
      p.style.fontSize = (12 + Math.random() * 14) + 'px';
      p.style.animationDuration = (4 + Math.random() * 5) + 's';
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 10000);
    }, i * 200);
  }
}

/* ── CONFETTI ── */
function launchConfetti() {
  const cols = ['#e8547a', '#c9a96e', '#c77dff', '#4cc9f0', '#ffd166', '#06d6a0'];
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.left = (Math.random() * 100) + 'vw';
      c.style.top = '-10px';
      c.style.background = cols[Math.floor(Math.random() * cols.length)];
      c.style.borderRadius = Math.random() < 0.4 ? '50%' : '2px';
      c.style.width = (6 + Math.random() * 8) + 'px';
      c.style.height = c.style.width;
      c.style.animationDuration = (2.5 + Math.random() * 3) + 's';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 6000);
    }, i * 60);
  }
}