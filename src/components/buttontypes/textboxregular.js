import React, { Component } from 'react';

class TextBoxRegular extends Component {
    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <textarea className="textbox-regular" value={this.props.infoText} onChange={this.props.handleChangeText}></textarea>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default TextBoxRegular;