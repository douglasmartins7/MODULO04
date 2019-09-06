import React, { Component } from "react";

// component pode ser no formato de função ou classe
/* toda vez que a variavel dentro do componente precisar ser manipulada chamamos 
  estado e o nome dela precisa sempre ser state */
/* até pouco tempo não podia ter estado dentro de função apenas na classe  */
/* ele não entende propriedades como estado fora de um construtor, porém se 
for usado sdk @babel/plugin-proposal-class-properties ele aceita*/
//percorrer todo array do state, salvar na tech e imprir na li
//<></> fragment assim você evita div como container que pode atrapalhar a estilização
/* Usamos handleInputChange como arrow function porque  assim ele consegue acessar o this
que acessa o state array newTech, e insere um valor nele, se fosse pela função ele não conseguiria
achar o estado dentro
*/

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJs", "React Native"]
  };

  handleInputchange = e => {
    // lidar com mudança de entrada
    //console.log(e.target.value); ele captura o que será digitado no input e monstra no console
    // as variaveis são imutaveis então precisa criar uma nova com o setState
    // toda vez que o estado do react mudar ele renderiza o front denovo
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    //lidar com enviar
    //e Ele vai receber evento
    /*apertando o botao enviar ele adicione o texto digitado do input na parte superior
      quero que ele repasse o texto do estado newTech para o techs
    */
    e.preventDefault(); // previne de atualizar quando clico no botão enviar, padrão do form
    // não podemos fazer alteração no array e nem no objeto ele é imutavel recrie outro array
    // eu copio tudo que tem dentro do array techs e adiciono como ultimo posição no array novo
    // todo estado do componente(react) é imutavel
    // setState cria um novo estado com as alteração que colocamos no novo objeto
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  handleDelete = tech => {
    // lidar com exclusão
    /* nesse filtro eu recebo cada uma dessas tecnologias e chamo de t
      eu quero filtrar e só vou retornar tecnologias onde t for diferente do
      tech que estou recebendo como parametro, ele retorna todas as tecnologias menos essa tech
    */
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          <h1>{this.state.newTech}</h1>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button onClick={() => this.handleDelete(tech)} type="button">
                Remover
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputchange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
