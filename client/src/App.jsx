import React from 'react';
import axios from 'axios';
import './App.css';
import DrinkShow from './DrinkShow';
import DrinkAll from './DrinkAll';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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
      apiData: null,
      current: {}
    }
    this.checkForLocalToken = this.checkForLocalToken.bind(this);
    this.liftToken = this.liftToken.bind(this);
    this.logout = this.logout.bind(this);
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
    this.displayAllDrinks = this.displayAllDrinks.bind(this)
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
            }, this.displayAllDrinks)
          }
        })
    }
  }

  handleDetailsClick(drinkId) {
    // console.log('fetching details for:', drinkId);
    const url = '/api/drinks/' + drinkId;
    // console.log("url is: ",url);
    let config = {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
    }
    axios.get(url, config).then(result => {
      // console.log(result)
      this.setState({
        current: result.data
      })
    })
  }
  // handleClick(e) {
  //   e.preventDefault()
    // axios.defaults.headers.common['Authorization'] = `Bearer ${this.state.token}`
  //   let config = {
  //     headers: {
  //       Authorization: `Bearer ${this.state.token}`
  //     }
  //   }
  //   axios.get('/locked/test', config).then( res => {
  //     console.log("this is the locked response:", res)
  //     this.setState({
  //       lockedResult: res.data
  //     })
  //   })
  // }

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

  componentDidMount() {
    this.checkForLocalToken()
  }

  displayAllDrinks(e) {
    let config = {
      headers: {
        Authorization: `Bearer ${this.state.token}`
      }
      // console.log('config is: ', config)
      // console.log('attempting axios call')
      axios.get('/api/drinks', config).then( result => {
        // console.log("this is the api response: ", result)
        this.setState({
          apiData: result.data
        })
        // console.log("result is: ", result)
      })
      console.log("result is: ", result)
    })
  }

  render() {
    var user = this.state.user
    // console.log("user is: ",user)
    var contents = '';
    var current = this.state.current;
    // console.log("this is state", this.state);
    if (user) {
      contents = (
        <>
          <p>Hello, {user.name}!</p>
          <p onClick={this.logout}>Logout</p>
          <div>
            <Route exact path='/' render={ props => <DrinkAll apiData={this.state.apiData} token={this.state.token} refreshUser={this.checkForLocalToken} handleDetailsClick={this.handleDetailsClick} {...props} />}/>            
            <Route exact path='/:id' render={ props => <DrinkShow drink={current} {...props} />}/>            
          </div>
        </>
      )
    } else {
      contents = (
        <>
          <p>Please signup or login...</p>
          <Login liftToken={this.liftToken} />
          <Signup liftToken={this.liftToken} />
        </>
      );
    }

    return (
      <Router>
       {contents}
      </Router>  
    )
  }
}

export default App;