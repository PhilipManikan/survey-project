import React, { Component } from 'react';

class ButtonRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio1: ''

        }
    }

    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className={`btn btn-secondary ${this.props.radio1 === '1' && 'active'}`} >
                                    <input type="radio" value="1" name="answer1" checked={this.props.radio1 === '1'} onChange={(e) => this.props.onRadioChange1('1')} /> Not Satisfied
                                </label>
                                <label className={`btn btn-secondary ${this.props.radio1 === '2' && 'active'}`}>
                                    <input type="radio" value="2" name="answer2" checked={this.props.radio1 === '2'} onChange={(e) => this.props.onRadioChange1('2')} /> 2
                                </label>
                                <label className={`btn btn-secondary ${this.props.radio1 === '3' && 'active'}`}>
                                    <input type="radio" value="3" name="answer3" checked={this.props.radio1 === '3'} onChange={(e) => this.props.onRadioChange1('3')} /> 3
                                </label>
                                <label className={`btn btn-secondary ${this.props.radio1 === '4' && 'active'}`}>
                                    <input type="radio" value="4" name="answer4" checked={this.props.radio1 === '4'} onChange={(e) => this.props.onRadioChange1('4')} /> 4
                                </label>
                                <label className={`btn btn-secondary ${this.props.radio1 === '5' && 'active'}`}>
                                    <input type="radio" value="5" name="answer5" checked={this.props.radio1 === '5'} onChange={(e) => this.props.onRadioChange1('5')} /> Completely Satisfied
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