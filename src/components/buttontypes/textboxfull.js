import React, { Component } from 'react';

class TextboxFull extends Component {
      render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            <textarea className="textbox-full" value={this.props.info} onChange={this.props.handleChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TextboxFull;