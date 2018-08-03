import React, { Component } from 'react';

class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {

            option1: "option 1",
            option2: "option 2",
            option3: "option 3",
            option4: "option 4"
        }
    }

    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <div>
                                <h4> <input type="radio" id="radio-rating-two" value="choice1" name="option1" />{this.state.option1} </h4>
                            </div>
                            <div>
                                <h4> <input type="radio" id="radio-rating-two" value="choice1" name="option1" />{this.state.option2} </h4>
                            </div>
                            <div>
                                <h4> <input type="radio" id="radio-rating-two" value="choice1" name="option1" />{this.state.option3} </h4>
                            </div>
                            <div>
                                <h4> <input type="radio" id="radio-rating-two" value="choice1" name="option1" />{this.state.option4} </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MultipleChoice;