import React from 'react';
import axios from 'axios';
//import DrinkFaves from './DrinkFaves';


const DrinkList = (props) => {
  let drinks = props.drinks.find((drink) => {
    return drink.id === parseInt(props.match.params.id)
  })
    
    // componentDidMount() {
    //   console.log("component did mount")
    //   this.checkForLocalToken()
    //   const url = '/drink';
    //   axios.get(url).then(result => {
    //     this.setState({
    //       apiData: result.data
    //     })
    //   })
    // }
    return (
      
      <div className='drink-show'>
        // <h3>{drinks.drinkName}</h3>
        // <h3>#{drinks.drink.id}</h3>
      </div>
      
    )
}
  // handleSubmit(e) {
  //   e.preventDefault()
  //   axios.post('/drink', {
  //     apiData: this.state.drink
  //   }).then( (response) => {
  //     axios.get('/drink').then( (response) => {
  //       this.setState({
  //         apiData: response.data
  //       })
  //     })
  //   })
  // }

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



//   render() {
//     return (
//         <DrinkList drinks={this.state.drinkName}
//         handleSubmit={this.handleSubmit} />
//     )
//   }
// }

export default DrinkList;