import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option1: "Select dropdown",
            option2: "option 1",
            option3: "option 2",
            option4: "option 3"
        }
    }
    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <select className="select">
                  
                                    <option>{this.state.option1}</option>
                                    <option>{this.state.option2}</option>
                                    <option>{this.state.option3}</option>
                                    <option>{this.state.option4}</option>
                         
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dropdown;