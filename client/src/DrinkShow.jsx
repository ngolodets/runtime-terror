import React from 'react';

const DrinkShow = (props) => {
  // let drink = props.drinks.find((drink) => {
  //   return drink.id === props.match.params.id
  // })
  return (
    <div className='drink-show'>
      <h3>{props.current.drinkName}</h3>
      <h3>{props.current.ingredients}</h3>
      <h4>{props.current.instructions}</h4>
    </div>
  )
}

export default DrinkShow;









