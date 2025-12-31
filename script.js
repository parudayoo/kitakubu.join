// =====================
// ページ移動
// =====================
function goJoin() {
  location.href = "reason.html";
}

function showReason() {
  document.getElementById("reason-text").classList.add("show");
}

// =====================
// カーソル揺れ
// =====================
const center = document.querySelector(".center");
const image = document.querySelector(".main-image");

document.addEventListener("mousemove", (e) => {
  if (!center) return;

  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);

  center.style.transform = `translate(${x * 18}px, ${y * 18}px)`;

  if (image) {
    image.style.transform = `translate(${x * 28}px, ${y * 28}px)`;
  }
});

// =====================
// 雨
// =====================
const canvas = document.getElementById("rain");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let w, h;
  let drops = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (let i = 0; i < 180; i++) {
    drops.push({
      x: Math.random() * w,
      y: Math.random() * h,
      len: Math.random() * 25 + 15,
      speed: Math.random() * 4 + 3
    });
  }

  function rainLoop() {
    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.lineWidth = 1;

    for (const d of drops) {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x, d.y + d.len);
      ctx.stroke();

      d.y += d.speed;
      if (d.y > h) {
        d.y = -20;
        d.x = Math.random() * w;
      }
    }

    requestAnimationFrame(rainLoop);
  }

  rainLoop();
}
