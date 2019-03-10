import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'

class SignOutBtn extends Component {
  state = {signedIn: true}

  handleOnClick = () => {
    console.log(this.props)
    this.props.handleSignOut()
    this.props.history.push('/signup')
    // this.setState({signedIn: false})
    
  }

  render() {
    const signOutBtn = (this.props.username && this.props.accessToken) ? 
      (<button onClick={this.handleOnClick}>Sign Out</button>) : null

    // if (!this.state.signedIn) {
    //   return <Redirect from='/todos' to='/' />
    // }  
    
    return (
      <div >
        {signOutBtn}
      </div>
    )
  }
}

export default SignOutBtn;
