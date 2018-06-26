import React, { Component } from 'react';
import axios from 'axios';
import NewStuff from './New';
class Rest extends Component {
  state = { notes: []}
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/notes/')
      .then(res => {
        // console.log(res)
        const notes = res.data;
        console.log(notes)
        this.setState({ notes })
      })
    // fetch('http://127.0.0.1:8000/api/notes/')
    //   .then((stuff) => {
    //     return stuff.json();
    //   })
    //   .then((note) => {
    //     this.setState({
    //       notes: note
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }
  render() {
    return (
      <div>
        {/* {this.state.notes.map((item, index) => (
          <div key={index}>
            {item.title}
            {item.content}
          </div>
        ))} */}
        <NewStuff title="Rest Notes" notes={this.state.notes} Params="Rest"/>
      </div>
    );
  }
}

export default Rest;
