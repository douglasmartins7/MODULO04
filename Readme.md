Ciclo de vida do componente

// ele é executado assim que o componente aparece em tela, se ele precisa de dados de uma api ela vem dentro dele para ser exibido logo no início
ComponentDidMount() {

}

// Executado sempre que houver alterações na props ou estado, ele recebe esse estado ou props como parametro antes mudar
componentDidUpdate(prevProps, prevState) {
consigo compara o antigo com o novo
nos conseguimos acessar essas alterações de estado ou props com o this.props ou this.state, uma vez elas já alteradas
}

// Executado quando o componente deixa de existir
componentWillUnmount() {

}
