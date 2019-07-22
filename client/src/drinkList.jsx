import React from 'react';
import axios from 'axios';
import DrinkFaves from './DrinkFaves';


class DrinkList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      filter: 'all',
      faves: []
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/drink', {
      drinkName: this.state.drink
    }).then( (response) => {
      axios.get('/drink').then( (response) => {
        this.setState({
          drink: response.data
        })
      })
    })
  }

  // handleFilterClick(filter) {
  //   console.log('Setting filter to:', filter);
  //   this.setState({
  //     filter
  //   })
  // }

  // handleFaveToggle(drink) {
  //   console.log('toggling film:', drink);
  //   const newFaves = this.state.faves.slice()  // Array.from to create a new copy of an array
  //   const drinkIndex = newFaves.indexOf(drink)
  //   if (drinkIndex > -1) {
  //     //deselect if it a fave
  //     newFaves.splice(drinkIndex, 1)
  //   } else {
  //     // add film to faves
  //     newFaves.push(drink)
  //   }
  //   this.setState({
  //     faves: newFaves
  //   })
  // }



  render() {
    return (
        <DrinkList drinks={this.state.drinkName}
        handleSubmit={this.handleSubmit} />
    )
  }
}

export default DrinkList;