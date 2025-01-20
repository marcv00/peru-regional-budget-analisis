import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 'lima-gradient': 'linear-gradient(69.397deg, #137E33 0%, #145628 100%)',
        // 'loreto-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'amazonas-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'tumbes-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'piura-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'lambayeque-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'cajamarca-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'ancash-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'la-libertad-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'san-martin-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'ucayali-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'huánuco-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'junín-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'pasco-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'ica-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'huancavelica-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'ayacucho-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'apurimac-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'cusco-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'madre-de-dios-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'puno-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'moquegua-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'tacna-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)',
        // 'arequipa-gradient': 'linear-gradient(180deg, #F9F9F9 0%, #F9F9F9 50%, #F9F9F9 100%)', 
      }


      ,
      fontFamily: { 
        raleway: ['var(--font-raleway)']
      }
    },
  },
  plugins: [],
} satisfies Config;
