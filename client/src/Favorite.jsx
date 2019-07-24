import React from 'react';
// import App from './App';
//import './App.css';

// var addFavorite;

class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isFav: []
        }
        this.handleFavorite = this.handleFavorite.bind(this);
    }

    handleFavorite(drink) {
        drink.preventDefault();
        const newFaves = this.state.isFav.slice()
        const drinkIndex = newFaves.indexOf(drink);
        if (drinkIndex > -1) {
            // we need to deselect this as a fave
            newFaves.splice(drinkIndex, 1)
        } else {
            // We need to add the drink to faves
            newFaves.push(drink)
        }
        this.setState({
            isFav: newFaves
        })
        console.log(drink)
        console.log(this.state.isFav)
    }
    
    render() {
        return(
            <div className="fav">
                <button className="favbutton"  onClick={this.handleFavorite}>+</button>
            </div>
        )
    }
}


export default Favorite;