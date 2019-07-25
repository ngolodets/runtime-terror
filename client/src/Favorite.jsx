import React from 'react';
import axios from 'axios';

class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isFav: false
        }
        this.handleFavorite = this.handleFavorite.bind(this);
    }

    handleFavorite(e, drink) {
        e.preventDefault();
        const newFaves = this.state.isFav.slice()
        const drinkIndex = newFaves.indexOf(drink);
        let config = {
            headers: {
                Authorization: `Bearer ${this.state.token}`
            }
        }
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
        axios.post('/api/drinks', this.props.current._id, config)
            .then( (response) => {
                console.log(response)

            })
        console.log("Drink ",drink)
        console.log("isFave? ",this.state.isFav)
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