module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#f3f8f9',
          100: '#d9f1fa',
          200: '#aee1f5',
          300: '#7ac3e5',
          400: '#449fd1',
          500: '#067bc2',
          600: '#2a64a3',
          700: '#244b81',
          800: '#1a335c',
          900: '#0f1f3d',
        },
        royalblue: {
          50: '#f7f9fb',
          100: '#e3f0fd',
          200: '#c6d9fa',
          300: '#9db6f3',
          400: '#7a8eea',
          500: '#6269e3',
          600: '#514cd5',
          700: '#3e39b5',
          800: '#2b2787',
          900: '#181855',
        },
        seagreen: {
          50: '#f4f7f4',
          100: '#e5f0e6',
          200: '#c3e4c8',
          300: '#8cc897',
          400: '#48a666',
          500: '#32893f',
          600: '#2a722d',
          700: '#245625',
          800: '#1a3b1d',
          900: '#122416',
        },
        teal: {
          50: '#f1f7f6',
          100: '#d5f0f6',
          200: '#a4e4ea',
          300: '#6bc9cf',
          400: '#31a8ad',
          500: '#228b8a',
          600: '#1e736f',
          700: '#1b5756',
          800: '#143b3f',
          900: '#0d242c',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
