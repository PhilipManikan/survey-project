import React, { Component } from 'react';


class Editor extends Component {
    state = {
        addresses: [0],
    }

    componentDidMount() {
        const { options } = this.props;
        this.setState({
            addresses: [...Array(options.length).keys()],
            ...this.generateOptState(options)
        })
    }

    generateOptState = options => {
        let obj = {};
        for (var i = 0; i < options.length; i++) {
            obj[i] = options[i];
        }
        return obj;
    }

    // this.props.options = ['option1', 'option2', 'option3']

    // onSubmit to send new options back to parent (which sends to db)

    // dynamic onchange handler that can handle delete and update

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    removeOption = key => {
        let addresses = [...this.state.addresses];      // copy of addresses in state
        let indexToRemove = addresses.indexOf(key);
        addresses.splice(indexToRemove, 1);
        this.setState({ addresses });
    }

    addOption = () => {
        let a = [...this.state.addresses];
        let lastKey = a[a.length - 1];
        let newKey = lastKey + 1;
        a.push(newKey);

        this.setState(prevState => ({
            ...prevState,
            addresses: a,
            [newKey]: ''
        }))

    }

    saveSettings = () => {
        let arr = [];
        this.state.addresses.forEach(key => {
            arr.push(this.state[key]);
        })
        this.props.saveSettings(arr)
    }

    render() {

        return (
            <div>
                {
                    this.state.addresses.map((key, index) => (
                        <div key={key}>
                            <input className="optionText" type="text"
                                name={key}
                                value={this.state[key]}
                                onChange={this.changeHandler}
                            />
                            <button className="btn btn-danger move" onClick={() => this.removeOption(index)}>x</button>
                        </div>
                    ))
                }
                <button className="btn btn-primary move" onClick={this.addOption}>+</button>
                <button className="btn btn-primary move" onClick={this.saveSettings}>Save</button>
            </div>
        );
    }
}

export default Editor;