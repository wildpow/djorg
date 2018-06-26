import React from 'react';
import axios from 'axios';

class Rest2 extends React.Component {
  state = { notes: [] }
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/notes')
      .then(res => {
        const notes = res.date;
        this.setState({ notes });
      });
  }
  render() {
    if (typeof this.props.children !== 'function') {
      throw 'Children should be a Function'
    }

    return this.props.children(this.state.notes);
  }
}

export default Rest2 