/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
       fontFamily: {
            heading:['Inter', 'sans-serif'],
            sans: ['Inter', 'sans-serif'],
            
       },

       colors:{

        orange: '#E73C17',
        dark: '#2F333A',
        gray: '#F4F5F8',
        gray2: '#F1F1F1',
        green: '#12A05C',
        yellow: '#FF9900',
        purple: '#7F7CF6',
        new: '#191919', 
        gray_soft: '#6F6F6F', 
        gray3: '#D9D9D9'
       }

    },
  },
  plugins: [],
}
