import React from 'react';
import axios from 'axios';
import DrinkList from './DrinkList'

//mongoose.connect('mongodb://localhost/runtime-terror');

class Drinks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drinks: [],
      drinkName: '',
      //idDrink: Number,
      type: '',
      category: '',
      picture: '',
      glassType: '',
      ingredients: [],
      instructions: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkForDrink

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/drinks', {
      drinks: this.state.drinks,
      drinkName: this.state.drinkName
      
    }).then( (response) => {
      axios.get('/drinks').then( (response) => {
        this.setState({
          drinks: response.data
        })
      })
    })
  }

  // handleDrinkNameChange(e) {
  //   this.setState({
  //     drinkName: e.target.value
  //   })
  // }

  componentDidMount() {
    axios.get("/drinks")
    .then(response => {
      this.setState({
        drink: response.data
      })
    })
  }

  render() {
    return (
      <div className='App'>
        <DrinkList drinks={this.state.drinkName}
                //handleDrinkNameChange={this.handleDrinkNameChange}
                drinkName={this.state.drinkName}
                handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Drinks;