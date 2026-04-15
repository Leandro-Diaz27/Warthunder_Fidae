// ── NACIONES MAP ──
const NACIONES = {
  usa:     { label: "Estados Unidos", flag: "🇺🇸" },
  germany: { label: "Alemania",        flag: "🇩🇪" },
  ussr:    { label: "URSS / Rusia",    flag: "🇷🇺" },
  uk:      { label: "Gran Bretaña",    flag: "🇬🇧" },
  japan:   { label: "Japón",           flag: "🇯🇵" },
  china:   { label: "China",           flag: "🇨🇳" },
  italy:   { label: "Italia",          flag: "🇮🇹" },
  france:  { label: "Francia",         flag: "🇫🇷" },
  sweden:  { label: "Suecia",          flag: "🇸🇪" },
  israel:  { label: "Israel",          flag: "🇮🇱" },
};

// ── SUPABASE CLIENT ──
// Usamos window.db para evitar conflictos con la librería global
function initSupabase() {
  try {
    const { createClient } = window.supabase;
    window.db = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
    console.log("Supabase conectado correctamente");
  } catch (e) {
    console.warn("Error inicializando Supabase:", e);
  }
}

// ── DOM READY ──
document.addEventListener("DOMContentLoaded", () => {
  initSupabase();
  applyConfig();
  initNav();
  initHeroDelays();
  initScrollReveal();
  loadMetricas();
  loadParticipantes();
  initForm();
});

// ── APLICAR CONFIG ──
function applyConfig() {
  document.querySelectorAll("#clanName, #clanFooter").forEach(el => {
    el.textContent = CONFIG.CLAN_NAME;
  });

  const tiktok = document.getElementById("linkTiktok");
  const ig = document.getElementById("linkInstagram");
  const yt = document.getElementById("linkYoutube");
  if (tiktok) tiktok.href = CONFIG.TIKTOK_URL;
  if (ig)     ig.href     = CONFIG.INSTAGRAM_URL;
  if (yt)     yt.href     = CONFIG.YOUTUBE_URL;

  const horasEl = document.getElementById("countHoras");
  if (horasEl) horasEl.textContent = CONFIG.HORAS_EVENTO;
}

function initNav() {
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });

  const hamburger = document.getElementById("hamburger");
  hamburger?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("mobile-open");
  });
}

function initHeroDelays() {
  document.querySelectorAll("[data-delay]").forEach(el => {
    el.style.animationDelay = el.dataset.delay + "ms";
  });
}

function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".metrica-card, .highlight-item, .auspi-main-card, .visual-card, .naciones-breakdown"
  );
  targets.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(el => observer.observe(el));
}

function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

// ── CARGAR MÉTRICAS ──
async function loadMetricas() {
  let registrados = 0;
  let paises = new Set();
  let aviones = new Set();
  let nacionCounts = {};

  if (window.db) {
    try {
      const { data, error } = await window.db
        .from("registros")
        .select("username, nacion, avion");

      if (!error && data) {
        registrados = data.length;
        data.forEach(r => {
          if (r.nacion) {
            paises.add(r.nacion);
            nacionCounts[r.nacion] = (nacionCounts[r.nacion] || 0) + 1;
          }
          if (r.avion) aviones.add(r.avion.trim().toLowerCase());
        });
      }
    } catch (e) {
      console.warn("Error cargando métricas:", e);
    }
  }

  animateCounter(document.getElementById("countRegistrados"), registrados);
  animateCounter(document.getElementById("countPaises"), paises.size);
  animateCounter(document.getElementById("countAviones"), aviones.size);

  setTimeout(() => {
    const barRegistrados = document.querySelector('[data-metric="registrados"] .metrica-bar-fill');
    const barPaises = document.querySelector('[data-metric="paises"] .metrica-bar-fill');
    const barAviones = document.querySelector('[data-metric="aviones"] .metrica-bar-fill');
    if (barRegistrados) barRegistrados.style.width = Math.min((registrados / 100) * 100, 100) + "%";
    if (barPaises)      barPaises.style.width = Math.min((paises.size / Object.keys(NACIONES).length) * 100, 100) + "%";
    if (barAviones)     barAviones.style.width = Math.min((aviones.size / 30) * 100, 100) + "%";
  }, 300);

  renderNaciones(nacionCounts, registrados);
}

function renderNaciones(counts, total) {
  const list = document.getElementById("nacionesList");
  if (!list) return;
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  if (entries.length === 0) {
    list.innerHTML = '<div class="nacion-loading">Sin registros aún. ¡Sé el primero!</div>';
    return;
  }
  list.innerHTML = entries.map(([key, count]) => {
    const nacion = NACIONES[key] || { label: key, flag: "🌍" };
    const pct = total > 0 ? Math.round((count / total) * 100) : 0;
    return `
      <div class="nacion-item">
        <span class="nacion-flag">${nacion.flag}</span>
        <span>${nacion.label}</span>
        <span style="font-size:0.7rem;color:var(--dim);margin-left:0.3rem">(${pct}%)</span>
        <span class="nacion-count">${count}</span>
      </div>
    `;
  }).join("");
}

// ── CARGAR PARTICIPANTES ──
async function loadParticipantes() {
  const tbody = document.getElementById("tablaBody");
  if (!tbody) return;

  if (!window.db) {
    tbody.innerHTML = `<tr><td colspan="5" class="tabla-loading">Error de conexión con la base de datos.</td></tr>`;
    return;
  }

  try {
    const { data, error } = await window.db
      .from("registros")
      .select("id, username, nacion, avion, clan, created_at")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) throw error;

    if (!data || data.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="tabla-loading">Aún no hay participantes. ¡Sé el primero en registrarte!</td></tr>`;
      return;
    }

    tbody.innerHTML = data.map((row, i) => {
      const nacion = NACIONES[row.nacion] || { label: row.nacion, flag: "🌍" };
      return `
        <tr>
          <td style="color:var(--dim);opacity:0.5">${String(i + 1).padStart(2, "0")}</td>
          <td>${escapeHtml(row.username)}${row.clan ? ` <span style="color:var(--accent);font-size:0.75rem">${escapeHtml(row.clan)}</span>` : ""}</td>
          <td>${nacion.flag} ${nacion.label}</td>
          <td>${escapeHtml(row.avion)}</td>
          <td><span class="status-badge">Confirmado</span></td>
        </tr>
      `;
    }).join("");

  } catch (e) {
    console.error("Error cargando participantes:", e);
    tbody.innerHTML = `<tr><td colspan="5" class="tabla-loading">Error al cargar participantes.</td></tr>`;
  }
}

// ── FORMULARIO ──
function initForm() {
  const form = document.getElementById("applyForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const btn = document.getElementById("btnSubmit");
    const btnText = btn.querySelector(".btn-text");
    const btnLoading = btn.querySelector(".btn-loading");

    btn.disabled = true;
    btnText.style.display = "none";
    btnLoading.style.display = "inline";

    const username = document.getElementById("username").value.trim();
    const nacion   = document.getElementById("nacion").value;
    const avion    = document.getElementById("avion").value.trim();
    const clan     = document.getElementById("clan").value.trim();

    try {
      if (window.db) {
        const { data: existing } = await window.db
          .from("registros")
          .select("id")
          .ilike("username", username)
          .maybeSingle();

        if (existing) {
          showFieldError("err-username", "Este piloto ya está registrado.");
          btn.disabled = false;
          btnText.style.display = "inline";
          btnLoading.style.display = "none";
          return;
        }

        const { error } = await window.db
          .from("registros")
          .insert([{ username, nacion, avion, clan: clan || null }]);

        if (error) throw error;
      }

      document.getElementById("formSuccess").style.display = "block";
      form.querySelectorAll(".form-row, .form-submit").forEach(el => {
        el.style.display = "none";
      });

      loadMetricas();
      loadParticipantes();

    } catch (err) {
      console.error("Error al registrar:", err);
      showFieldError("err-username", "Error al registrar. Intenta nuevamente.");
      btn.disabled = false;
      btnText.style.display = "inline";
      btnLoading.style.display = "none";
    }
  });
}

function validateForm() {
  let valid = true;
  clearErrors();
  const username = document.getElementById("username").value.trim();
  const nacion   = document.getElementById("nacion").value;
  const avion    = document.getElementById("avion").value.trim();

  if (!username) { showFieldError("err-username", "Obligatorio."); valid = false; }
  if (!nacion) { showFieldError("err-nacion", "Selecciona nación."); valid = false; }
  if (!avion) { showFieldError("err-avion", "Obligatorio."); valid = false; }
  return valid;
}

function showFieldError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

function clearErrors() {
  document.querySelectorAll(".form-error").forEach(el => el.textContent = "");
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}