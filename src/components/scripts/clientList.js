import React, { Component }
    from 'react'; require('../firebase/firebaseConfig')
import * as firebase from 'firebase';
require("firebase/firestore");
import Title from '../helpers/title'


class ClientList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientList: [{
                name: "",
                email: ""
            }],
            name: "",
            email: "",
            id: ""
        }
    }

    componentDidMount() {
        var db = firebase.firestore();
        db.collection("clientList").onSnapshot(querySnapshot => {
            this.setState({
                clientList: []
            });
            querySnapshot.forEach(doc => {

                this.setState({
                    clientList: [...this.state.clientList, { id: doc.id, ...doc.data() }]
                });
            })
            var sortName = [...this.state.clientList];

            this.setState({
                clientList: sortName.sort((a, b) => a.name > b.name ? 1 : -1)
            })
            this.setState({
                name: "",
                email: "",
                id: ""
            })
        });
    }
    addClient() {
        var db = firebase.firestore();
        if (this.state.id == "") {
            let newclientList = {
                name: this.state.name,
                email: this.state.email,
            }
            var db = firebase.firestore();
            db.collection("clientList").add(newclientList);

        }
        else {
            db.collection("clientList").doc(this.state.id).set({
                name: this.state.name,
                email: this.state.email,
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });

            this.setState({
                name: "",
                email: "",
                id: ""
            })
        }

    }

    
    deleteClient(id) {

        var db = firebase.firestore();

        db.collection("clientList").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catach(function (error) {
            console.error("Error on removing document: ", error);
        });
    }


    updateInfo(client) {
        this.setState({
            name: client.name,
            email: client.email,
            id: client.id
        })
    }

    render() {
        return (
            <div className="container">
                <Title header="Client List" />
                <div className="row">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col" className="otherLetter">Name</th>
                                <th scope="col" className="otherLetter">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.clientList.map((list, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="otherLetterB">{list.name} </td>
                                        <td className="otherLetterB">{list.email} </td>
                                        <td>
                                            <button className="btn btn-outline-secondary otherLetterB" onClick={this.updateInfo.bind(this, list)}>
                                                Update
                                            </button>
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
                <div>
                    <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                    <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                </div>
                <button onClick={this.addClient.bind(this)} className="btn btn-secondary btn-success right otherLetterB">
                    Add Update
                </button>
            </div>
        );
    }
}

export default ClientList;