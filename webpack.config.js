const path = require("path"); //se alguém do projeto usar windows essa lib remove o problema da barra.

module.exports = {
  //entry: "src/index.js"
  entry: path.resolve(__dirname, "src", "index.js"), // cada virgula é uma barra
  output: {
    //onde ele vai jogar o nosso bundle, o código transpilado já com o js que o navegador entende
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js" //nome que darei para o arquivo
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // Ele procura o arquivo index.html e automaticamente faz livereload
  },
  module: {
    rules: [
      {
        test: /\.js$/, // se o webpack achar um arquivo js ele indica para o babel transpilar para um código que o browser entenda
        exclude: /node_modules/, // ele não permite que ele seja transpilado porque ele já foram transpilado pelo babel
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
