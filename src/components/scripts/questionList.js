import React, { Component }
    from 'react'; require('../firebase/firebaseConfig')
import * as firebase from 'firebase';

import Title from '../helpers/title'
import Dropdown from '../buttontypes/dropdown'
import TextBoxFull from '../buttontypes/textboxfull'
import StarRating from '../buttontypes/starrating'
import MultipleChoice from '../buttontypes/multiplechoice'
import RadioRating from '../buttontypes/rating'
import ButtonRating from '../buttontypes/buttonrating';
import TextBoxRegular from '../buttontypes/textboxregular'


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
            feedbackQuestion: [{
                number: "",
                question: "",
                type: ""
            }],
            number: "",
            question: "",
            type: "",
            id: "",
            survey: [{
                surveyname: "",
                created: ""
            }],
            surveyname: "",
            created: "",
            info: '',
            infoText: '',
            radio: '',
            radio2: '',
            radio3: '',
            radio4: '',
            rating: '',
            type: ''


        }
    }


    //////// To render question list

    componentDidMount() {
        var db = firebase.firestore();
        db.collection("feedbackQuestion").onSnapshot(querySnapshot => {
            this.setState({
                feedbackQuestion: []
            });
            querySnapshot.forEach(doc => {
                this.setState({
                    feedbackQuestion: [...this.state.feedbackQuestion, { id: doc.id, ...doc.data() }]
                });
            })
            var sortNumber = [...this.state.feedbackQuestion];
            this.setState({
                feedbackQuestion: sortNumber.sort((a, b) => a.number - b.number)
            })

            this.setState({
                number: "",
                question: "",
                type: "",
                id: ""
            })
        });
    }

    addList() {
        var db = firebase.firestore();
        if (this.state.id == "") {
            let newfeedbackQuestion = {
                number: this.state.number,
                question: this.state.question,
                type: this.state.type
            }
            var db = firebase.firestore();
            db.collection("feedbackQuestion").add(newfeedbackQuestion);

        }
        else {
            db.collection("feedbackQuestion").doc(this.state.id).set({
                number: this.state.number,
                question: this.state.question,
                type: this.state.type
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

            this.setState({
                number: "",
                question: "",
                type: "",
                id: ""
            })
        }

    }

    deleteQuestion(id) {

        var db = firebase.firestore();

        db.collection("feedbackQuestion").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catach(function (error) {
            console.error("Error on removing document: ", error);
        });
    }

    addSurvey() {
        var db = firebase.firestore();
        db.collection("feedbackQuestion").onSnapshot(querySnapshot => {
            this.setState({
                feedbackQuestion: []
            });
            querySnapshot.forEach(doc => {
                this.setState({
                    feedbackQuestion: [...this.state.feedbackQuestion, { id: doc.id, ...doc.data() }]
                });
            })
        });
        let newsurvey =
        {
            surveyname: this.state.surveyname,
            created: this.state.created,
            feedbackQuestion: [...this.state.feedbackQuestion]

        }
        var db = firebase.firestore();
        db.collection("survey").add(newsurvey);

        this.setState({
            surveyname: "",
            created: "",
            id: ""
        })
    }

    updateForm(feedback) {

        this.setState({
            number: feedback.number,
            question: feedback.question,
            type: feedback.question,
            id: feedback.id
        })
    }

    //SELECT OPTION COMPONENT
    handleSelectChange = (event) => {
        console.log('clicked value: ' + event.target.value)
        this.setState({
            option: event.target.value
        })

    }

    //MULTIPLE CHOICE 1
    onRadioChange2(value) {
        console.log("radio2 clicked");
        this.setState({
            radio2: value,
        })
    }
    //MULTIPLE CHOICE 2
    onRadioChange3(value) {
        console.log("radio3 clicked");
        this.setState({
            radio3: value,
        })
    }
    //MULTIPLE CHOICE 3
    onRadioChange4(value) {
        console.log("radio4 clicked");
        this.setState({
            radio4: value,
        })
    }


    //BUTTON RATING
    onRadioChange1(value) {
        console.log("radio change");
        this.setState({
            radio1: value,
        })
        console.log(this.state.radio1)
    }

    //RATING RADIO
    onRadioChange(value) {
        console.log("radio change");
        this.setState({
            radio: value,
        })
        console.log(this.state.radio)
    }


    //TEXTBOX LARGE
    handleChange(event) {
        this.setState({ info: event.target.value });
        console.log(this.state.info)
    }

    //TEXTBOX REGULAR
    handleChangeText(event) {
        this.setState({ infoText: event.target.value });
        console.log(this.state.infoText)
    }

    //STAR
    // onStarRating(value) {
    //     console.log(this.state.rating);
    // }



    /////// Show buttons component 
    textBoxSingleShow() {

        this.setState({
            type: "Text Box Single",
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

    render() {
        return (
            <div className="container">
                <Title header="Survey Edit" />
                <div className="row">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col" className="otherLetter">Question</th>
                                <th scope="col" className="otherLetter">Type</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.state.feedbackQuestion.map((list, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="otherLetterB" >{list.number}.
                                        {list.question} </td>

                                        {/* FOR TESTING ONLY */}
                                        <td dangerouslySetInnerHTML={{ __html: list.type }}></td>

                                        <td></td>



                                        <td>
                                            <button className="btn btn-outline-secondary otherLetterB" onClick={this.updateForm.bind(this, list)}>
                                                Update
                                            </button>
                                            <button className="btn btn-outline-danger otherLetterB" onClick={this.deleteQuestion.bind(this, list.id)}>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div>
                    <input type="text" className="form-control" placeholder="Number" aria-label="Number" aria-describedby="basic-addon1" value={this.state.number} onChange={(e) => { this.setState({ number: e.target.value }) }} />
                    <input type="text" className="form-control" placeholder="Question" aria-label="Question" aria-describedby="basic-addon1" value={this.state.question} onChange={(e) => { this.setState({ question: e.target.value }) }} />

                    <div className="container">
                        <div className=".col-lg-6 height">
                            <div> {this.state.textBox ? <TextBoxFull info={this.state.info} handleChange={this.handleChange.bind(this)} /> : null}  </div>
                            {this.state.textBoxSingle ? <div> <TextBoxRegular infoText={this.state.infoText} handleChangeText={this.handleChangeText.bind(this)} />       </div> : null}
                            {this.state.starRating ? <div> <StarRating />           </div> : null}
                            {this.state.dropDown ? <div> <Dropdown />             </div> : null}
                            {this.state.radioRating ? <div> <RadioRating radio2={this.state.radio2}
                                radio3={this.state.radio3}
                                radio4={this.state.radio4}
                                onRadioChange2={this.onRadioChange2.bind(this)}
                                onRadioChange3={this.onRadioChange3.bind(this)}
                                onRadioChange4={this.onRadioChange4.bind(this)} />          </div> : null}
                            {this.state.buttonRating ? <div> <ButtonRating onRadioChange1={this.onRadioChange1.bind(this)}
                                radio1={this.state.radio1} />         </div> : null}
                            {this.state.multipleChoice ? <div> <MultipleChoice />       </div> : null}

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
                        <input type="date" className="form-control" placeholder="Created" aria-label="Created" aria-describedby="basic-addon1" value={this.state.created} onChange={(e) => { this.setState({ created: e.target.value }) }} />
                    </div>
                    <button className="btn btn-secondary btn-lg btn-block space otherLetterB"
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