import React from 'react';
import App from './App';
import './App.css';

class Favorite extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isFav: ''
      }
    }

    handleFavorite(e) {
        e.preventDefault();
        //! if clicked set to true
        this.setState({
            isFav: ''
        })

        let addRemove = ''
        if (props.isFave) {
            addRemove = 'remove_from_queue'
        } else {
            addRemove = 'add_to_queue'
        }
        
        render() {
            return(
                <div className="favbutton">
                <button className={"fav " + addRemove }  onClick={this.handleFavorite}>+</button>
            </div>
        )
    }
}

export default Favorite;