// tailwind.config.js
module.exports = {
    content: [
     "./src/*.tsx",
     "./src/screens/*.tsx",
     "./src/components/*.tsx"],
    theme: {
      extend: {
        colors: {
          'gray' : {
            200: '#C4C4CC',
            900: '#121214'
          },
          'green' : {
            500: '#015F43'
          }
        }
      },
    },
    plugins: [],
  }