import React from 'react';
import DD from '../buttonRender/dd';
import TextBoxFull from '../buttontypes/textboxfull';
import StarRating from '../buttontypes/starrating';
import MC from '../buttonRender/mc';
import Rateside from '../buttonRender/rateside';
import ButtonRating from '../buttontypes/buttonrating';
import TextBoxRegular from '../buttontypes/textboxregular';




class Custom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderHelper(type, options){
        switch(type){
            case "Multiple Choice": 
            return <MC options={options} currValue={this.props.currValue}/>
            case  "Text Box Single":
            return <TextBoxRegular options={options} currValue={this.props.currValue} />
            case  "Text Box Full":
            return <TextBoxFull options={options} currValue={this.props.currValue}/>
            case  "Dropdown":
            return <DD options={options} currValue={this.props.currValue}/>
            case  "Star Rating":
            return <StarRating options={options} currValue={this.props.currValue}/>
            case  "Radio Rating":
            return <Rateside options={options} currValue={this.props.currValue}/>
            case  "Button Rating":
            return <ButtonRating options={options} currValue={this.props.currValue}/>
        }
    }
    render() { 
        return this.renderHelper(this.props.type, this.props.options)
    }
}
 
export default Custom;