/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'dark':'#131313',
        'light':'#FFFFFF',
        'violet':'#99449F',
        'ghost-card':'#7B149E',
        'healer-card':'#D616A1',
        'pirate-card':'#C300E3',
        'hunter-card':'#4D098C',
        'arrow-card':'#FF4AFF',
        'shadow-card':'#590E7B'
      },
      width:{
        'lg-card':'540px',
        'md-card':'352px',
        'sm-card':'440px',
        'sec-lg':'820px'
      },
      height:{
        'lg-card':'934px',
        'md-card':'520px',
        'sm-card':'765px',
        'lg':'1080px',
        'sec-lg':'820px'
      },
      borderRadius:{
        'lg':'40px',
        'md':'21px',
        'sm':'12px'
      },
      boxShadow:{
        'card':'0px 0px 0px 0px rgba(113, 55, 185, 0.30), 0px 4px 10px 0px rgba(113, 55, 185, 0.29), 0px 18px 18px 0px rgba(113, 55, 185, 0.26), 0px 40px 24px 0px rgba(113, 55, 185, 0.15), 0px 70px 28px 0px rgba(113, 55, 185, 0.04), 0px 110px 31px 0px rgba(113, 55, 185, 0.01)',
      },
      fontSize:{
        'mobile':'12px',
        'sm':'15px',
        'md':'18px',
        'lg':'24px',
        'sm-sub-heading':'38px',
        'md-sub-heading':'64px',
        'lg-sub-heading':'96px',
        
      },
      fontFamily:{
        'sub-text':[' "Lexend Giga" ', 'sans-serif'],
        'head':[' "Broken Detroit V1" ','sans-serif']
      },
      gap:{
        'sm':'20px',
        'md':'22px',
        'lg':'36px'
      },
      borderWidth:{
        '3':'3px'
      },
      borderColor:{
        'pink':'#D616A1'
      },
      dropShadow:{
        'card':'0 3px 7px #99449F'
      }
    },
  },
  plugins: [],
}

