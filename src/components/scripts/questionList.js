import React, { Component } from 'react';
require('../firebase/firebaseConfig')
import * as firebase from 'firebase';

import Title from '../helpers/title'
import Dropdown from '../buttontypes/dropdown'
import TextBoxFull from '../buttontypes/textboxfull'
import StarRating from '../buttontypes/starrating'
import MultipleChoice from '../buttontypes/multiplechoice'
import RadioRating from '../buttontypes/rating'
import ButtonRating from '../buttontypes/buttonrating';
import TextBoxRegular from '../buttontypes/textboxregular'
import Custom from '../helpers/custom'
import Editor from '../helpers/editor';


require("firebase/firestore");

class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textBoxSingle: false,
            textBox: false,
            dropDown: false,
            radioRating: false,
            starRating: false,
            buttonRating: false,
            multipleChoice: false,

            surveyname: '',
            questions: [{
                id: "",
                question: "",
                type: "",
                options: []
            }],


            question: "",
            type: "",
            options: ["option1", "option2"],
            id: "",

            survey: [{
                id: "",
                created: ""
            }],

            results: [{
                result: "No Answer"
            }],

            value: '3',
            type: '',

            dataLoaded: false
        }
    }


    //////// To render question list

    componentDidMount() {
        var db = firebase.firestore();

        db.collection("questions").onSnapshot(querySnapshot => {
            this.setState({
                questions: []
            });
            querySnapshot.forEach(doc => {
                this.setState({
                    questions: [...this.state.questions, { id: doc.id, ...doc.data() }]
                });
            })
            this.setState({
                question: "",
                type: "",
                options: [],
                id: "",
                dataLoaded: true
            })
        });
    }

    addList() {
        var db = firebase.firestore();
        if (this.state.id == "") {
            let newfeedbackQuestion = {
                id: this.state.id,
                question: this.state.question,
                type: this.state.type,
                options: [...this.state.options]
            }
            var db = firebase.firestore();
            db.collection("questions").add(newfeedbackQuestion);
        }
        else {
            db.collection("questions").doc(this.state.id).set({
                id: this.state.id,
                question: this.state.question,
                type: this.state.type,
                options: [...this.state.options]

            })
            this.setState({
                id: "",
                question: "",
                type: "",
                options: [],

            })
        }

    }

    deleteQuestion(id) {

        var db = firebase.firestore();

        db.collection("questions").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catach(function (error) {
            console.error("Error on removing document: ", error);
        });
    }

    async addSurvey() {
        var db = firebase.firestore();
        console.log(this.state.questions)
        let { questions, surveyname } = this.state;
        await db.collection('survey').doc(surveyname).set({ questions });

    }

    updateForm(feedback) {

        this.setState({
            question: feedback.question,
            type: feedback.question,
            id: feedback.id
        })
    }


    /////// Show buttons component 
    textBoxSingleShow() {

        this.setState({
            type: "Text Box Single",
            options: " ",
            textBoxSingle: true,
            textBox: false,
            dropDown: false,
            starRating: false,
            radioRating: false,
            buttonRating: false,
            multipleChoice: false
        })
    }

    textBoxShow() {
        this.setState({
            type: "Text Box Full",
            options: " ",
            textBoxSingle: false,
            textBox: true,
            dropDown: false,
            starRating: false,
            radioRating: false,
            buttonRating: false,
            multipleChoice: false
        })
    }

    dropDownShow() {
        this.setState({
            type: "Dropdown",
            textBoxSingle: false,
            textBox: false,
            dropDown: true,
            starRating: false,
            radioRating: false,
            buttonRating: false,
            multipleChoice: false
        })
    }

    starRatingShow() {
        this.setState({
            type: "Star Rating",
            options: " ",
            textBoxSingle: false,
            textBox: false,
            dropDown: false,
            starRating: true,
            radioRating: false,
            buttonRating: false,
            multipleChoice: false
        })
    }

    radioRatingShow() {
        this.setState({
            type: "Radio Rating",
            options: " ",
            textBoxSingle: false,
            textBox: false,
            dropDown: false,
            starRating: false,
            radioRating: true,
            buttonRating: false,
            multipleChoice: false
        })
    }
    buttonRatingShow() {
        this.setState({
            type: "Button Rating",
            options: " ",
            textBoxSingle: false,
            textBox: false,
            dropDown: false,
            starRating: false,
            radioRating: false,
            buttonRating: true,
            multipleChoice: false
        })
    }


    multipleChoiceShow() {
        this.setState({
            type: "Multiple Choice",
            textBoxSingle: false,
            textBox: false,
            dropDown: false,
            starRating: false,
            radioRating: false,
            buttonRating: false,
            multipleChoice: true
        })
    }

    saveSettings = options => {

        this.setState({
            options: options
        })
    }

    currValueCreator = id => value => {

        this.setState({
            result: this.state.result
        })
    }

    render() {
        return (
            <div className="container">
                <Title header="Survey Edit" />

                <div className="row justify-content-md-center">

                    <div className="col col-lg-9 space" >

                        {this.state.dataLoaded == true && this.state.questions.map((list, index) => {
                            return (
                                <div key={index} >
                                    <div className="otherLetterB space" >{list.id}.
                                        {list.question} </div>
                                    <div>
                                        <Custom type={list.type} options={list.options} currValue={this.currValueCreator(list.id)} />
                                    </div>
                                    <br />
                                    <div>
                                        <button className="btn btn-outline-secondary otherLetterB" onClick={this.updateForm.bind(this, list)}>
                                            Update
                                            </button>
                                        <button className="btn btn-outline-danger otherLetterB" onClick={this.deleteQuestion.bind(this, list.id)}>
                                            Remove
                                            </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className="bgc">
                    <Title header="Create or Edit Question" />
                    <div className="form-row">
                        <div className="form-group col-md-1">
                            <input type="text" className="form-control" placeholder="Number" aria-label="Number" aria-describedby="basic-addon1" value={this.state.id} onChange={(e) => { this.setState({ id: e.target.value }) }} />
                        </div>
                        <div className="form-group col-md-11">
                            <input type="text" className="form-control" placeholder="Question" aria-label="Question" aria-describedby="basic-addon1" value={this.state.question} onChange={(e) => { this.setState({ question: e.target.value }) }} />
                        </div>
                    </div>
                    <div className="container">
                        <div className=".col-lg-6 height" id="scroll">
                            <Title header="Sample" />
                            <div> {this.state.textBox ? <TextBoxFull /> : null}  </div>
                            {this.state.textBoxSingle ? <div> <TextBoxRegular />       </div> : null}
                            {this.state.starRating ? <div> <StarRating />           </div> : null}


                            {this.state.dropDown ?
                                <div className="col-sm">
                                    <Dropdown />
                                    <div className="col-sm" >
                                        <Editor options={['Select Dropdown', 'option 1', 'option 2']} saveSettings={this.saveSettings} />
                                    </div >
                                </div> : null}


                            {this.state.radioRating ?

                                <div className="col-sm">
                                    <RadioRating />

                                    <div className="col-sm" >
                                        <Editor options={['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']} saveSettings={this.saveSettings} />
                                    </div >
                                </div > : null}


                            {this.state.buttonRating ? <div> <ButtonRating />         </div> : null}


                            {this.state.multipleChoice ? <div className="row">
                                <div className="col-sm">
                                    <MultipleChoice />
                                </div>
                                <div className="col-sm" >
                                    <Editor options={['option1', 'option2', 'option3', 'option4']} saveSettings={this.saveSettings} />
                                </div >
                            </div> : null}


                        </div>
                    </div>
                    <div className="btn-group btn-group-toggle optionA space ">

                        <label className={`btn btn-secondary otherLetterB  ${this.state.type === 'Text Box Single' && 'active'}`}>
                            <input type="radio" name="option11" value="Text Box Single" checked={this.state.type === 'Text Box Single'} onChange={(e) => { this.textBoxSingleShow() }} /> Text Box Single
                                </label>

                        <label className={`btn btn-secondary otherLetterB  ${this.state.type === 'Text Box' && 'active'}`}>
                            <input type="radio" name="option2" value="Text Box" checked={this.state.type === 'Text Box'} onChange={(e) => { this.textBoxShow() }} /> Text Box Full
                                </label>


                        <label className={`btn btn-secondary otherLetterB  ${this.state.type === 'Dropdown' && 'active'}`}>
                            <input type="radio" name="option3" value="Dropdown" checked={this.state.type === 'Dropdown'} onChange={(e) => { this.dropDownShow() }} /> Dropdown
                                </label>


                        <label className={`btn btn-secondary otherLetterB ${this.state.type === 'Star Rating' && 'active'}`}>
                            <input type="radio" name="option4" value="Star Rating" checked={this.state.type === 'Star Rating'} onChange={(e) => { this.starRatingShow() }} /> Star Rating
                                </label>


                        <label className={`btn btn-secondary otherLetterB ${this.state.type === 'Radio Rating' && 'active'}`}>
                            <input type="radio" value="Radio Rating" checked={this.state.type === 'Radio Rating'} onChange={(e) => { this.radioRatingShow() }} /> Radio Rating
                                </label>

                        <label className={`btn btn-secondary otherLetterB ${this.state.type === 'Button Rating' && 'active'}`}>
                            <input type="radio" name="options6" value="Button Rating" checked={this.state.type === 'Button Rating'} onChange={(e) => { this.buttonRatingShow() }} /> Button Rating
                                </label>

                        <label className={`btn btn-secondary otherLetterB ${this.state.type === 'Multiple Choice' && 'active'}`}>
                            <input type="radio" value="Multiple Choice" checked={this.state.type === 'Multiple Choice'} onChange={(e) => { this.multipleChoiceShow() }} /> Multiple Choice
                                </label>


                    </div>
                </div>
                <button onClick={this.addList.bind(this)} className="btn btn-success btn-lg btn-block space otherLetterB">
                    Add Update
                </button>
                <div>
                    <div>
                        <input type="text" className="form-control" placeholder="Survey Name" aria-label="Survey Name" aria-describedby="basic-addon1" value={this.state.surveyname} onChange={(e) => { this.setState({ surveyname: e.target.value }) }} />

                    </div>
                    <button className="btn btn-primary btn-lg btn-block space otherLetterB"
                        onClick={this.addSurvey.bind(this)}
                    >
                        Create Survey
                    </button>
                </div>
            </div>
        );
    }
}

export default QuestionList;