import React, { Component } from 'react';

class Title extends Component {

    render() { 
        return (  
            <div className="text-center">
                <h1 className="letter">
                  {this.props.header} 
                </h1>
            </div>
        );
    }
}
 
export default Title;