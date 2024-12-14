module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: 'rgb(169, 0, 12)', 
        maliesred: 'rgb(255,0,0)',
        gwen: 'rgb(171,8,125)',
        peter : 'rgb(78,16,185)',
        pavitrprabhakar : 'rgb(215,144,1)',
      },
      fontFamily: {
        inspiration: ["Inspiration", "cursive"],
        mrBedfort: ["Mr Bedfort", "cursive"],
        rugeBoogie: ["Ruge Boogie", "cursive"],
        Combo: ["Combo", "cursive"],
      },
      animation: {
        'ripple-out-in': 'ripple-out-in 1.2s ease-out infinite', // Infinite looping animation
      },
      keyframes: {
        'ripple-out-in': {
          '0%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0.6' },
          '50%': { transform: 'translate(-50%, -50%) scale(2)', opacity: '0.3' },
          '100%': { transform: 'translate(-50%, -50%) scale(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
