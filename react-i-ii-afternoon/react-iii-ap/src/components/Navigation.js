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
            <div>
            {/* <div className='previous'> */}
            <button name='previous' onClick={ this.props.handleClick }> &lt; Previous </button>
            <button name='next' onClick={ this.props.handleClick }> Next &gt; </button>
            </div>
        )
    }
}

export default Navigation;