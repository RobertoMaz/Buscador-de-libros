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
      ],
      copyBooks: []
    };
  }

  componentDidMount(){
    this.initBooks();
  }

  initBooks = () => {
    this.setState((state, props) => ({
      copyBooks: [...state.books]
    }));
  }

  onAdd = (item) => {
  console.log(item);
  let temporal = [...this.state.books];
  const id = temporal[temporal.length-1].id + 1;
  item["id"] = id;
  temporal.push(item);

  this.setState({books:[...temporal]});
  this.initBooks();
}

onSearch = (query) => {
  if(query ===""){
    this.initBooks();
  } else {
    const temporal = [...this.state.books];
    let res = [];

    temporal.forEach(item => {
      if(item.title.toLocaleLowerCase().indexOf(query) > -1){
        res.push(item);
      }
    });
    this.setState({copyBooks: [...res]}); 
  }
}

onUpdateRating = (item) => {
  const temporal = [...this.state.books];
  const index = temporal.findIndex(el => el.id === item.id);

  temporal[index].title = item.title;
  temporal[index].image = item.image;
  temporal[index].rating = item.rating;

  this.setState({books: [...temporal]});
  this.initBooks();
}

onRemove = (id) => {
  const temporal = [...this.state.books];
  const res = temporal.filter(el => el.id !== id);

  this.setState({books: [...res]});
  this.initBooks();
}

  render(){
    return (
      <div className="app">
        <Menu title="Buscador de libros" onAdd={this.onAdd} onSearch={this.onSearch}/>
        <List 
          items={this.state.copyBooks} 
          onUpdateRating={this.onUpdateRating}
          onRemove={this.onRemove}/>
      </div>
    );
  }  
}


export default App;
