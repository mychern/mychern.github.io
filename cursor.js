(function () {
  const mq = window.matchMedia('(hover:hover) and (pointer:fine) and (min-width:1024px)');
  if (!mq.matches) return;

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouse = { x: -100, y: -100 };
  let raf;

  function render() {
    dot.style.transform = `translate(${mouse.x - 3}px, ${mouse.y - 3}px)`;
    ring.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
  }

  document.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    dot.style.opacity = '1';
    ring.style.opacity = '0.3';
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(render);
  });

  document.addEventListener('mouseleave', function () {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseover', function (e) {
    if (e.target.closest('a, button, input, textarea, select, [role="button"]')) {
      ring.classList.add('hover');
    }
  });

  document.addEventListener('mouseout', function (e) {
    if (e.target.closest('a, button, input, textarea, select, [role="button"]')) {
      ring.classList.remove('hover');
    }
  });
})();
