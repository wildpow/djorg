import React from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid lightslategray;
  border-radius: .4rem;
  background-color: whitesmoke;
  & div {
    display: flex;
    padding: 10px;
    justify-content: space-between;
  }
  & h2 {
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 3rem;
    letter-spacing: .3rem;
    text-decoration: underline;
    font-variant: small-caps;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  }
`
const Note = styled.div`
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  flex-basis: 250px;
  margin-bottom: 20px;
  border-radius: .1rem;
  box-shadow: 0 10px 6px -6px rgba(119, 119, 119, .6);
  background-color: yellow;

  & h4 {
    margin-top: 5px;
    text-align: center;
    border-bottom: 3px solid black;
    border-top: 3px solid black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    padding-bottom: 5px;
    padding-top: 5px;
    margin-bottom: 5px;
  } 
  & p {
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    line-height: 1.3rem;
  }
`
const Graph2 = ({data: {loading, error, notes}}) => {
  if (error) return <p>error</p>
  if (!loading) {
    return (
      <Wrapper>
        <h2>GraphQL Notes</h2>
        <div>
        {notes.map((note, index) => (
          <Note key={index}>
            <h4>{note.title}</h4>
            <p>{note.content}</p>
          </Note>
        ))}
        </div>
      </Wrapper>
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