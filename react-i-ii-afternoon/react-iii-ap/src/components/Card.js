import React, {Component} from 'react';

class Card extends Component {
    constructor(props){
        super(props);

    }


    render(){
        let person = this.props.person
        return(
            
            <div className='wrapper'>
            <div className='card-box'>
                <div className='counter'>
                    {this.props.i + 1} / {this.props.tot}
                </div>
                <h2>{person.name.first} {person.name.last}</h2>
                <h3>From: {person.city}, {person.country}</h3>
                <h3>Job Title: {person.title}</h3>
                <h3>Employer: {person.employer}</h3>
                <br />
                <h3>Favorite Movies: 
                </h3>
                <ol>
                {person.favoriteMovies.map((e, i) => <li key={i}> {e} </li>)}
                </ol>
                </div>
                </div>
        )
    }
}

export default Card;