/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      // Blue
      'Primary/B900': '#4078FF',
      'Primary/B800': '#5C83FF',
      'Primary/B700': '#728FFF',
      'Primary/B600': '#869AFF',
      'Primary/B500': '#97A6FF',
      'Primary/B400': '#A8B2FF',

      // Neutral
      'Neutral/Black/B900': '#0E1422',
      'Neutral/Black/B800': '#202533',
      'Neutral/Black/B700': '#333845',
      'Neutral/Black/B600': '#474B57',
      'Neutral/Black/B500': '#5C5F6A',
      'Neutral/Black/B400': '#71747E',

      // Neutral White
      'Neutral/White/W200': '#E9E9EB',
      'Neutral/White/W100': '#F6F6F6',
      'Neutral/White/W900': '#FFFFFF',

      // Semantic
      // Semantic Blue

      'Semantic/Blue/B900': '#306CEF',
      'Semantic/Blue/B800': '#477CF1',
      'Semantic/Blue/B700': '#5E8CF3',
      'Semantic/Blue/B600': '#759DF4',
      'Semantic/Blue/B500': '#8CADF6',
      'Semantic/Blue/B400': '#A3BEF8',

      // Semantic Green
      'Semantic/Green/G900': '#057234',
      'Semantic/Green/G800': '#2C7F45',
      'Semantic/Green/G700': '#458B56',
      'Semantic/Green/G600': '#5A9868',
      'Semantic/Green/G500': '#6FA479',
      'Semantic/Green/G400': '#83B18B',

      // Semantic Red
      'Semantic/Red/R900': '#BE1313',
      'Semantic/Red/R800': '#C83727',
      'Semantic/Red/R700': '#D14F3A',
      'Semantic/Red/R600': '#D9644E',
      'Semantic/Red/R500': '#E17862',
      'Semantic/Red/R400': '#E88C77',

      // Semantic Yellow
      'Semantic/Yellow/R900': '#F3B40A',
      'Semantic/Yellow/R800': '#F6BB33',
      'Semantic/Yellow/R700': '#F9C14C',
      'Semantic/Yellow/R600': '#FBC862',
      'Semantic/Yellow/R500': '#FDCF76',
      'Semantic/Yellow/R400': '#FFD58A',
    },
    fontSize:{
      'h1': '40px',
      'h2': '32px',
      'h3': '24px',
      'h4': '18px',
      'h5': '16px',
      'h6': '14px',
      'p': '14px',
      'span': '12px',
    },
    screens: {
      sm: '390px',
      md: '1024px',
    },

    extend: {}
  },
  plugins: [],
}

