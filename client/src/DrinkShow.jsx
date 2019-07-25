
import React from 'react';

const DrinkShow = (props) => {
  const ingredients = props.drink.ingredients ? props.drink.ingredients: [];
  const ingredientItems = ingredients.map((ingredient, i) => {
    return(
    <p key={i}>
      {ingredient. measure}
      {ingredient.ingredient}
    </p>
    )
  })

  //{ingredientItems}
  // function NumberList(props) {
  //   const numbers = props.numbers;
  //   const listItems = numbers.map((number) =>
  //     <li key={number.toString()}>
  //       {number}
  //     </li>
  //   );
  return (
    <div className='drink-show'>
      <img src={props.drink.picture} alt=""/>
      <h3>{props.drink.drinkName} is a {props.drink.category} served in a {props.drink.glassType}</h3>
      <h4>{props.drink.instructions}</h4>
      <p>The list of ingredients:
        {ingredientItems}
      </p>
    </div>
  )
}
export default DrinkShow;