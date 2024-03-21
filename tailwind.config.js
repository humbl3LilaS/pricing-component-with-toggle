/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "90" : "90%"
      },
      backgroundImage:{
        primary: "linear-gradient( hsl(236, 72%, 79%) ,hsl(237, 63%, 64%))",
        backdropTop: "url(./src/assets/bg-top.svg)",
        backdropBottom: "url(./src/assets/bg-bottom.svg)"
      },
      backgroundColor: {
        body: "hsl(234, 14%, 74%)"
      },
      borderColor:{
        hover: "hsl(232, 13%, 33%)",
        btn: "#b6bdf6"
      },
      textColor: {
        heading: "hsl(232, 13%, 33%)",
        switch: "hsl(233, 13%, 49%)",
        main: "hsl(232, 13%, 33%)",
        btn: '#b6bdf6',
      },
      fontFamily: {
        main: ["Montserrat", 'sans-serif']
      }
    },
  },
  plugins: [],
}

