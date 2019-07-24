import React from 'react';
import axios from 'axios';
// import Drinks from 'Drinks';
import './App.css';

// import DrinkShow from './DrinkShow';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Favorite from './Favorite';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      user: null,
      errorMessage: '',
      apiData: null
    }
    this.checkForLocalToken = this.checkForLocalToken.bind(this);
    this.liftToken = this.liftToken.bind(this);
    this.logout = this.logout.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  checkForLocalToken() {
    var token = localStorage.getItem('mernToken');
    if (!token || token === 'undefined') {
      // Token is invalid or missing
      localStorage.removeItem('mernToken');
      this.setState({
        token: '',
        user: null
      })
    } else {
      // Token is found in local storage, verify it
      axios.post('/auth/me/from/token', {token})
        .then( res => {
          if (res.data.type === 'error') {
            localStorage.removeItem('mernToken')
            this.setState({
              token: '',
              user: null,
              errorMessage: res.data.message
            })
          } else {
            localStorage.setItem('mernToken', res.data.token);
            this.setState({
              token: res.data.token,
              user: res.data.user,
              errorMessage: ''
            })
          }
        })
    }
  }

  // Regular way to handle this
  // liftToken(data) {
  //   this.setState({
  //     token: data.token,
  //     user: data.user
  //   })
  // }

  handleDetailsClick(drink) {
    console.log('fetching details for:', drink);
    const url = '/drink';
    axios.get(url).then(result => {
      this.setState({
        current: result.data
      })
      console.log(result)
    })
  }

  // Array Destructuring way to handle this
  handleDetailsClick(drink) {
    console.log('fetching details for:', drink);
    const url = '/drink';
    axios.get(url).then(result => {
      this.setState({
        apiData: result.data
      })
      console.log(result)
    })
  }

  liftToken({token, user}) {
    this.setState({
      // can use token: token, OR just
      token,
      user
    })
  }


  logout() {
    // Remove token from local storage
    localStorage.removeItem('mernToken');
    // Remove user and token from state
    this.setState({
      token: '',
      user: null
    })
  }

  // componentDidMount() {
  //   this.checkForLocalToken()
  // }
  componentDidMount() {
    console.log("component did mount")
    this.checkForLocalToken()
    const url = '/drink';
    axios.get(url).then(result => {
      this.setState({
        apiData: result.data
      })
    })
  }

  render() {
    var user = this.state.user
    console.log(user)
    var contents = '';
    if (user) {
      contents = (
        <>
          <p>Hello, {user.name}!</p>
          <p onClick={this.logout}>Logout</p>
          <form action="/" method='GET'>
            <input type="text" name='text' placeholder='Type search request here...'/>
            <input type="submit" value='Search'/>
            {/* <Favorite /> */}
            {/* <p onClick={this.handleDetailsClick}>click this</p> */}
          </form>
            {this.state.apiData && this.state.apiData.map(drink => 
          <div className="drinklist">
                <img className='drinkImg' src={drink.picture} style={{display: "block"}} />
                <br />
                <a href="{drink.drinkName}" style={{display: "block"}}> 
                  <h4>{drink.drinkName}</h4>
                </a> 
          </div>
            )}
        </>
      )
    } else {
      contents = (
          <>
            <p>Please signup or login...</p>
            <Login liftToken={this.liftToken} />
            <Signup liftToken={this.liftToken} />
            {/* <Favorite /> */}
          </>
      );
    }
    return(
      contents
    )
  }
}

export default App;