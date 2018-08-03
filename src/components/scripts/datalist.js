import React, { Component }
    from 'react'; require('../firebase/firebaseConfig')
import * as firebase from 'firebase';
require("firebase/firestore");
import Title from '../helpers/title'
import uniqid from 'uniqid'

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [{
                results: [],
                surveyname: "",
                user: "",
            }],
            id: "",
            dataLoaded: false
        }
    }

    async componentDidMount() {
        var db = firebase.firestore();
        let querySnapshot = await db.collection("results").get();


        querySnapshot.forEach(doc => {
            this.setState({
                results: [
                    ...this.state.results,
                    { id: doc.id, ...doc.data() }
                ]
            });
        })

        var sortName = [...this.state.results];

        this.setState({
            results: sortName.sort((a, b) => a.user > b.user ? 1 : -1),
            surveyname: "",
            user: "",
            dataLoaded: true

        })

    }

    async deleteClient(id) {

        var db = firebase.firestore();
        try {
            await db.collection("results").doc(id).delete()
            console.log("Document successfully deleted!");
        }
        catch (error) {
            console.error("Error on removing document: ", error);
        }
    }


    render() {
        return (
            <div className="container">
                <Title header="Data" />
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="otherLetter">User Name</th>
                                <th scope="col" className="otherLetter">Survey Name</th>
                                <th scope="col" className="otherLetter">Question</th>
                                <th scope="col" className="otherLetter">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.dataLoaded && this.state.results.map((list, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="otherLetterB">{list.user} </td>
                                        <td className="otherLetterB">{list.surveyname} </td>
                                        <td>
                                            {
                                                list.results.map(x => <div key={uniqid()} className="otherLetterB">{x.question} </div>)
                                            }
                                        </td>
                                        <td>
                                            {
                                                list.results.map(x => <div key={uniqid()} className="otherLetterB">{x.result} </div>)
                                            }
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-danger otherLetterB" onClick={this.deleteClient.bind(this, list.id)}>
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Data;