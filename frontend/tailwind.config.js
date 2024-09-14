/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-image": `url('/path/to/static-image.jpg')`,
      }),
    },
  },
  plugins: [],
};
