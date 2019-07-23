import React from 'react';
import Drinks from './Drinks'

const DrinkList = props => {
  let drinks;
  if ( props.drinks.length ) {
    drinks = props.drinks.map((drinks, i) => {
      return <p className='drinkrow' key={i}>{drinks.drinkName}</p>
    })
  } else {
    drinks = <p>Drink not created yet</p>
  }

  return (
    <div className='DrinkList'>
      <Drinks drink={drinks.drinkName} />
      {/* <form action={drinks} method="GET">
        <input type="text" name={props.drinkName} />
        <input type="submit" value="Add Drink"/>
      </form> */}
    </div>
    
  );
}

export default DrinkList;


      // filter: 'all',
      // faves: []
    //}
    // this.handleSubmit = this.handleSubmit.bind(this)
  //}

  // handleSubmit(e) {
  //   e.preventDefault()
  //   axios.post('/drink', {
  //     drinkName: this.state.drinkName
  //   }).then( (response) => {
  //     axios.get('/drink').then( (response) => {
  //       this.setState({
  //         drinkName: response.data
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

  // componentDidMount() {
  //   axios.get("/drinks")
  //   .then(res => {
  //     this.setState({
  //       drinks: res.data
  //     })
  //   })
  // }


  //render() {
  