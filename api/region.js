// Función de Vercel que dice si la visita viene de un país donde hace falta pedir consentimiento
// de cookies (Espacio Económico Europeo, Reino Unido y Suiza). Vercel manda el país en el header
// x-vercel-ip-country. No guardo ni devuelvo el país: solo un sí o no.
const PAISES_CON_CONSENTIMIENTO = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV',
  'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH',
];

module.exports = (req, res) => {
  const pais = String(req.headers['x-vercel-ip-country'] || '').toUpperCase();
  // La respuesta depende de quién pregunta, así que no se cachea
  res.setHeader('Cache-Control', 'private, no-store');
  res.status(200).json({ pedirConsentimiento: PAISES_CON_CONSENTIMIENTO.includes(pais) });
};
