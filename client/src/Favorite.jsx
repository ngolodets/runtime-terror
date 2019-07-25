import React from 'react';
import axios from 'axios';
import { userInfo } from 'os';


class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isFav: [],
        favoriteDrinks: null
        }
        this.handleFavorite = this.handleFavorite.bind(this);
    }

    handleFavorite(e, drink) {
        e.preventDefault();
        e.stopPropagation()
        const newFaves = this.state.isFav.slice()
        const drinkIndex = newFaves.indexOf(drink);
        const current = this.props.current ? this.props.current: [];
        //let user = this.state.user
        let config = {
            headers: {
                Authorization: `Bearer ${this.props.token}`
            }
        }
        if (drinkIndex > -1) {
            // we need to deselect this as a fave
            newFaves.splice(drinkIndex, 1)
        } else {
            // We need to add the drink to faves
            newFaves.push(drink)
        }
        axios.post('/api/drinks', current, config)
            .then( (response) => {
                console.log(response.data)
                this.props.refreshUser()
            })
        console.log(config)
    }

    // handleFavorite(e, drink) {
    // //     e.preventDefault();
    // //     const newFaves = this.state.isFav.slice()
    // //     const drinkIndex = newFaves.indexOf(drink);
    // //     let config = {
    // //         headers: {
    // //             Authorization: `Bearer ${this.props.token}`
    // //         }
    // //     }
    // //     if (drinkIndex > -1) {
    // //         // we need to deselect this as a fave
    // //         newFaves.splice(drinkIndex, 1)
    // //     } else {
    // //         // We need to add the drink to faves
    // //         newFaves.push(drink)
    // //     }
    // //     this.setState({
    // //         isFav: newFaves
    // //     })
    // //     axios.post('/api/drinks', this.props.current, config)
    // //         .then( (response) => {
    // //             console.log(response)

    // //         })
    // //     console.log("Drink ",drink)
    // //     console.log("isFave? ",this.state.isFav)
    // // }
    //     e.preventDefault();
    //     e.stopPropagation()
    //     const newFaves = this.state.isFav.slice()
    //     const drinkIndex = newFaves.indexOf(drink);
    //     const current = this.props.current ? this.props.current: [];
    //     let user = this.props.user
    //     let config = {
    //         headers: {
    //             Authorization: `Bearer ${this.props.token}`
    //         }
    //     }
    //     if (drinkIndex > -1) {
    //         // we need to deselect this as a fave
    //         newFaves.splice(drinkIndex, 1)
    //     } else {
    //         // We need to add the drink to faves
    //         newFaves.push(drink)
    //     }
    //     axios.post('/api/drinks', current, config)
    //         .then( (response) => {
    //             console.log(response.data)
    //             user.push({user: response.data})
    //         })
    //     console.log(config)
    // }

    // showFavoriteDrinks() {
    //     //e.preventDefault()
    //     let config = {
    //         headers: {
    //             Authorization: `Bearer ${this.state.token}`
    //         }
    //     }
    //     console.log('config is: ', config)
    //     console.log('attempting axios call')
    //         axios.get('/api/drinks', config).then( result => {
    //         console.log("this is the api response: ", result)
    //         this.setState({
    //             favoriteDrinks: result.data
    //         })
    //         console.log("result is: ", result.data)
    //     })
    // }
    
    render() {
    //     const favoriteDrinks = this.state.favoriteDrinks ? this.state.favoriteDrinks : [];
    //     const favoriteDrinkItems = favoriteDrinks.map((favoriteDrink, i) => {
    //     return(
    //         <p key={i}>
    //             {favoriteDrink. drinkName}
    //             {favoriteDrink._id}
    //         </p>
    //     )
    // })
        return(
            <div className="fav">
                <button className="favbutton"  onClick={this.handleFavorite}>+</button>
                
            </div>
        )
    }
}

export default Favorite;

// import React from 'react';
// import axios from 'axios';
// // import App from './App';
// //import './App.css';
// // var addFavorite;
// class Favorite extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         isFav: []
//         }
//         this.handleFavorite = this.handleFavorite.bind(this);
//     }
    
//     handleFavorite(e, drink) {
//         e.preventDefault();
//         const newFaves = this.state.isFav.slice()
//         const drinkIndex = newFaves.indexOf(drink);
//         const current = this.props.current ? this.props.current: [];
//         let config = {
//             headers: {
//                 Authorization: `Bearer ${this.props.token}`
//             }
//         }
//         axios.post('/api/drinks', this.props.current, config)
//             .then( (response) => {
//                 console.log(response.data)
//             })
        
//         if (drinkIndex > -1) {
//             // we need to deselect this as a fave
//             newFaves.splice(drinkIndex, 1)
//         } else {
//             // We need to add the drink to faves
//             newFaves.push(drink)
//         }
//         console.log(config)
//     }
//     displayFavorite(e) {
//         e.preventDefault()
//         axios.get('/api/drinks', )
//     }
    
//     render() {
//         return(
//             <div className="fav">
//                 <button className="favbutton"  onClick={this.handleFavorite}>+</button>
//             </div>
//         )
//     }
// }
// export default Favorite;


