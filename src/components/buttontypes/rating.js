import React, { Component } from 'react';


class RadioRating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: ['test1', 'test2', 'test3', 'test4'],
            radio2: '',
            radio3: '',
            radio4: '',
            titleInfo: ''
        }
    }

    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Strongly Disagree</th>
                                        <th scope="col">Disagree</th>
                                        <th scope="col">Neutral</th>
                                        <th scope="col">Agree</th>
                                        <th scope="col">Strongly Agree</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="radio" value="Strongly Disagree" name="answer1" checked={this.props.radio2 === 'Strongly Disagree'} onChange={(e) => this.props.onRadioChange2('Strongly Disagree')} /></td>
                                        <td><input type="radio" value="Disagree" name="answer1" checked={this.props.radio2 === 'Disagree'} onChange={(e) => this.props.onRadioChange2('Disagree')} /></td>
                                        <td><input type="radio" value="Neutral" name="answer1" checked={this.props.radio2 === 'Neutral'} onChange={(e) => this.props.onRadioChange2('Neutral')} /></td>
                                        <td><input type="radio" value="Agree" name="answer1" checked={this.props.radio2 === 'Agree'} onChange={(e) => this.props.onRadioChange2('Agree')} /></td>
                                        <td><input type="radio" value="Strongly Agree" name="answer1" checked={this.props.radio2 === 'Strongly Agree'} onChange={(e) => this.props.onRadioChange2('Strongly Agree')} /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RadioRating;