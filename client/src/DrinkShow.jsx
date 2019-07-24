import React from 'react';

const DrinkShow = (props) => {
  // let drink = props.drinks.findOne((drink) => {
  //   return drink._id === props.match.params._id
  // })
  return (
    <div className='drink-show'>
      <img src={props.drink.picture} alt=""/>
      <h3>{props.drink.drinkName}</h3>
      <h3>{props.drink.ingredients.map(ingredient => (
        {ingredient}
        // {/*ingredient.measure*/}
      ))}</h3>
      <h4>{props.drink.instructions}</h4>
    </div>
  )
}

export default DrinkShow;









