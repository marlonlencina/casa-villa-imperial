/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    extend: {
      colors: {
        green: "#2A775E",
        greenContrast: "#71B7A1",
        greenDark: "#101D17",
        greenDarkContrast: "#172820",
        white: "#FFFFFF",
        black: "#111211",
        gray100: "#F3F3F3",
        gray400: "#5F5D5B",
        black: "#111211",
        border: "#E3EAE8",
      },
      fontSize: {
        sm10: "0.625rem",
        sm12: "0.75rem",
        sm14: "0.875rem",
        sub24: "1.5rem",
        sub32: "2rem",
        sub40: "2.5rem",
        sub48: "3rem",
        sub56: "3.5rem",
        caption16: "1rem",
        caption18: "1.125rem",
        body14: "0.875rem",
        body16: "1rem",
        body18: "1.125rem",
        body20: "1.25rem",
        button16: "1rem",
        button18: "1.125rem",
        head24: "1.5rem",
        head32: "2rem",
        head40: "2.5rem",
        head48: "3rem",
        head56: "3.5rem",
        head64: "4rem",
      },
      fontFamily: {
        orpheuspro: "orpheuspro",
        syne: "Syne",
        montserrat: "Montserrat",
      },
      backgroundImage: {
        referenciaArquitetonica:
          "url('../assets/bg-referencia-arquitetonica.png')",
      },
    },
  },
  plugins: [],
};
