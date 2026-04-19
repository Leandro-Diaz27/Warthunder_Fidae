// ── NACIONES MAP ──
const NACIONES = {
  usa: { label: "Estados Unidos", flag: "us" },
  germany: { label: "Alemania", flag: "de" },
  ussr: { label: "URSS / Rusia", flag: "ru" },
  uk: { label: "Gran Bretaña", flag: "gb" },
  japan: { label: "Japón", flag: "jp" },
  china: { label: "China", flag: "cn" },
  italy: { label: "Italia", flag: "it" },
  france: { label: "Francia", flag: "fr" },
  sweden: { label: "Suecia", flag: "se" },
  israel: { label: "Israel", flag: "il" },
  chile: { label: "Chile", flag: "cl" }
};

const AVIONES_DATABASE = [
  // USA
  { name: "F-80C Shooting Star", country: "usa" },
  { name: "F-84B Thunderjet", country: "usa" },
  { name: "F-84F Thunderstreak", country: "usa" },
  { name: "F-86A-5 Sabre", country: "usa" },
  { name: "F-86F-2 Sabre", country: "usa" },
  { name: "F-86F-25 Sabre", country: "usa" },
  { name: "F-100D Super Sabre", country: "usa" },
  { name: "F-104A Starfighter", country: "usa" },
  { name: "F-104C Starfighter", country: "usa" },
  { name: "F-105D Thunderchief", country: "usa" },
  { name: "F-4C Phantom II", country: "usa" },
  { name: "F-4E Phantom II", country: "usa" },
  { name: "F-4J Phantom II", country: "usa" },
  { name: "F-5E Tiger II", country: "usa" },
  { name: "F-5C", country: "usa" },
  { name: "F-14A Tomcat", country: "usa" },
  { name: "F-14B Tomcat", country: "usa" },
  { name: "F-15A Eagle", country: "usa" },
  { name: "F-15C Eagle", country: "usa" },
  { name: "F-16A ADF", country: "usa" },
  { name: "F-16C Block 50", country: "usa" },
  { name: "A-4B Skyhawk", country: "usa" },
  { name: "A-4E Early", country: "usa" },
  { name: "A-4E Late", country: "usa" },
  { name: "A-7D Corsair II", country: "usa" },
  { name: "A-7E Corsair II", country: "usa" },
  { name: "A-10A Thunderbolt II", country: "usa" },
  { name: "A-10A Late", country: "usa" },

  // USSR
  { name: "MiG-9", country: "ussr" },
  { name: "MiG-15", country: "ussr" },
  { name: "MiG-15bis", country: "ussr" },
  { name: "MiG-17", country: "ussr" },
  { name: "MiG-17AS", country: "ussr" },
  { name: "MiG-19PT", country: "ussr" },
  { name: "MiG-21F-13", country: "ussr" },
  { name: "MiG-21SMT", country: "ussr" },
  { name: "MiG-21bis", country: "ussr" },
  { name: "MiG-23M", country: "ussr" },
  { name: "MiG-23MLD", country: "ussr" },
  { name: "MiG-27M", country: "ussr" },
  { name: "MiG-27K", country: "ussr" },
  { name: "MiG-29", country: "ussr" },
  { name: "MiG-29SMT", country: "ussr" },
  { name: "Su-7B", country: "ussr" },
  { name: "Su-17M2", country: "ussr" },
  { name: "Su-17M4", country: "ussr" },
  { name: "Su-22M3", country: "ussr" },
  { name: "Su-22UM3K", country: "ussr" },
  { name: "Su-25", country: "ussr" },
  { name: "Su-25K", country: "ussr" },
  { name: "Su-27", country: "ussr" },

  // Germany
  { name: "Me 262 A-1a", country: "germany" },
  { name: "Me 262 C-1a", country: "germany" },
  { name: "Ho 229 V3", country: "germany" },
  { name: "CL-13A Mk 5", country: "germany" },
  { name: "CL-13B Mk 6", country: "germany" },
  { name: "MiG-15bis (Germany)", country: "germany" },
  { name: "MiG-19S", country: "germany" },
  { name: "F-86K", country: "germany" },
  { name: "F-104G", country: "germany" },
  { name: "Tornado IDS", country: "germany" },

  // UK
  { name: "Meteor F Mk 3", country: "uk" },
  { name: "Meteor F Mk 8", country: "uk" },
  { name: "Hunter F.1", country: "uk" },
  { name: "Hunter F.6", country: "uk" },
  { name: "Lightning F.6", country: "uk" },
  { name: "Harrier GR.1", country: "uk" },
  { name: "Harrier GR.3", country: "uk" },
  { name: "Harrier GR.7", country: "uk" },
  { name: "Phantom FG.1", country: "uk" },
  { name: "Phantom FGR.2", country: "uk" },
  { name: "Tornado F.3", country: "uk" },

  // France
  { name: "Ouragan", country: "france" },
  { name: "Mystere IVA", country: "france" },
  { name: "Super Mystere B2", country: "france" },
  { name: "Mirage III C", country: "france" },
  { name: "Mirage III E", country: "france" },
  { name: "Mirage F1C", country: "france" },
  { name: "Mirage 2000C", country: "france" },
  { name: "Mirage 2000-5F", country: "france" },

  // China
  { name: "J-2", country: "china" },
  { name: "J-4", country: "china" },
  { name: "J-6A", country: "china" },
  { name: "J-7II", country: "china" },
  { name: "J-7E", country: "china" },
  { name: "J-8B", country: "china" },
  { name: "J-11", country: "china" },
  { name: "J-15", country: "china" },

  // Sweden
  { name: "J21RA", country: "sweden" },
  { name: "J29F Tunnan", country: "sweden" },
  { name: "J32B Lansen", country: "sweden" },
  { name: "AJ37 Viggen", country: "sweden" },
  { name: "JA37 Viggen", country: "sweden" },
  { name: "JAS39A Gripen", country: "sweden" },

    // USA (continuación)
  { name: "F-111A", country: "usa" },
  { name: "F-111F", country: "usa" },
  { name: "F-8E Crusader", country: "usa" },
  { name: "F-8U-2", country: "usa" },
  { name: "F-3H-2 Demon", country: "usa" },
  { name: "FJ-4B Fury", country: "usa" },
  { name: "AV-8A Harrier", country: "usa" },
  { name: "AV-8C Harrier", country: "usa" },
  { name: "A-6E Intruder", country: "usa" },
  { name: "A-1H Skyraider", country: "usa" },
  { name: "A-1J Skyraider", country: "usa" },
  { name: "F-89B Scorpion", country: "usa" },
  { name: "F-89D Scorpion", country: "usa" },
  { name: "F-102A Delta Dagger", country: "usa" },
  { name: "F-106 Delta Dart", country: "usa" },

  // USSR (continuación)
  { name: "Yak-15", country: "ussr" },
  { name: "Yak-17", country: "ussr" },
  { name: "Yak-23", country: "ussr" },
  { name: "Yak-28B", country: "ussr" },
  { name: "Yak-38", country: "ussr" },
  { name: "Yak-38M", country: "ussr" },
  { name: "Yak-141", country: "ussr" },
  { name: "Su-9", country: "ussr" },
  { name: "Su-11", country: "ussr" },
  { name: "Su-15TM", country: "ussr" },
  { name: "Su-24M", country: "ussr" },
  { name: "Su-25SM3", country: "ussr" },
  { name: "Su-30SM", country: "ussr" },
  { name: "Su-33", country: "ussr" },
  { name: "Su-34", country: "ussr" },

  // Germany (continuación)
  { name: "Arado Ar 234 B-2", country: "germany" },
  { name: "Arado Ar 234 C-3", country: "germany" },
  { name: "F-4F Phantom II", country: "germany" },
  { name: "F-4F ICE", country: "germany" },
  { name: "MiG-21MF", country: "germany" },
  { name: "MiG-21bis-SAU", country: "germany" },
  { name: "MiG-23MF", country: "germany" },
  { name: "Su-22M4 (Germany)", country: "germany" },

  // UK (continuación)
  { name: "Sea Hawk FGA.6", country: "uk" },
  { name: "Swift F.1", country: "uk" },
  { name: "Swift F.7", country: "uk" },
  { name: "Jaguar GR.1", country: "uk" },
  { name: "Jaguar GR.1A", country: "uk" },
  { name: "Buccaneer S.2", country: "uk" },
  { name: "Sea Vixen FAW.2", country: "uk" },

  // France (continuación)
  { name: "Etendard IVM", country: "france" },
  { name: "Super Etendard", country: "france" },
  { name: "Jaguar A", country: "france" },
  { name: "Mirage 5F", country: "france" },
  { name: "Mirage F1CT", country: "france" },
  { name: "Mirage 2000D", country: "france" },

  // China (continuación)
  { name: "Q-5 Early", country: "china" },
  { name: "Q-5L", country: "china" },
  { name: "JH-7A", country: "china" },
  { name: "FC-1 (JF-17)", country: "china" },

  // Sweden (continuación)
  { name: "A32A Lansen", country: "sweden" },
  { name: "AJS37 Viggen", country: "sweden" },
  { name: "J35D Draken", country: "sweden" },
  { name: "J35XS Draken", country: "sweden" },
  { name: "JAS39C Gripen", country: "sweden" },

  // Italia
  { name: "G.91 pre-serie", country: "italy" },
  { name: "G.91 R/1", country: "italy" },
  { name: "G.91 R/3", country: "italy" },
  { name: "G.91 YS", country: "italy" },
  { name: "F-84G (Italy)", country: "italy" },
  { name: "F-86K (Italy)", country: "italy" },
  { name: "F-104S", country: "italy" },
  { name: "F-104S ASA", country: "italy" },
  { name: "F-104S ASA-M", country: "italy" },
  { name: "AMX", country: "italy" },
  { name: "Tornado IDS (Italy)", country: "italy" },

  // Japón
  { name: "Kikka", country: "japan" },
  { name: "F-86F-30 (Japan)", country: "japan" },
  { name: "F-86F-40 (Japan)", country: "japan" },
  { name: "T-2", country: "japan" },
  { name: "F-1", country: "japan" },
  { name: "F-4EJ", country: "japan" },
  { name: "F-4EJ Kai", country: "japan" },
  { name: "F-15J", country: "japan" },

  // Israel
  { name: "Meteor F.8 (Israel)", country: "israel" },
  { name: "Ouragan (Israel)", country: "israel" },
  { name: "Mystere IVA (Israel)", country: "israel" },
  { name: "Mirage IIICJ", country: "israel" },
  { name: "Nesher", country: "israel" },
  { name: "Kfir C.2", country: "israel" },
  { name: "Kfir C.7", country: "israel" },
  { name: "F-4E Kurnass", country: "israel" },
  { name: "F-16A Netz", country: "israel" },
  { name: "F-16C Barak II", country: "israel" },

    // USA (más variantes y premium/evento)
  { name: "F-4D Phantom II", country: "usa" },
  { name: "F-4S Phantom II", country: "usa" },
  { name: "F-16C Block 40", country: "usa" },
  { name: "F-16C Block 52", country: "usa" },
  { name: "F-15E Strike Eagle", country: "usa" },
  { name: "F/A-18A Hornet", country: "usa" },
  { name: "F/A-18C Late", country: "usa" },
  { name: "AV-8B Harrier II", country: "usa" },
  { name: "AV-8B Plus", country: "usa" },
  { name: "A-6E TRAM", country: "usa" },
  { name: "A-7K Corsair II", country: "usa" },
  { name: "F-20 Tigershark", country: "usa" },
  { name: "F-117 Nighthawk", country: "usa" },

  // USSR / Rusia
  { name: "MiG-21PFM", country: "ussr" },
  { name: "MiG-23BN", country: "ussr" },
  { name: "MiG-25PD", country: "ussr" },
  { name: "MiG-31BM", country: "ussr" },
  { name: "Su-24M2", country: "ussr" },
  { name: "Su-25T", country: "ussr" },
  { name: "Su-25SM", country: "ussr" },
  { name: "Su-27SM", country: "ussr" },
  { name: "Su-35S", country: "ussr" },
  { name: "Su-57", country: "ussr" },

  // Alemania (más moderno)
  { name: "Eurofighter Typhoon (Germany)", country: "germany" },
  { name: "Su-22UM3K (Germany)", country: "germany" },
  { name: "MiG-29G", country: "germany" },
  { name: "MiG-29A (Germany)", country: "germany" },

  // Reino Unido (top tier)
  { name: "Harrier GR.9", country: "uk" },
  { name: "Sea Harrier FA2", country: "uk" },
  { name: "Eurofighter Typhoon (UK)", country: "uk" },
  { name: "Tornado GR.4", country: "uk" },

  // Francia (top tier)
  { name: "Mirage 2000-5EI", country: "france" },
  { name: "Mirage 2000N", country: "france" },
  { name: "Rafale C", country: "france" },
  { name: "Rafale M", country: "france" },

  // China (moderno)
  { name: "J-10A", country: "china" },
  { name: "J-10C", country: "china" },
  { name: "J-16", country: "china" },
  { name: "J-20", country: "china" },

  // Suecia (moderno)
  { name: "JAS39E Gripen", country: "sweden" },
  { name: "JAS39D Gripen", country: "sweden" },
  { name: "Saab F-35", country: "sweden" },

  // Italia (moderno)
  { name: "Eurofighter Typhoon (Italy)", country: "italy" },
  { name: "F-35A (Italy)", country: "italy" },
  { name: "F-35B (Italy)", country: "italy" },

  // Japón (moderno)
  { name: "F-2A", country: "japan" },
  { name: "F-2B", country: "japan" },
  { name: "F-35A (Japan)", country: "japan" },

  // Israel (moderno)
  { name: "F-15I Ra'am", country: "israel" },
  { name: "F-16I Sufa", country: "israel" },
  { name: "F-35I Adir", country: "israel" },

  // Variantes extra (para acercarnos a 500 reales dentro del juego)
  { name: "F-86E Sabre", country: "usa" },
  { name: "F-100F Super Sabre", country: "usa" },
  { name: "MiG-17PF", country: "ussr" },
  { name: "MiG-19S (USSR)", country: "ussr" },
  { name: "Lightning F.2", country: "uk" },
  { name: "Jaguar E", country: "france" },
  { name: "G.91 Y", country: "italy" },
  { name: "T-2 Early", country: "japan" },
  { name: "Kfir C.10", country: "israel" },

    // USA (variantes adicionales reales en WT)
  { name: "F-84E Thunderjet", country: "usa" },
  { name: "F-84G Thunderjet", country: "usa" },
  { name: "F-86A-1 Sabre", country: "usa" },
  { name: "F-86F-30 Sabre", country: "usa" },
  { name: "F-89H Scorpion", country: "usa" },
  { name: "F-101B Voodoo", country: "usa" },
  { name: "F-105F Thunderchief", country: "usa" },
  { name: "A-4B Early", country: "usa" },
  { name: "A-4M Skyhawk", country: "usa" },
  { name: "A-7E Late", country: "usa" },
  { name: "A-10C Thunderbolt II", country: "usa" },

  // USSR / Rusia (más variantes reales)
  { name: "MiG-21S", country: "ussr" },
  { name: "MiG-21MF", country: "ussr" },
  { name: "MiG-23ML", country: "ussr" },
  { name: "MiG-23UB", country: "ussr" },
  { name: "MiG-27D", country: "ussr" },
  { name: "Su-7BMK", country: "ussr" },
  { name: "Su-17M", country: "ussr" },
  { name: "Su-22M4", country: "ussr" },
  { name: "Su-25UB", country: "ussr" },

  // Alemania (variantes/exportaciones)
  { name: "F-104G (Late)", country: "germany" },
  { name: "F-104G (Early)", country: "germany" },
  { name: "Alpha Jet A", country: "germany" },

  // Reino Unido (variantes)
  { name: "Hunter F.4", country: "uk" },
  { name: "Hunter FGA.9", country: "uk" },
  { name: "Lightning F.53", country: "uk" },
  { name: "Harrier GR.5", country: "uk" },
  { name: "Jaguar GR.3", country: "uk" },

  // Francia (variantes)
  { name: "Mystere IIC", country: "france" },
  { name: "Mirage IIIS", country: "france" },
  { name: "Mirage 5BA", country: "france" },
  { name: "Mirage F1EQ", country: "france" },

  // China (variantes)
  { name: "J-6 Late", country: "china" },
  { name: "J-7B", country: "china" },
  { name: "J-7D", country: "china" },
  { name: "Q-5A", country: "china" },

  // Suecia (variantes)
  { name: "J29A Tunnan", country: "sweden" },
  { name: "J32A Lansen", country: "sweden" },
  { name: "AJ37 Late", country: "sweden" },

  // Italia (variantes)
  { name: "G.91 R/4", country: "italy" },
  { name: "AMX A-11", country: "italy" },
  { name: "F-104S Early", country: "italy" },

  // Japón (variantes)
  { name: "F-86F-25 (Japan)", country: "japan" },
  { name: "F-4EJ ADTW", country: "japan" },
  { name: "T-2 Late", country: "japan" },

  // Israel (variantes)
  { name: "A-4H Skyhawk", country: "israel" },
  { name: "A-4N Skyhawk", country: "israel" },
  { name: "F-4E Kurnass 2000", country: "israel" },

  // Variantes “premium/evento” reales del juego
  { name: "F-5A Freedom Fighter", country: "usa" },
  { name: "F-104S TAF", country: "italy" },
  { name: "MiG-21 SPS-K", country: "germany" },
  { name: "Su-25BM", country: "ussr" },
  { name: "A-6E SWIP", country: "usa" },
  { name: "F-4EJ Kai ADTW", country: "japan" },
  { name: "Kfir Canard", country: "israel" },
  { name: "Mirage F1C-200", country: "france" },

    // USA (premium/evento y variantes finales)
  { name: "F-4EJ (US captured)", country: "usa" },
  { name: "F-5A (Premium)", country: "usa" },
  { name: "F-86F-35 Sabre", country: "usa" },
  { name: "A-4E (Premium)", country: "usa" },
  { name: "AV-8B NA", country: "usa" },
  { name: "F-14A Early", country: "usa" },
  { name: "F-16A Block 10", country: "usa" },
  { name: "F-16C PoBIT", country: "usa" },

  // USSR / Rusia
  { name: "MiG-21bis (Premium)", country: "ussr" },
  { name: "MiG-23MLA", country: "ussr" },
  { name: "MiG-29UB", country: "ussr" },
  { name: "Su-17M3", country: "ussr" },
  { name: "Su-25SMT", country: "ussr" },

  // Alemania
  { name: "MiG-21 Lazur-M", country: "germany" },
  { name: "F-4F Early", country: "germany" },

  // Reino Unido
  { name: "Phantom FG.1 (Premium)", country: "uk" },
  { name: "Harrier GR.1 (Premium)", country: "uk" },

  // Francia
  { name: "Mirage IIIE (Premium)", country: "france" },
  { name: "Mirage F1C (Premium)", country: "france" },

  // China
  { name: "J-7II (Premium)", country: "china" },
  { name: "Q-5 Premium", country: "china" },

  // Suecia
  { name: "J35A Draken", country: "sweden" },
  { name: "J29D Tunnan", country: "sweden" },

  // Italia
  { name: "G.91 R/4 (Premium)", country: "italy" },
  { name: "F-104G (Premium Italy)", country: "italy" },

  // Japón
  { name: "F-86F-40 (Premium)", country: "japan" },
  { name: "F-4EJ (Premium)", country: "japan" },

  // Israel
  { name: "Kfir C.2 (Premium)", country: "israel" },
  { name: "A-4E (Israel Premium)", country: "israel" },

  // Extras finales para completar volumen (~500 total sumando todo)
  { name: "F-16D", country: "usa" },
  { name: "F-15EX", country: "usa" },
  { name: "MiG-35", country: "ussr" },
  { name: "Su-75 Checkmate", country: "ussr" },
  { name: "Eurofighter Typhoon Tranche 3", country: "germany" },
  { name: "Tempest (Concept)", country: "uk" },
  { name: "Rafale F4", country: "france" },
  { name: "J-35", country: "china" },
  { name: "Gripen NG", country: "sweden" },
  { name: "F-35B (UK)", country: "uk" },
  { name: "F-35C", country: "usa" }
];

const NACIONES_MAP = {
  usa: "us", germany: "de", ussr: "ru", uk: "gb", 
  japan: "jp", china: "cn", italy: "it", france: "fr", 
  sweden: "se", israel: "il", chile: "cl"
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

let LISTA_AVIONES = [];

// Cargar aviones al iniciar
async function cargarBaseDatosAviones() {
    try {
        const response = await fetch('./aviones.json'); // Ruta a tu archivo
        LISTA_AVIONES = await response.json();
        console.log("Base de datos de aviación cargada");
    } catch (e) {
        console.error("No se pudo cargar la lista de aviones local");
    }
}

// Nueva función de búsqueda local
// ── 3. INICIALIZACIÓN DEL BUSCADOR ──
function initAvionSearch() {
    const input = document.getElementById('avion');
    const results = document.getElementById('apiResults');

    if (!input || !results) {
        console.error("No se encontraron los elementos 'avion' o 'apiResults'");
        return;
    }

    input.addEventListener('input', () => {
        const val = input.value.trim().toUpperCase();
        
        // Si no hay nada escrito, ocultar
        if (!val) {
            results.style.display = 'none';
            return;
        }

        // Filtrar (Basta con que contenga la letra)
        const sugerencias = AVIONES_DATABASE.filter(a => 
            a.name.toUpperCase().includes(val)
        ).slice(0, 8);

        if (sugerencias.length > 0) {
            results.innerHTML = sugerencias.map(a => `
                <div class="api-item" onclick="selectAvion('${a.name}')">
                    <span>${a.name}</span>
                    <img src="https://flagcdn.com/w20/${a.country}.png" style="width:18px">
                </div>
            `).join('');
            results.style.display = 'block'; // MOSTRAR
        } else {
            results.style.display = 'none';
        }
    });

    // Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
        if (e.target !== input) results.style.display = 'none';
    });
}

window.selectAvion = function(nombre) {
    document.getElementById('avion').value = nombre;
    document.getElementById('apiResults').style.display = 'none';
};

function selectAvionLocal(nombre) {
    document.getElementById('avion').value = nombre;
    document.getElementById('apiResults').style.display = 'none';
}

// ── DOM READY ──
document.addEventListener("DOMContentLoaded", () => {
  if (typeof initSupabase === 'function') initSupabase();
  initSupabase();
  applyConfig();
  initNav();
  initHeroDelays();
  initScrollReveal();
  cargarBaseDatosAviones();
  loadMetricas();
  initAvionSearch();
  loadParticipantes();
  initForm();
});

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

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

// ── CARGAR MÉTRICAS ACTUALIZADO ──
async function loadMetricas() {
  let registrados = 0;
  let paises = new Set();
  let aviones = new Set();
  let escuadrones = new Set(); // 👈 Set para clanes únicos
  let nacionCounts = {};

  if (window.db) {
    try {
      // 1. Incluimos la columna 'clan' en la selección
      const { data, error } = await window.db
        .from("registros")
        .select("username, nacion, avion, clan");

      if (!error && data) {
        registrados = data.length;
        data.forEach(r => {
          // Lógica de Naciones
          if (r.nacion) {
            const nacionKey = r.nacion.trim().toLowerCase();
            paises.add(nacionKey);
            nacionCounts[r.nacion] = (nacionCounts[r.nacion] || 0) + 1;
          }

          // Lógica de Aviones
          if (r.avion) {
            aviones.add(r.avion.trim().toLowerCase());
          }

          // Lógica de Escuadrones (Clanes)
          // Filtramos para no contar campos vacíos, nulos o que solo tengan un guion
          if (r.clan && r.clan.trim() !== "" && r.clan.trim() !== "-") {
            // Convertimos a Mayúsculas para que "-STJG-" y "-stjg-" cuenten como el mismo
            escuadrones.add(r.clan.trim().toUpperCase());
          }
        });
      }
    } catch (e) {
      console.warn("Error cargando métricas:", e);
    }
  }

  // 2. Animar los números en las tarjetas
  if (typeof animateCounter === "function") {
    animateCounter(document.getElementById("countRegistrados"), registrados);
    animateCounter(document.getElementById("countPaises"), paises.size);
    animateCounter(document.getElementById("countAviones"), aviones.size);
    
    // 3. Animación para la nueva métrica de Escuadrones
    const elementEscuadrones = document.getElementById("countEscuadrones");
    if (elementEscuadrones) {
      animateCounter(elementEscuadrones, escuadrones.size);
    }

    // Animación para las horas (desde tu archivo CONFIG)
    const elementHoras = document.getElementById("countHoras");
    if (elementHoras && typeof CONFIG !== 'undefined') {
      animateCounter(elementHoras, CONFIG.HORAS_EVENTO);
    }
  }

  // Renderizar el carrusel infinito de banderas
  renderNaciones(nacionCounts, registrados);
}

// ── RENDERIZAR CARRUSEL DE BANDERAS ──
function renderNaciones(counts, total) {
  const marquee = document.getElementById("flagsMarquee");
  if (!marquee) return;

  const flagMap = {
    "ussr": "ru", "ru": "ru", "usa": "us", "us": "us", "china": "cn", "cn": "cn",
    "japan": "jp", "jp": "jp", "germany": "de", "chile": "cl", "uk": "gb", "france": "fr",
    "italy": "it", "sweden": "se", "israel": "il"
  };

  // Si aún no hay suficientes datos reales, rellenamos con naciones estéticas por defecto
  let entries = Object.entries(counts);
  if (entries.length < 5) {
    entries = [
      ['usa',0], ['germany',0], ['ussr',0], ['uk',0], 
      ['japan',0], ['chile',0], ['france',0], ['italy',0]
    ];
  } else {
    entries.sort((a, b) => b[1] - a[1]);
  }

  const flagsHtml = entries.map(([key, count]) => {
    const idLimpio = key.toLowerCase().trim();
    const flagCode = flagMap[idLimpio] || "un";
    
    // Obtenemos el nombre correcto de la constante NACIONES o usamos la llave
    const label = (typeof NACIONES !== 'undefined' && NACIONES[idLimpio]) 
                  ? NACIONES[idLimpio].label 
                  : key.toUpperCase();
    
    const flagUrl = `https://flagcdn.com/w80/${flagCode}.png`;
    
    return `
      <div class="marquee-item">
        <img src="${flagUrl}" alt="${key}" class="marquee-flag">
        <span class="marquee-name">${label}</span>
      </div>
    `;
  }).join("");

  // Duplicamos el contenido (HTML + HTML) para que el CSS haga el efecto de loop infinito sin cortes
  marquee.innerHTML = flagsHtml + flagsHtml;
}

// ── VARIABLES GLOBALES DE PAGINACIÓN ──
let ALL_PARTICIPANTES = [];
let currentPage = 1;
const ROWS_PER_PAGE = 8; // <--- AQUÍ ESTÁ EL CAMBIO (antes era 10)

// ── CARGAR PARTICIPANTES (Descarga los datos) ──
async function loadParticipantes() {
  const tbody = document.getElementById("tablaBody");
  if (!tbody) return;

  if (!window.db) {
    tbody.innerHTML = `<tr><td colspan="5" class="tabla-loading">Error de conexión con la base de datos.</td></tr>`;
    return;
  }

  try {
    // Traemos hasta 500 registros para paginarlos localmente
    const { data, error } = await window.db
      .from("registros")
      .select("id, username, nacion, avion, clan, created_at")
      .order("created_at", { ascending: false })
      .limit(500); 

    if (error) throw error;

    ALL_PARTICIPANTES = data || [];

    if (ALL_PARTICIPANTES.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="tabla-loading">Aún no hay participantes. ¡Sé el primero en registrarte!</td></tr>`;
      document.getElementById("paginationControls").innerHTML = "";
      return;
    }

    // Dibujamos la primera página
    renderTablePage(1);

  } catch (e) {
    console.error("Error cargando participantes:", e);
    tbody.innerHTML = `<tr><td colspan="5" class="tabla-loading">Error al cargar participantes.</td></tr>`;
  }
}

// ── DIBUJAR PÁGINA ESPECÍFICA ──
window.renderTablePage = function(page) {
  const tbody = document.getElementById("tablaBody");
  const totalPages = Math.ceil(ALL_PARTICIPANTES.length / ROWS_PER_PAGE);
  
  // Limites de seguridad para la página
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;
  currentPage = page;

  // Calculamos desde dónde hasta dónde cortar el array
  const startIndex = (page - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const paginatedData = ALL_PARTICIPANTES.slice(startIndex, endIndex);

  // 1. Generamos el HTML de los participantes reales
  let html = paginatedData.map((row, i) => {
    const nacion = (typeof NACIONES !== 'undefined' && NACIONES[row.nacion]) 
                   ? NACIONES[row.nacion] 
                   : { label: row.nacion, flag: "🌍" };
    
    const globalIndex = startIndex + i + 1;

    return `
      <tr>
        <td style="color:var(--dim);opacity:0.5">${String(globalIndex).padStart(2, "0")}</td>
        <td>${escapeHtml(row.username)}${row.clan ? ` <span style="color:var(--accent);font-size:0.75rem">${escapeHtml(row.clan)}</span>` : ""}</td>
        <td>${nacion.flag} ${nacion.label}</td>
        <td>${escapeHtml(row.avion)}</td>
        <td><span class="status-badge">Confirmado</span></td>
      </tr>
    `;
  }).join("");

// 2. Rellenamos con filas "invisibles" si hay menos de 7 registros
  const filasFaltantes = ROWS_PER_PAGE - paginatedData.length;
  for (let j = 0; j < filasFaltantes; j++) {
    // Le agregamos el status-badge para que la altura sea EXACTAMENTE igual a una fila real
    html += `
      <tr style="visibility: hidden; pointer-events: none;">
        <td>00</td>
        <td>Espacio</td>
        <td>-</td>
        <td>-</td>
        <td><span class="status-badge">Confirmado</span></td>
      </tr>
    `;
  }

  // 3. Inyectamos todo el HTML a la tabla
  tbody.innerHTML = html;

  // Dibujar los controles de Anterior/Siguiente
  renderPaginationControls(totalPages);
};

// ── DIBUJAR BOTONES DE PAGINACIÓN ──
function renderPaginationControls(totalPages) {
  const container = document.getElementById("paginationControls");
  if (!container) return;

  // Si hay 7 o menos participantes, no se necesita paginación
  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  // Generamos los botones
  let html = `
    <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="renderTablePage(${currentPage - 1})">
      &laquo; Anterior
    </button>
  `;
  
  html += `<span class="page-info">Pág ${currentPage} de ${totalPages}</span>`;

  html += `
    <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="renderTablePage(${currentPage + 1})">
      Siguiente &raquo;
    </button>
  `;

  container.innerHTML = html;
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

const bgMusic = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');
const musicBtn = document.querySelector('.music-control');
const volumeSlider = document.getElementById('volumeSlider');

// Control de Play/Pause
function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicIcon.textContent = "🔊";
    musicBtn.classList.add('playing');
  } else {
    bgMusic.pause();
    musicIcon.textContent = "📁";
    musicBtn.classList.remove('playing');
  }
}

// Control de Volumen
volumeSlider.addEventListener('input', (e) => {
  const vol = e.target.value;
  bgMusic.volume = vol;
  
  // Cambiar icono si el volumen es 0
  if (vol == 0) {
    musicIcon.textContent = "🔇";
  } else if (!bgMusic.paused) {
    musicIcon.textContent = "🔊";
  }
});

// Sincronizar volumen inicial
bgMusic.volume = volumeSlider.value;