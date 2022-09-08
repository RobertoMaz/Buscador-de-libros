import React from 'react';
import './App.css';
import Menu from "./Menu"
import List from "./List"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books: [
        {
        id: 0,
        rating: 4,
        title: "Harry Potter y el cáliz de fuego",
        image: "libro01.jpg"
        },{
        id: 1,
        rating: 3,
        title: "The shining",
        image: "libro02.jpg"
        },{
        id: 2,
        rating: 5,
        title: "Codigo Da Vinci",
        image: "libro03.jpg"
        },{
        id: 3,
        rating: 5,
        title: "El principito",
        image: "libro04.jpg"
        },{
        id: 4,
        rating: 4,
        title: "Sobrenatural",
        image: "libro05.jpg"
        }
        
      ]
    };
  }

  render(){
    return (
      <div className="app">
        <Menu title="Buscador de libros"/>
        <List items={this.state.books}/>
      </div>
    );
  }  
}


export default App;
