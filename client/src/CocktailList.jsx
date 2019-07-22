import React from 'react';
import axios from 'axios';
import CocktailFaves from './CocktailFaves';

class CockTailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all',
      faves: []
    }
  }

  handleFilterClick(filter) {
    console.log('Setting filter to:', filter);
    this.setState({
      filter
    })
  }

  handleFaveToggle(drink) {
    console.log('toggling film:', drink);
    const newFaves = this.state.faves.slice()  // Array.from to create a new copy of an array
    const cocktailIndex = newFaves.indexOf(drink)
    if (cocktailIndex > -1) {
      //deselect if it a fave
      newFaves.splice(cocktailIndex, 1)
    } else {
      // add film to faves
      newFaves.push(drink)
    }
    this.setState({
      faves: newFaves
    })
  }

  render() {
    return (
        <CocktailFaves />
    )
  }
}

export default CockTailList;