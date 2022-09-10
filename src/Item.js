import React from "react";
import "./Item.css"

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title: "",
            image: "",
            rating: 1,
            stars: []
        }
    }

    componentDidMount(){
        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: this.props.rating,
            stars: Array(parseInt(this.props.rating)).fill(0)
        });
    }

    onChangeRating = (e) => {
        const rating = parseInt(e.target.value);
        this.setState({
            rating: rating,
            stars: Array(rating).fill(0)
        });

        this.props.onUpdateRating({
            id: this.state.id,
            title: this.state.title,
            image: this.state.image,
            rating: this.state.rating
        })
    }

    onRemove = () => {
        this.props.onRemove(this.props.id);
    }


    render(){
        return(
            <div className="item">
                <div className="image">
                    <img src={`./img/${this.state.image}`} alt={this.state.image} width="100%"/>
                </div>
                <div className="title">
                    {this.state.title}
                </div>
                <div className="rating">
                    <p>{
                        this.state.stars.map(el =>
                            <img src="./img/star.png" alt="star" width="32" />)
                    }</p>
                    <h4>Calificación</h4>
                    <select value={this.state.rating} onChange={this.onChangeRating}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="actions">
                    <button onClick={this.onRemove} className="button">Eliminar</button>
                </div>
            </div>
        );
    }
}

export default Item;