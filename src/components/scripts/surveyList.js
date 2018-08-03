import React, { Component }
    from 'react'; require('../firebase/firebaseConfig')
import * as firebase from 'firebase';
require("firebase/firestore");
import Title from '../helpers/title'
import Survey from '../scripts/survey'

class SurveyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            survey: [{
                id: "",
                questions: []
            }],
            id: "",

            dataLoaded: false,
            showSurvey: false,

        }
    }

    componentDidMount() {
        this.loadPage();
    }

    loadPage = async () => {
        var db = firebase.firestore();

        let querySnapshot = await db.collection('survey').get();
        let ids = [];

        querySnapshot.forEach(doc => {
            console.log(doc.id);
            ids.push(doc.id)
        })

        console.log("IDS:", ids)

        this.setState({
            survey: ids,
            dataLoaded: true
        });
    }


    async deleteSurvey(id) {

        var db = firebase.firestore();
        try {
            await db.collection("survey").doc(id).delete()
            console.log("Document successfully deleted!");
            this.loadPage();
        }
        catch (error) {
            console.error("Error on removing document: ", error);
        }
    }


    viewSurvey(id) {
        this.setState({
            showSurvey: true,
            surveyname: id,
        })
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
                                <th scope="col" className="otherLetter">Type</th>

                            </tr>
                        </thead>
                        <tbody>

                            {this.state.dataLoaded && this.state.survey.map((id, index) => {
                                return (
                                    <tr key={index}>
                                        <th className="otherLetterB" >{id} </th>


                                        <td>
                                            <button className="btn btn-outline-secondary otherLetterB" onClick={this.viewSurvey.bind(this, id)}>
                                                View Survey
                                            </button>


                                            <button className="btn btn-outline-danger otherLetterB" onClick={this.deleteSurvey.bind(this, id)}>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </table>
                </div>
                {this.state.showSurvey &&
                    <Survey surveyname={this.state.surveyname} />
                }

            </div>
        );
    }
}

export default SurveyList;