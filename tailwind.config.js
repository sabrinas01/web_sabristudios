/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      // Paleta de colores del sitio (marca + colores del sistema de diseño)
      colors: {
        "on-secondary-fixed": "#001c37",
        "surface-dim": "#dbdad6",
        "tertiary-fixed-dim": "#ffb68c",
        "inverse-surface": "#30312e",
        "surface-container": "#f0eeea",
        "surface-tint": "#455f87",
        "surface-variant": "#e4e2de",
        "secondary-fixed": "#d2e4ff",
        "inverse-on-surface": "#f2f0ec",
        "on-surface": "#1b1c1a",
        "on-primary-fixed": "#001c3b",
        "on-error": "#ffffff",
        "text-strong": "#12202E",
        "error-container": "#ffdad6",
        "on-primary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "surface-container-highest": "#e4e2de",
        "outline": "#74777f",
        "primary-fixed": "#d5e3ff",
        "tertiary-fixed": "#ffdbc9",
        "surface-bright": "#fbf9f5",
        "on-error-container": "#93000a",
        "on-tertiary-container": "#ec894a",
        "tertiary": "#3f1800",
        "secondary-container": "#6fb2fd",
        "on-primary-fixed-variant": "#2d486d",
        "background": "#F5F3EF",
        "input-border": "#D0CCC0",
        "on-tertiary-fixed": "#321200",
        "on-surface-variant": "#43474e",
        "on-tertiary": "#ffffff",
        "outline-variant": "#c4c6cf",
        "border-subtle": "#E8E4D8",
        "on-background": "#1b1c1a",
        "secondary": "#0061a5",
        "primary": "#1E3A5F",
        "on-tertiary-fixed-variant": "#753400",
        "surface-container-low": "#f5f3ef",
        "surface-container-high": "#eae8e4",
        "primary-fixed-dim": "#adc8f5",
        "error": "#ba1a1a",
        "on-secondary-container": "#004375",
        "on-secondary": "#ffffff",
        "on-primary-container": "#8aa4cf",
        "inverse-primary": "#adc8f5",
        "surface": "#fbf9f5",
        "secondary-fixed-dim": "#a0caff",
        "primary-container": "#1e3a5f",
        "on-secondary-fixed-variant": "#00497e",
        "tertiary-container": "#602900",
        "brand-orange": "#D97A3C",
        "brand-orange-hover": "#4A90D9",
        "brand-blue": "#1E3A5F",
        "brand-secondary-blue": "#4A90D9",
        "brand-border": "#E8E4D8"
      },

      // Bordes redondeados reutilizables (ej: "rounded-lg")
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },

      // Espaciados reutilizables (ej: "gap-lg", "px-md")
      spacing: {
        lg: "32px",
        xl: "48px",
        xs: "8px",
        md: "24px",
        base: "8px",
        "container-max": "1200px",
        sm: "16px",
        section: "80px"
      },

      // Familias de fuente por tipo de texto (títulos, botones, párrafos, etc.)
      fontFamily: {
        "headline-h1-mobile": ["Space Grotesk"],
        "headline-h1": ["Space Grotesk"],
        "label-cta": ["Space Grotesk"],
        "headline-h3": ["Space Grotesk"],
        "headline-h2": ["Space Grotesk"],
        "caption": ["Space Grotesk"],
        "body-main": ["Space Grotesk"]
      },

      // Tamaños de fuente con su interlineado, peso, etc. ya definidos
      fontSize: {
        "headline-h1-mobile": ["36px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-h1": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "label-cta": ["14px", { lineHeight: "1", letterSpacing: "0.5px", fontWeight: "500" }],
        "headline-h3": ["24px", { lineHeight: "1.4", fontWeight: "500" }],
        "headline-h2": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "caption": ["12px", { lineHeight: "1.4", fontWeight: "400" }],
        "body-main": ["16px", { lineHeight: "1.5", fontWeight: "400" }]
      },

      // Sombra suave reutilizable (ej: "shadow-ambient")
      boxShadow: {
        ambient: "0 2px 8px rgba(30, 58, 95, 0.08)"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries")
  ]
};
