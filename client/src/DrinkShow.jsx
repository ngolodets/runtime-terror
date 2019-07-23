import React from 'react';

const DrinkShow = (props) => {
  let drink = props.drinks.find((drink) => {
    return drink.id === parseInt(props.match.params.id)
  })
  return (
    <div className='drink-show'>
      <h3>{drink.drinkName}</h3>
      <h3>#{drink.ingredients}</h3>
    </div>
  )
}

export default DrinkShow;









