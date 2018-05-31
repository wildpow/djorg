import React, { Component } from 'react';


class Rest extends Component {
  state = { stuff: []}
  componentWillMount() {
    fetch('http://127.0.0.1:8000/api/notes/')
      .then((stuff) => {
        console.log(stuff.json())
        return stuff.json();
      })
      .then((poop) => {
        this.setState({
          stuff: poop
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <div>
        {this.state.stuff.map((item, index) => (
          <div key={index}>
            {item.title}
            {item.content}
          </div>
        ))}
        {console.log(this.state.stuff)}
      </div>
    );
  }
}

export default Rest;
