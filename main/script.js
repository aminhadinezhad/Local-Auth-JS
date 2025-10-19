'use strict';

// (function () {
  const link = document.querySelector('.user-auth-link');
//   let fillEl = null;

//   const initialRadius = 10;

//   function getFurthestDistance(x, y, w, h) {
//     const dist1 = Math.sqrt(x * x + y * y);
//     const dist2 = Math.sqrt((w - x) * (w - x) + y * y);
//     const dist3 = Math.sqrt(x * x + (h - y) * (h - y));
//     const dist4 = Math.sqrt((w - x) * (w - x) + (h - y) * (h - y));

//     return Math.max(dist1, dist2, dist3, dist4);
//   }

//   function removeFill() {
//     if (!fillEl) return;

//     const elToRemove = fillEl;
//     fillEl = null;

//     elToRemove.style.opacity = '0';

//     const onTransitionEnd = e => {
//       if (e.propertyName === 'opacity' && elToRemove.parentNode) {
//         elToRemove.parentNode.removeChild(elToRemove);
//       }
//     };
//     elToRemove.addEventListener('transitionend', onTransitionEnd, {
//       once: true,
//     });
//   }

//   function onPointerUpOrCancelOrLeave() {
//     removeFill();
//   }

//   function onPointerDown(e) {
//     e.preventDefault();

//     if (fillEl) {
//       removeFill();
//     }

//     fillEl = document.createElement('span');
//     fillEl.className = 'fill';

//     const rect = link.getBoundingClientRect();

//     const clickX = e.clientX - rect.left;
//     const clickY = e.clientY - rect.top;

//     const furthestDistance = getFurthestDistance(
//       clickX,
//       clickY,
//       rect.width,
//       rect.height
//     );

//     const requiredScale = (furthestDistance / initialRadius) * 3.5;

//     fillEl.style.left = clickX - initialRadius + 'px';
//     fillEl.style.top = clickY - initialRadius + 'px';

//     link.appendChild(fillEl);

//     requestAnimationFrame(() => {
//       if (fillEl) {
//         fillEl.style.transform = `scale(${requiredScale})`;
//       }
//     });

//     window.addEventListener('pointerup', onPointerUpOrCancelOrLeave, {
//       once: true,
//     });
//     link.addEventListener('pointerleave', onPointerUpOrCancelOrLeave, {
//       once: true,
//     });
//     link.addEventListener('pointercancel', onPointerUpOrCancelOrLeave, {
//       once: true,
//     });
//   }

//   link.addEventListener('pointerdown', onPointerDown);
// })();

