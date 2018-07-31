import React, { Component } from 'react';

class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opt1: false,
            opt2: false,
            opt3: false,
            opt4: false,
            option1: "option 1",
            option2: "option 2",
            option3: "option 3",
            option4: "option 4"
        }
    }

    option1Clicked() {
        console.log("option 1")
        this.setState({
            opt1: true,
        })
    }
    option1Saved() {
        console.log("option 1 saved")
        var newOption1 = this.state.option1
        this.setState({
            opt1: false,
            option1: newOption1
        })
    }

    option1Clicked() {
        console.log("option 1")
        this.setState({
            opt1: true,
        })
    }
    option1Saved() {
        console.log("option 1 saved")
        var newOption1 = this.state.option1
        this.setState({
            opt1: false,
            option1: newOption1
        })
    }
    option2Clicked() {
        console.log("option 2")
        this.setState({
            opt2: true,
        })
    }
    option2Saved() {
        console.log("option 2 saved")
        var newOption2 = this.state.option2
        this.setState({
            opt2: false,
            option2: newOption2
        })
    }
    option3Clicked() {
        console.log("option 3")
        this.setState({
            opt3: true,
        })
    }
    option3Saved() {
        console.log("option 3 saved")
        var newOption3 = this.state.option3
        this.setState({
            opt3: false,
            option3: newOption3
        })
    }
    option4Clicked() {
        console.log("option 4")
        this.setState({
            opt4: true,
        })
    }
    option4Saved() {
        console.log("option 4 saved")
        var newOption4 = this.state.option4
        this.setState({
            opt4: false,
            option4: newOption4
        })
    }

    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <div>
                                {!this.state.opt1 ?
                                    <h4 onClick={this.option1Clicked.bind(this)}> <input type="radio" id="radio-rating-two" value="choice1" name="option1" />{this.state.option1} </h4>
                                    :
                                    <h4 onClick={this.option1Saved.bind(this)}> <input type="radio" id="radio-rating-two" value="choice1" name="option1" /><input type="text" value={this.state.option1} onChange={(event) => { this.setState({ option1: event.target.value }) }} /></h4>}
                            </div>


                            <div>
                                {!this.state.opt2 ?
                                    <h4 onClick={this.option2Clicked.bind(this)}> <input type="radio" id="radio-rating-two" value="choice1" name="option1" />{this.state.option2} </h4>
                                    :
                                    <h4 onClick={this.option2Saved.bind(this)}> <input type="radio" id="radio-rating-two" value="choice1" name="option1" /><input type="text" value={this.state.option2} onChange={(event) => { this.setState({ option2: event.target.value }) }} /></h4>}
                            </div>

                            <div>
                                {!this.state.opt3 ?
                                    <h4 onClick={this.option3Clicked.bind(this)}> <input type="radio" id="radio-rating-two" value="choice1" name="option1" />{this.state.option3} </h4>
                                    :
                                    <h4 onClick={this.option3Saved.bind(this)}> <input type="radio" id="radio-rating-two" value="choice1" name="option1" /><input type="text" value={this.state.option3} onChange={(event) => { this.setState({ option3: event.target.value }) }} /></h4>}
                            </div>


                            <div>
                                {!this.state.opt4 ?
                                    <h4 onClick={this.option4Clicked.bind(this)}> <input type="radio" id="radio-rating-two" value="choice1" name="option1" />{this.state.option4} </h4>
                                    :
                                    <h4 onClick={this.option4Saved.bind(this)}> <input type="radio" id="radio-rating-two" value="choice1" name="option1" /><input type="text" value={this.state.option4} onChange={(event) => { this.setState({ option4: event.target.value }) }} /></h4>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MultipleChoice;