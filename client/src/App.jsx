import React from 'react';
import axios from 'axios';
import './App.css';

import Login from './Login';
import Signup from './Signup';


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

  // Array Destructuring way to handle this
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

  render() {
    var user = this.state.user
    var drinkName = this.props.drinkName
    console.log(user)
    var contents = ''
    if (user) {
      contents = (
        <>
          <p>Hello, {user.name}!</p>
      )
      
    } else {
      contents = (
          <>
            <p>Please signup or login...</p>
            <Login liftToken={this.liftToken} />
            <Signup liftToken={this.liftToken} />
          </>
      );
      <div>
        <p>{this.state.drinkName}</p>
      </div>
    }
    return(
      contents
    )   
  }
}

export default App;