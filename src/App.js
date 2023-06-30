import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Seyi Britto',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://www.linkedin.com/in/britto-seyi-38b393115?originalSubdomain=ng',
      profession: 'Software Developer'
    },
    shows: false,
    mountedTime: 0
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        mountedTime: prevState.mountedTime + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {shows && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt="Profile" />
            <p className="mybio">{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Mounted Time: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
