import React, { Component } from 'react';

class DD extends Component {
    state = {
        value: this.props.options[0]
    }

    handleChange = e => {
        this.props.currValue(e.target.value);
        this.setState({ value: e.target.value });
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <select className="select" value={this.state.value} onChange={this.handleChange}>
                                {
                                    this.props.options.map((opt, index) => (
                                        <option key={index} value={opt} > {opt}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default DD;