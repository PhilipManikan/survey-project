import React, { Component } from 'react';
require('../firebase/firebaseConfig')
import * as firebase from 'firebase';



import Custom from '../helpers/custom';

const db = firebase.firestore();

class Survey extends Component {
    state = {

        questions: [],
        results: [],
        surveyname: this.props.surveyname,
        user: this.props.user,
        dataLoaded: false
    }

    async componentDidMount() {
        let doc = await db.collection("survey").doc(this.props.surveyname).get();
        let document = doc.data();



        let { questions } = document;

        let results = this.generateResults(questions);

        this.setState({
            questions,
            results,
            dataLoaded: true
        })
    }

    generateResults = questions => {
        let results = questions.map(q => ({
            id: q.id,
            type: q.type,
            question: q.question,
            result: q.options[0]
        }));
        return results;
    }

    currValueCreator = id => value => {
        let copy = [...this.state.results];
        let indexToChange = copy.findIndex(x => x.id === id);

        // // edit the result to show current selection
        copy[indexToChange].result = value;
        this.setState({
            results: copy
        })
    }

    submitSurvey = async () => {
        // do all your submit survey logic here: db/api/etc
        console.log('Submit', this.state.results)

        let { results, surveyname, user } = this.state;

        await db.collection('results').add({
            results,
            surveyname,
            user
        })
    }

    render() {
        return (
            <div>
                <div  >
                    <h3 className="text-center letter"> {this.state.surveyname} </h3>

                    {this.state.dataLoaded == true && this.state.questions.map((quest, i) => {
                        return (
                            <div key={i} >
                                <div className="otherLetterB space" >
                                    {quest.id}.
                                            {quest.question}
                                </div>

                                <div>
                                    <Custom type={quest.type} options={quest.options} currValue={this.currValueCreator(quest.id)} />
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className="input-group userform">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">First and last name</span>
                    </div>
                    <input type="text" className="form-control" value={this.state.user}  onChange={(e) => { this.setState({ user: e.target.value }) }} />
                  
                </div>
                <button className="btn btn-primary btn-lg btn-block space otherLetterB" onClick={this.submitSurvey}>Submit</button>
            </div>
        );
    }
}

export default Survey;