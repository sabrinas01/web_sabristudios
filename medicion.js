// Medición en Microsoft Clarity. GA4 ya recibe los eventos de contacto desde el script de cada página;
// Clarity (de donde salen los datos semanales de Notion) no recibía ninguno, por eso el export traía
// 0 clics de salida y ningún clic en WhatsApp. Acá se los paso a Clarity, y le agrego etiquetas para
// poder filtrar sus grabaciones y mapas de calor por canal, campaña y navegador interno de Instagram.
(function () {
  // Vistas previas, localhost y navegadores automáticos: cada página ya los marca con sinMedicion
  if (window.sinMedicion) return;

  function clarityListo() {
    return typeof window.clarity === 'function';
  }
  function etiquetar(clave, valor) {
    if (clarityListo() && valor) window.clarity('set', clave, valor);
  }
  function evento(nombre) {
    if (clarityListo()) window.clarity('event', nombre);
  }

  // Los navegadores internos de Instagram y Facebook son la mayoría del tráfico real. Se reconocen por
  // el user agent ("Instagram" / "FBAN" / "FBAV"); si no es ninguno, queda "no".
  function detectarNavegadorInterno() {
    var ua = navigator.userAgent || '';
    if (/Instagram/i.test(ua)) return 'instagram';
    if (/FBAN|FBAV|FB_IAB/i.test(ua)) return 'facebook';
    return 'no';
  }

  // utm_medium, utm_campaign y utm_content se guardan en sessionStorage igual que traffic_source, así
  // se conservan al pasar de la landing a una página de proyecto. Si el link nuevo trae UTM, mandan.
  function leerUtm() {
    var datos = {};
    var claves = ['utm_medium', 'utm_campaign', 'utm_content'];
    var params = new URLSearchParams(window.location.search);
    var hayNuevos = claves.some(function (c) { return params.get(c); });
    try {
      if (hayNuevos) {
        claves.forEach(function (c) {
          if (params.get(c)) sessionStorage.setItem(c, params.get(c));
          else sessionStorage.removeItem(c);
        });
      }
      claves.forEach(function (c) { datos[c] = sessionStorage.getItem(c); });
    } catch (e) {
      // Sin sessionStorage (modo privado o navegador interno que lo bloquea): uso solo lo que trae el link
      claves.forEach(function (c) { datos[c] = params.get(c); });
    }
    return datos;
  }

  var navegadorInterno = detectarNavegadorInterno();
  var utm = leerUtm();
  var fuente = null;
  try { fuente = sessionStorage.getItem('traffic_source'); } catch (e) { /* queda sin fuente */ }

  etiquetar('traffic_source', fuente);
  etiquetar('utm_medium', utm.utm_medium);
  etiquetar('utm_campaign', utm.utm_campaign);
  etiquetar('utm_content', utm.utm_content);
  etiquetar('navegador_interno', navegadorInterno);

  // En GA4 el dato viaja en todos los eventos siguientes. Para verlo en los informes hay que registrar
  // "navegador_interno" como dimensión personalizada de evento (Administrar > Definiciones personalizadas).
  if (typeof window.gtag === 'function') window.gtag('set', { navegador_interno: navegadorInterno });

  // Un solo escuchador para toda la página: sirve también para los links que se agreguen después.
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a') : null;
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (href.indexOf('https://wa.me/') === 0) {
      evento('whatsapp_click');
      evento('generate_lead');
    } else if (href.indexOf('https://calendar.google.com/calendar/appointments/') === 0) {
      evento('calendar_click');
      evento('generate_lead');
    } else if (link.classList.contains('project-card')) {
      evento('project_click');
    } else if ((link.getAttribute('aria-label') || '').indexOf('Visitar el sitio web') === 0) {
      evento('project_site_click');
    }
  });
})();
