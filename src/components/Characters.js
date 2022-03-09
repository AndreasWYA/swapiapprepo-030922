import React, { Component, useEffect, useState } from "react";
import "../App.css";
import Cards from "./Cards"

class Characters extends React.Component {
    state = {
      people: [],
      loading: true,
      error: false
    }
  
    componentDidMount () {
      fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(response => this.setState({ 
          people: response.results,
          loading: false
        }))
        .catch(error => this.setState({ 
          loading: false, 
          error: true 
        }));
    }
  
    render () {
      const { people, loading, error } = this.state;
      return (
        <div>
          {loading && <div>Loading...</div>}
          {!loading && !error && 
            people.map(character => (
              <div key={character.name}>
                <Cards name={character.name} birthyear={character.birth_year} eyecolor={character.eye_color}/>
              </div>
            ))
          }
          {error && <div>Error message</div>}
        </div>
      );
    }
  };
  
export default Characters;
