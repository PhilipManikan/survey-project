import React, { Component } from 'react';

class ButtonRating extends Component {
    state = {
        value: this.props.value,

    }

    handleChangeText = e => {
        console.log("VALUE ==>", e.target.value)
        this.props.currValue(e.target.value);
        this.setState({
            value: e.target.value,
            [e.target.value]: e.target.value
        });
    }

    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <div className="btn-group btn-group-toggle">
                                <label className={`btn btn-secondary ${this.state.value === 'Not Satisfied' && 'active'}`} >
                                    <input type="radio"
                                        value="Not Satisfied"
                                        checked={this.state.value === '1'}
                                        onClick={this.handleChangeText} /> Not Satisfied
                                </label>
                                <label className={`btn btn-secondary ${this.state.value === '2' && 'active'}`}>
                                    <input type="radio"
                                        value="2"
                                        checked={this.state.value === '2'}
                                        onChange={this.handleChangeText} /> 2
                                </label>
                                <label className={`btn btn-secondary ${this.state.value === '3' && 'active'}`}>
                                    <input type="radio"
                                        value="3"
                                        checked={this.state.value === '3'}
                                        onChange={this.handleChangeText} /> 3
                                </label>
                                <label className={`btn btn-secondary ${this.state.value === '4' && 'active'}`}>
                                    <input type="radio"
                                        value="4"
                                        checked={this.state.value === '4'}
                                        onChange={this.handleChangeText} /> 4
                                </label>
                                <label className={`btn btn-secondary ${this.state.value === 'Completely Satisfied' && 'active'}`}>
                                    <input type="radio"
                                        value="Completely Satisfied"
                                        checked={this.state.value === 'Completely Satisfied'}
                                        onChange={this.handleChangeText} /> Completely Satisfied
                                        </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default ButtonRating;