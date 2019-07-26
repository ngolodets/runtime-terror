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
  return (
    <>
      <div className="greetingbox">
        <h3 style={{textTransform: 'uppercase'}}>{props.drink.drinkName}</h3>
        <h5>This tasty {/*props.drink.category*/}drink is usually served in a(n) {props.drink.glassType}</h5>
      </div>
      <div className='drink-show'>
        <img src={props.drink.picture} className="singledrinkpic"/>
        <h3 className='drinkinstructions'>To make this cocktail:</h3>
        <h4>{props.drink.instructions}</h4>
        <p className='drinkinstructions'>INGREDIENTS:
          {ingredientItems}
        </p>
    </div>
    </>
  )
  
}
export default DrinkShow;