import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Graph = () => (
  <Query
    query={gql`
      {
        notes {
          title
          content
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <h2>Loading...</h2>;
      if (error) return <h2> Error</h2>

      return data.map(({ title, content}) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      ))
    }}
    </Query>
);

export default Graph