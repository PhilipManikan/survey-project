import React, { Component } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class Star extends Component {
    
    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <h1 >
                                <Rater total={5} rating={0} />
                            </h1>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}





export default Star;
