module.exports = {
  presets: [
    "@babel/preset-env", // alterar o arrow function, import e export, classe para sintaxe antiga que o navegador entende
    "@babel/preset-react" // transformar as coisas do react, como JSX
  ],
  plugins: ["@babel/plugin-proposal-class-properties"] // poder imanipular estado do components ser ser no constructor
};
