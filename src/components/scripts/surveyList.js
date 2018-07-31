import React, { Component }
    from 'react'; require('../firebase/firebaseConfig')
import * as firebase from 'firebase';
require("firebase/firestore");
import Title from '../helpers/title'

class SurveyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            survey: [{
                surveyname: "",
                created: "",
                feedbackQuestion: []
            }],
            surveyname: "",
            created: "",
            id: "",
            feedbackQuestion: [],
            dataLoaded: false,
            showEditSurvey: false,

        }
    }

    componentDidMount() {
        var db = firebase.firestore();
        db.collection("survey").onSnapshot(querySnapshot => {
            this.setState({
                survey: []
            });
            querySnapshot.forEach(doc => {

                this.setState({
                    survey: [...this.state.survey, { id: doc.id, ...doc.data() }]
                });
            })
            var sortName = [...this.state.survey];

            this.setState({
                survey: sortName.sort((a, b) => a.surveyname > b.surveyname ? 1 : -1)
            })
            this.setState({
                surveyname: "",
                created: "",
                feedbackQuestion: [],
                id: "",
                dataLoaded: true
            })
        });
    }
    addSurvey() {
        var db = firebase.firestore();
        if (this.state.id == "") {
            let newsurvey = {
                surveyname: this.state.surveyname,
                created: this.state.created,
                feedbackQuestion: this.state.feedbackQuestion
            }
            var db = firebase.firestore();
            db.collection("survey").add(newsurvey);

        }
        else {
            db.collection("survey").doc(this.state.id).set({
                surveyname: this.state.surveyname,
                created: this.state.created,
                feedbackQuestion: this.state.feedbackQuestion
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

            this.setState({
                surveyname: "",
                created: "",
                id: "",
                showEditSurvey: false
            })
        }
    }

    deleteSurvey(id) {

        var db = firebase.firestore();

        db.collection("survey").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catach(function (error) {
            console.error("Error on removing document: ", error);
        });
    }

    updateSurvey(survey) {
        this.setState({
            showEditSurvey: true,
            surveyname: survey.surveyname,
            created: survey.created,
            feedbackQuestion: survey.feedbackQuestion,
            id: survey.id
        })
        console.log(survey.feedbackQuestion)
    }

    render() {

        return (
            <div className="container">
                <Title header="Survey List" />
                <div className="row">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col" className="otherLetter">Name</th>
                                <th scope="col" className="otherLetter">Created</th>
                                <th scope="col" className="otherLetter">Question</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.survey.map((list, index) => {
                                return (
                                    <tr key={index}>
                                        <th className="otherLetterB" >{list.surveyname} </th>
                                        <td className="otherLetterB" > {list.created} </td>
                                        {this.state.dataLoaded == true && this.state.survey[index].feedbackQuestion.map((quest, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td className="otherLetterB" >
                                                        {quest.number}.{quest.question}
                                                    </td>
                                                    <td className="otherLetterB">{quest.type} </td>
                                                </tr>
                                            )
                                        })}
                                        <td>
                                            <button className="btn btn-outline-secondary otherLetterB" >
                                                Send Survey
                                            </button>
                                            <button className="btn btn-outline-secondary otherLetterB" >
                                                Edit Survey
                                            </button>
                                            <button className="btn btn-outline-secondary otherLetterB" onClick={this.updateSurvey.bind(this, list)}>
                                                Update Name Date
                                            </button>
                                            <button className="btn btn-outline-danger otherLetterB" onClick={this.deleteSurvey.bind(this, list.id)}>
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
                    <input type="text" className="form-control" placeholder="Survey Name" aria-label="Survey Name" aria-describedby="basic-addon1" value={this.state.surveyname} onChange={(e) => { this.setState({ surveyname: e.target.value }) }} />
                    <input type="date" className="form-control" placeholder="Created" aria-label="Created" aria-describedby="basic-addon1" value={this.state.created} onChange={(e) => { this.setState({ created: e.target.value }) }} />
                </div>

                <div>


                    {this.state.showEditSurvey ?
                        <input type="text" className="form-control" placeholder="Number" aria-label="Number" aria-describedby="basic-addon1" value={this.state.number} onChange={(e) => { this.setState({ number: e.target.value }) }} />
                        : null}
                    {this.state.showEditSurvey ?
                        <input type="text" className="form-control" placeholder="Question" aria-label="Question" aria-describedby="basic-addon1" value={this.state.question} onChange={(e) => { this.setState({ question: e.target.value }) }} />
                        : null}
                </div>

                <button onClick={this.addSurvey.bind(this)} className="btn btn-success btn-lg btn-block space otherLetterB">
                    Add Update
                </button>
            </div>
        );
    }
}

export default SurveyList;