import React, {Component} from 'react';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            previous: 0,
            next: 0,
        }
    }

        

    render(){
        return(
            <div className='nav'>
            {/* <div className='previous'> */}
            <button className='navbuttons' name='previous' onClick={ this.props.handleClick }> &lt; Previous </button>
            <button className='navbuttons' name='next' onClick={ this.props.handleClick }> Next &gt; </button>
            </div>
        )
    }
}

export default Navigation;