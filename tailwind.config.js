/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
'./templates/index.html',
'./templates/login.html'],
  theme: {
    extend: {
      animation:{
        marquee:'marquee 3s linear infinite',
        marquee2:'marquee 3s linear infinite'
      },
      keyframes:{
        marquee:{
          '0%':{transform:'translateX(0%)'}, 
          '100%':{transform:'translateX(-100%)'},
        },
        marquee2:{
          '0%':{transform:'translateX(100%)'}, 
          '100%':{transform:'translateX(0%)'},
        }
      }
    },
  },
  plugins: [],
}
