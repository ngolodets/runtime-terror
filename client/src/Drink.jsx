// import React, { Component } from 'react'

// const Drink = (props) => {
//   let drinks = props.drink.find((drink) => {
//     return drink.id === parseInt(props.match.params.id)
//   })
//   return (
//     <div className='issue-show'>
//       <h3>{drinks.drink}</h3>
//       <h3>#{drink.id}</h3>
//     </div>
    
//   )
// }

// export default Drink










// import React from 'react';
// import {Link} from 'react-router-dom';
// import { Recoverable } from 'repl';

// const Drink = (props) => {
//   const drinks = props.drinks && props.drinks.map((drink, i) => (
//     <div key={i}>
//       <Link to={`/drinks/${drink._id}`}>
//       <img className='drinkImg' src={drink.picture} style={{display: "block"}} alt="Cocktail"/>
//       <br />
//       <p style={{display: "block"}}> 
//         {drink.drinkName}
//       </p> </Link>
//     </div>
//   ))
//   return(
//     <h3>drinks</h3>
//   )
// }
// export default Drink;
