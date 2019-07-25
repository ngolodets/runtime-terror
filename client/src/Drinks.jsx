// import React from 'react';
// import axios from 'axios';
// import Drink from './Drink'
// import Favorite from './Favorite'

// //mongoose.connect('mongodb://localhost/runtime-terror');

// class Drinks extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       drinks: [],
//       drinkName: '',
//       type: '',
//       category: '',
//       picture: '',
//       glassType: '',
//       ingredients: null,
//       instructions: ''
//     }
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault()
//     axios.post('/drinks', {
//       drinks: this.state.drinks,
//       drinkName: this.state.drinkName
      
//     }).then( (response) => {
//       axios.get('/drinks').then( (response) => {
//         this.setState({
//           drinks: response.data
//         })
//       })
//     })
//   }

//   // handleDrinkNameChange(e) {
//   //   this.setState({
//   //     drinkName: e.target.value
//   //   })
//   // }

//   componentDidMount() {
//     axios.get("/drinks")
//     .then(response => {
//       this.setState({
//         drink: response.data
//       })
//     })
//   }

//   render() {

//     {this.state.apiData && this.state.apiData.map(drink => (
//       <div className="drinklist" onClick={() => this.handleDetailsClick(drink._id)}>
//         <img className='drinkImg' src={drink.picture} style={{display: "block"}} />
//         <br />
//         <p style={{display: "block"}}> 
//           {drink.drinkName}
//         </p> 
//       </div>
//     ))}

//     return (
//       <div className='App'>
//         < Drink
//         />
//       </div>
//     )
//   }
// }

// export default Drinks;