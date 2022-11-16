/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
'./templates/index.html',
'./templates/login.html'],
  theme: {
    extend: {
      animation:{
        marquee:'marquee 3s linear 1',
      },
      keyframes:{
        marquee:{
          '0%':{transform:'translateX(0%)'}, 
          '100%':{transform:'translateX(-100%)'},
        }
      }
    },
  },
  plugins: [],
}
