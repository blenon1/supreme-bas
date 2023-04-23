/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        header:"560px",
        rate:"400px",
      },
      fontSize: {
        h1: "3.5rem",
      },
      screens: {
        xs:"320px",
      },
      colors: {
        main:'#080A1A',
        subMain: 'red',
        dry:"#051529",
        star:"yellow",
        text:"#F2F2F2",
        border:"#F2F2F2",
        dryGray:"#BDBDBD",
    },
  },
},
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
