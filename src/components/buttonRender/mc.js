import React, { Component } from 'react';

class MC extends Component {
    state = {
        
    }

    componentDidMount() {
        
        let obj = {};
        this.props.currValue(this.props.options[0]);
        this.props.options.forEach((opt, index) => {
            obj[index] = opt;
        })

        this.setState(obj);
    }
    
    handleChange = e => {
        console.log(e.target.value)
        this.props.currValue(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
     
    }
    render() {
        return (
            <div className="container margin">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col align-self-center">
                            {
                                this.props.options.map((opt, index) => (
                                    <div key={index}>
                                        <h4> <input type="radio" id="radio-rating-two" value={this.state[index]} onChange={this.handleChange}  name="{index}"/> {opt}</h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default MC;