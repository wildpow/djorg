import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Graph3 = ({data: { loading, error, notes }}) => {
  if(error) return <h1>This is crazy!</h1>
  if(!loading) {
    return (
      <div>
        {notes.map((note, index) => (
          <div key={index}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    )
  }
  return <h1>Loading...</h1>
}

export const Query = gql`
  Query Notes {
    note{
      title
      content
    }
  }
`
export default graphql(Query)(Graph3)