/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#bf3968",
        
"secondary": "#65f2c5",
        
"accent": "#db4c9d",
        
"neutral": "#22182B",
        
"base-100": "#EDEBEF",
        
"info": "#3594ED",
        
"success": "#12634E",
        
"warning": "#FCA83B",
        
"error": "#F05751",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

