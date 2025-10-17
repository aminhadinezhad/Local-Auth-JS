'use strict';

(function () {
  const link = document.querySelector('.user-auth-link');
  let fillEl = null;
  const fillScale = 18;
  const radius = 9;

  function removeFill() {
    if (!fillEl) return;

    const elToRemove = fillEl;
    fillEl = null;

    elToRemove.style.opacity = '0';
  }

  function onPointerUpOrCancelOrLeave() {
    removeFill();
  }

  function onPointerDown(e) {
    if (fillEl) {
      removeFill();
    }

    fillEl = document.createElement('span');
    fillEl.className = 'fill';

    const rect = link.getBoundingClientRect();

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    fillEl.style.left = clickX - radius + 'px';
    fillEl.style.top = clickY - radius + 'px';

    link.appendChild(fillEl);

    requestAnimationFrame(() => {
      if (fillEl) {
        fillEl.style.transform = `scale(${fillScale})`;
      }
    });

    window.addEventListener('pointerup', onPointerUpOrCancelOrLeave, {
      once: true,
    });
    link.addEventListener('pointerleave', onPointerUpOrCancelOrLeave, {
      once: true,
    });
    link.addEventListener('pointercancel', onPointerUpOrCancelOrLeave, {
      once: true,
    });
  }

  link.addEventListener('pointerdown', onPointerDown);
})();
