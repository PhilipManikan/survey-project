import React, { Component } from 'react';

class Rateside extends Component {
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
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        {
                                            this.props.options.map((opt, index) => (
                                                <th key={index} scope="col">{opt}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {
                                            this.props.options.map((opt, index) => (
                                                <td key={index}><input type="radio" id="radio-rating-two" value={this.state[index]} onChange={this.handleChange}  name="choice1" />
                                                <span className="hidden">  {opt}</span>
                                               
                                                </td>
                                            ))
                                        }
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

export default Rateside;