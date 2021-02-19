import Logo from '../../cpp-octo-web.svg'
import React, { Component } from 'react'
import './SideNav.css';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }

  render() {
    console.log(this.sideNavActive)
    return (
      <nav className="sidenav" style={{left: (this.props.sideNavActive) ? '0' : '-300px'}}>
          <img src={Logo} alt="logo"/>
          <nav id="navigation">
              <button onClick={this.props.toggleHomePage} id="home" className="sideButton">Home</button>
              <button onClick={this.props.toggleBlogPage} id="blog" className="sideButton">Blog</button>
          </nav>
          <button onClick={this.props.openFirstPage} type="button" id="logButton">Login</button> 
      </nav>
    )
  }
}

export default SideNav