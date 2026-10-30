// Consentimiento de cookies para Google Analytics y Microsoft Clarity.
// Cada página ya deja las cookies de GA4 denegadas por defecto solo para el Espacio Económico
// Europeo, Reino Unido y Suiza (gtag 'consent' 'default' con "region"). Acá decido si mostrar el
// aviso y paso a GA4 y Clarity lo que elija la persona. Fuera de esos países no se muestra nada.
(function () {
  var CLAVE = 'consentimiento';

  function leer() {
    try { return localStorage.getItem(CLAVE); } catch (e) { return null; }
  }
  function guardar(valor) {
    try { localStorage.setItem(CLAVE, valor); } catch (e) { /* sin almacenamiento: se vuelve a preguntar */ }
  }

  function aplicar(otorgado) {
    var estado = otorgado ? 'granted' : 'denied';
    if (typeof gtag === 'function') {
      gtag('consent', 'update', {
        analytics_storage: estado,
        ad_storage: estado,
        ad_user_data: estado,
        ad_personalization: estado,
      });
    }
    if (typeof window.clarity === 'function') {
      window.clarity('consentv2', { ad_Storage: estado, analytics_Storage: estado });
    }
  }

  function cerrar(banner) {
    if (banner && banner.parentNode) banner.parentNode.removeChild(banner);
  }

  function mostrarBanner() {
    if (document.getElementById('aviso-cookies')) return;
    var banner = document.createElement('div');
    banner.id = 'aviso-cookies';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Preferencias de cookies');
    banner.className = 'fixed bottom-0 inset-x-0 z-[60] bg-white border-t border-gris-claro shadow-fuerte p-sm md:p-md';
    banner.innerHTML =
      '<div class="max-w-container-max mx-auto flex flex-col md:flex-row md:items-center gap-sm md:gap-md">' +
        '<p class="font-caption text-caption text-texto-fuerte flex-1">' +
          'Uso cookies de Google Analytics y Microsoft Clarity para entender cómo se usa la página. ' +
          'Podés aceptarlas o rechazarlas, y la página funciona igual. ' +
          '<a href="politica-de-privacidad.html#cookies" class="text-naranja-texto hover:underline">Más información</a>.' +
        '</p>' +
        '<div class="flex flex-col sm:flex-row gap-xs">' +
          '<button type="button" data-consentimiento="denied" class="border border-azul-primario bg-gris-neutro text-azul-primario hover:bg-gris-claro font-label-cta text-label-cta font-medium px-sm py-[12px] rounded-lg transition-colors duration-200">Rechazar</button>' +
          '<button type="button" data-consentimiento="granted" class="bg-naranja hover:bg-naranja-hover text-texto-fuerte font-label-cta text-label-cta font-medium px-sm py-[12px] rounded-lg transition-colors duration-200">Aceptar</button>' +
        '</div>' +
      '</div>';
    banner.addEventListener('click', function (e) {
      var boton = e.target.closest('button[data-consentimiento]');
      if (!boton) return;
      var otorgado = boton.getAttribute('data-consentimiento') === 'granted';
      guardar(otorgado ? 'granted' : 'denied');
      aplicar(otorgado);
      cerrar(banner);
    });
    document.body.appendChild(banner);
  }

  // Lo usa el botón "Cambiar preferencias de cookies" de la política de privacidad
  window.mostrarPreferenciasCookies = mostrarBanner;

  var guardado = leer();
  if (guardado) {
    aplicar(guardado === 'granted');
    return;
  }

  fetch('/api/region', { cache: 'no-store' })
    .then(function (r) { return r.json(); })
    .then(function (datos) {
      if (!datos || !datos.pedirConsentimiento) return;
      aplicar(false);
      mostrarBanner();
    })
    .catch(function () { /* si no puedo saber el país, no muestro nada */ });
})();
