import React, { Component } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class Star extends Component {
 
    handleChange = ({ rating }) => {
        let star = this.props.currValue(rating);
        console.log(rating)
        this.setState({
            rating: star
        })
    }
    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <h1 >
                                <Rater total={5} rating={0} onRate={this.handleChange}/>
                            </h1>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}





export default Star;
