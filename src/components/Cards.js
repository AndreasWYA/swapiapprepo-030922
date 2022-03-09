import React, { Component } from "react";

class Cards extends React.Component{
    render(){
        return(
            <div className="cardContainer">
                <div key={this.props.name} class="card">
                <h3 className="cardTitle">{this.props.name}</h3>
                <p><span className="cardSubtitle">Birth year</span> {this.props.birthyear}</p>
                <p><span className="cardSubtitle">Eye color</span> {this.props.eyecolor}</p>
                </div>
            </div>
        )
    }
}

export default Cards;

