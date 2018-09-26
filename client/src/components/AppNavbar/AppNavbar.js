import React, { Component } from 'react';

class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      isOpen: false
    }
  }

  handleToggle() {
    console.log('hello');
    this.setState({
      isOpen: !this.state.isOpen
    }); 
  }

  render() {
    return (
      <div className="navbar navbar-dark bg-dark mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">fBay</a>
          <button 
            className="navbar-toggler colapsed" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarToggler" 
            aria-controls="navbarToggler" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={this.handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " {this.state.isOpen ? "show" : ""} id="navbarToggler">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#link">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppNavbar;