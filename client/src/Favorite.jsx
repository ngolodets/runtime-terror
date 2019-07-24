import React from 'react';
// import App from './App';
//import './App.css';

// var addFavorite;

class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isFav: false
        }
        this.handleFavorite = this.handleFavorite.bind(this);
    }

    handleFavorite(e) {
        e.preventDefault();

        this.setState({
            isFav: true
        })
        console.log('clicked!');
        console.log(this.state);
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