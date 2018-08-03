import React, { Component } from 'react';

class TextboxFull extends Component {
    state = {

    }

    handleChangeText = e => {
        console.log(e.target.value)
        this.props.currValue(e.target.value);
        this.setState({ value: e.target.value });
    }
      render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <textarea className="textbox-full" value={this.state.value} onChange={this.handleChangeText.bind(this)}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TextboxFull;