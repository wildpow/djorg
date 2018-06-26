import React from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import NewStuff from './New'

const Graph2 = ({data: {loading, error, notes}}) => {
  if (error) return <p>error</p>
  if (!loading) {
    return (
      <NewStuff title="GraphQL Notes" notes={notes}/>
    )
  }
  return <div>Loading...</div>
}

export const query = gql`
  query notes {
    notes {
    title
    content
  }
  }
  `

export default graphql(query)(Graph2)